import React from "react";
import { FeatureGroup, useLeaflet } from "react-leaflet";
import L, { icon } from "leaflet";
import { EditControl } from "react-leaflet-draw";
import firebase from "../firebase.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "./Draw.css";

const Draw = () => {
    const { map } = useLeaflet();
    const [iconsJson, setIconsJson] = useState([]);
    const [dataFetched, setDataFetched] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://dynamic-maps-backend.herokuapp.com/maps/list/${id}`).then(res => {
            //delete the last comma from the json string
            let jsonString = res.data.map.icons.slice(0, -1);
            const newJsonString = `[${jsonString}]`;
            setIconsJson(JSON.parse(newJsonString));
            setDataFetched(true);
        });
    }, []);

    

    // Hacky stuff below
    var smallClimateBlue = new L.Icon({
        iconUrl: "/icons/transparency_user.png",
        iconSize: [75, 75],
        iconAnchor: [38, 28],
    });
    var smallAccessibilityBlue = new L.Icon({
        iconUrl: "./icons/equity_user.png",
        iconSize: [75, 75],
        iconAnchor: [38, 22],
    });
    var smallVibrancyBlue = new L.Icon({
        iconUrl: "./icons/vibrancy_user.png",
        iconSize: [75, 75],
        iconAnchor: [38, 25],
    });
    var smallCommunityBlue = new L.Icon({
        iconUrl: "./icons/community_user.png",
        iconSize: [75, 75],
        iconAnchor: [38, 25],
    });
    var smallEngagementBlue = new L.Icon({
        iconUrl: "./icons/engagement_user.png",
        iconSize: [75, 75],
        iconAnchor: [38, 25],
    });

    var newIcon = new L.Icon({
        iconUrl: "/favicon.ico",
        iconSize: [75, 75],
        iconAnchor: [38, 25],
    });

    
    if(dataFetched) {
        const array2 = [{
            enabled: true,
            handler: new L.Draw.Marker(map, { icon: smallAccessibilityBlue }),
            title: "Add Accessibility Action",
        }, {
            enabled: true,
            handler: new L.Draw.Marker(map, { icon: smallAccessibilityBlue }),
            title: "Add Accessibility Action",
        }];
        L.DrawToolbar.include({
            getModeHandlers: function (map) {
                return array2;
            },
        });  
    } else {
        console.log("no icons");
    }
    // ----
    const deletePoint = (layer) => {
        const uid = layer.properties.id;
        console.log(uid);
        var updates = {};
        updates["/points/" + uid] = null;
        updates["/comments/" + uid] = null;
        firebase.database().ref().update(updates);
    };
    const editPoint = (layer) => {
        const uid = layer.properties.id;
        const latlng = layer.getLatLng();
        var updates = {};

        const pointData = {
            lat: latlng.lng,
            lng: latlng.lat,
            type: layer.properties.type,
        };

        updates["/points/" + uid] = pointData;
        //updates["/comments/" + uid] = null;
        firebase.database().ref().update(updates);
    };

    const handleCreate = (e) => {
        const layer = e.layer;
        map.panTo(layer.getLatLng());

        var popup = L.popup().setLatLng(layer.getLatLng()).setContent(
            `<div class="newComment">
                    <h3 class="heading">Comment</h3>
                    <textarea id="commentText" cols="60" rows="5"></textarea>

                    <div class="popReason">
                        <label>What's your relationship to Medford?</label>
                        <div class='checkGroup'>
                            <input id='popLive' type='checkbox' />
                            <label>I live here</label>
                        </div>
                        <div class='checkGroup'>
                            <input id='popWork' type='checkbox' />
                            <label>I work here</label>
                        </div>
                        <div class='checkGroup'>
                            <input id='popVisit' type='checkbox' />
                            <label>I visit</label>
                        </div>
                    </div>

                    <div class="popName">
                        <label>Optional: Your Name</label>
                        <input id='commentName' type='text'/>
                    </div>

                    <div class="popEmail">
                        <label>Optional: Your Email</label>
                        <input id='commentEmail' type='email' placeholder='Your email'/>
                    </div>
                    
                    <div class="popButtons">
                        <button class="popSave button--primary">Post</button>
                        <button class="popCancel button--secondary">Cancel</button>
                    </div>
                </div>`
        );

        layer.bindPopup(popup).openPopup();
        //layer.on("click", centerAndZoomToPoint);
    };

    const handleEdit = (e) => {
        const layers = e.layers;
        layers.eachLayer(function (layer) {
            if (layer.properties) {
                editPoint(layer);
            }
        });
    };
    const handleDelete = (e) => {
        var layers = e.layers;
        layers.eachLayer(function (layer) {
            if (layer.properties) {
                deletePoint(layer);
            }
        });
    };

    return (
        <FeatureGroup>
            <EditControl
                position="topleft"
                onEdited={handleEdit}
                onCreated={handleCreate}
                onDeleted={handleDelete}
                draw={{
                    polyline: false,
                    polygon: false,
                    circle: false,
                    rectangle: false,
                    circlemarker: false,
                }}
            />
        </FeatureGroup>
    );
};

export default Draw;

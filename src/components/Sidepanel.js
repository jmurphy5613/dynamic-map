import React, { useState, Fragment } from "react";
import { Sidebar, Tab } from "react-leaflet-sidebarv2";

import SideComment from "./SideComment";
import "./Sidepanel.css";

import axios from "axios";
import { useEffect } from 'react';
import { useParams } from "react-router-dom";

function Sidepanel(props) {
    const [collapsed, setCollapsed] = useState(false);
    const [selected, setSelected] = useState("home");
    const [language, setLanguage] = useState("English");

    let { id } = useParams();

    let comments = props.comments;

    const open = (id) => {
        if (selected === id && collapsed === false) {
            setCollapsed(true);
        } else {
            setCollapsed(false);
            setSelected(id);
        }
    };


    const [homeDescription, setHomeDescription] = useState("");
    const [aboutDescription, setAboutDescription] = useState("");


    const setStyleAndContentValues = (map) => {
        let header = document.getElementsByClassName('sidebar-header');
        const rgbValues = JSON.parse(map.headerColor);
        header[0].style.backgroundColor = `rgb(${rgbValues.r}, ${rgbValues.g}, ${rgbValues.b})`;
        header[1].style.backgroundColor = `rgb(${rgbValues.r}, ${rgbValues.g}, ${rgbValues.b})`;
        header[2].style.backgroundColor = `rgb(${rgbValues.r}, ${rgbValues.g}, ${rgbValues.b})`;
        setHomeDescription(map.homeDescription);
        setAboutDescription(map.aboutDescription);
    }

    useEffect(() => {
        console.log(id);
        axios.get(`https://dynamic-maps-backend.herokuapp.com/maps/list/${id}`).then(res => {
            console.log(res.data.map);
            setStyleAndContentValues(res.data.map);
        });
    }, [])

    return (
        <Sidebar
            id="sidebar"
            position="left"
            collapsed={collapsed}
            selected={selected}
            onOpen={(id) => open(id)}
            onClose={() => setCollapsed(true)}
            closeIcon={<img className="close" alt="" src="/icons/close.svg" />}
        >
            <Tab
                id="home"
                header="Home"
                icon={
                    selected !== "home" ? (
                        <img className="home" alt="" src="/icons/home.png" />
                    ) : (
                        <img
                            className="home"
                            alt=""
                            src="/icons/home_live.png"
                        />
                    )
                }
                active
            >

                    <div>
                         <p>
                        <button
                            className="spanish button--primary"
                        >
                            en Español
                        </button>
                        </p>
                        <div dangerouslySetInnerHTML={{ __html: homeDescription}}></div>

                        {/* <div className="infoType">
                            <img className="textIcon" src="/icons/climate.png" alt="" />
                            <p>
                                <b>Climate:</b> Use the{" "}
                                <img
                                    className="inTextIcon climate"
                                    src="/icons/tool_add_climate.png"
                                    alt=""
                                />{" "}
                                to propose local climate ideas.
                            </p>
                        </div> */}
                <p>
                <button
                    className="getStarted button--primary"
                    onClick={() => setCollapsed(true)}
                >
                    Get Started
                </button>
                </p>
                </div>
            </Tab>

            <Tab
                id="infoTab"
                header="About the Plan"
                icon={
                    selected !== "infoTab" ? (
                        <img
                            className="info"
                            alt=""
                            src="/icons/new_info.png"
                        />
                    ) : (
                        <img
                            className="info"
                            alt=""
                            src="/icons/info_live.png"
                        />
                    )
                }
            >

                    <div>
                            <p>
                            <button
                                className="spanish button--primary"
                            >
                               en Español
                            </button>
                        </p>
                    <div dangerouslySetInnerHTML={{ __html: aboutDescription }}></div>
                </div>
            </Tab>

            <Tab
                id="commentsTab"
                header="Comments"
                icon={
                    selected !== "commentsTab" ? (
                        <img
                            className="comments"
                            alt=""
                            src="/icons/side_comments.png"
                        />
                    ) : (
                        <img
                            className="comments"
                            alt=""
                            src="/icons/comments_live.png"
                        />
                    )
                }
            >
                {comments &&
                    Object.keys(comments).length > 0 &&
                    Object.keys(comments).map((id) => (
                        <Fragment key={id}>
                            {!comments[id].hidden && (
                                <SideComment
                                    key={id}
                                    comment={{ id: id, ...comments[id] }}
                                    map={props.map}
                                    latlng={{
                                        lat: props.points[id].lng,
                                        lng: props.points[id].lat,
                                    }}
                                ></SideComment>
                            )}
                        </Fragment>
                    ))}
            </Tab>
        </Sidebar>
    );
}

export default Sidepanel;

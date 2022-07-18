import * as L from "leaflet";

export const firebaseConfig = {
    apiKey: "AIzaSyCt0ewRsM4ltSTQ78gpnn7PZIUX52W31Lo",
    authDomain: "medfordmap2.firebaseapp.com",
    databaseURL: "https://medfordmap2-default-rtdb.firebaseio.com",
    projectId: "medfordmap2",
    storageBucket: "medfordmap2.appspot.com",
    messagingSenderId: "1096097233102",
    appId: "1:1096097233102:web:e871bf3eba187dcc9a789f",
    measurementId: "G-RMQFL83NQR"
}

export const focusLocation = [42.4, -71.1];

export const baseMap = "https://api.mapbox.com/styles/v1/landaudesign/ckp77s8iq50q518nuadzoh59x/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGFuZGF1ZGVzaWduIiwiYSI6ImNrZ3F4dDIyeTBsMXIyenIzd2EwdnBsZTQifQ.MOBff0ku-Z960ubZPr3b6g";
export const satMap = "https://api.mapbox.com/styles/v1/landaudesign/ckp77s8iq50q518nuadzoh59x/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGFuZGF1ZGVzaWduIiwiYSI6ImNrZ3F4dDIyeTBsMXIyenIzd2EwdnBsZTQifQ.MOBff0ku-Z960ubZPr3b6g";

export const homePanelText = "<p>Medford Map</p><p>A map of Medford, MA</p>";

export const aboutPanelText = `<p>Medford Map</p><p>A map of Medford, MA</p>`;


//define the icons for the buttons here:
// var example = new L.Icon({
//     iconUrl: "./icons/example.png",
//     iconSize: [75, 75],
//     iconAnchor: [38, 28],
// }


export const Buttons = [

    
];


export const Icons = {
    climate: L.Icon.extend({
        options: {
            iconUrl: "./icons/climate.png",
            iconAnchor: new L.Point(38, 18),
            iconSize: new L.Point(76, 76),
        },
    }),

    accessibility: L.Icon.extend({
        options: {
            iconUrl: "./icons/equity.png",
            iconAnchor: new L.Point(38, 18),
            iconSize: new L.Point(75, 75),
        },
    }),
    vibrancy: L.Icon.extend({
        options: {
            iconUrl: "./icons/vibrancy.png",
            iconAnchor: new L.Point(38, 22),
            iconSize: new L.Point(75, 75),
        },
    }),
    community: L.Icon.extend({
        options: {
            iconUrl: "./icons/community.png",
            iconAnchor: new L.Point(38, 22),
            iconSize: new L.Point(75, 75),
        },
    }),
    engagement: L.Icon.extend({
        options: {
            iconUrl: "./icons/transparency.png",
            iconAnchor: new L.Point(38, 22),
            iconSize: new L.Point(75, 75),
        },
    }),
};


//custom styles for the map here:
export const primaryColor = '#000000';
export const secondaryColor = '#ffffff';
(this.webpackJsonpmedfordmap2=this.webpackJsonpmedfordmap2||[]).push([[0],{123:function(e,t,n){},128:function(e,t,n){},129:function(e,t,n){},130:function(e,t,n){},134:function(e,t,n){},138:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(20),i=n.n(o),r=(n(84),n(9)),l=n(36),m=n(10),s=n(53);n(87),n(89);s.initializeApp({apiKey:"AIzaSyCt0ewRsM4ltSTQ78gpnn7PZIUX52W31Lo",authDomain:"medfordmap2.firebaseapp.com",databaseURL:"https://medfordmap2-default-rtdb.firebaseio.com",projectId:"medfordmap2",storageBucket:"medfordmap2.appspot.com",messagingSenderId:"1096097233102",appId:"1:1096097233102:web:e871bf3eba187dcc9a789f",measurementId:"G-RMQFL83NQR"});var p=s,u=(n(90),n(91),n(18)),d=n(62),b=n(51),f=n(63),h=n(60),y=n(59),v=n(78),E=n(74),g=n.n(E),O=n(1),k=n.n(O),w=n(27),j=n.n(w);function N(e,t,n){var a="";return e&&t&&n?a="Lives in, works in, visits Medford":e&&t&&!n?a="Lives and works in Medford":e&&!t&&n?a="Lives in and visits Medford":!e&&t&&n?a="Works in and visits Medford":e?a="Lives in Medford":t?a="Works in Medford":n&&(a="Visits Medford"),a}var S=n(3),C=n(61),A=n(77),I=n(32),L=n.n(I),x=(n(123),function(){var e=Object(S.c)().map,t=Object(a.useState)([]),n=Object(r.a)(t,2),o=(n[0],n[1]),i=Object(m.e)().id;Object(a.useEffect)((function(){L.a.get("https://dynamic-maps-backend.herokuapp.com/maps/list/".concat(i)).then((function(e){o("[".concat(e.data.map.icons,"]")),console.log(JSON.parse("[".concat(e.data.map.icons,"]")))}))}),[]);var l=new k.a.Icon({iconUrl:"./icons/transparency_user.png",iconSize:[75,75],iconAnchor:[38,28]}),s=new k.a.Icon({iconUrl:"./icons/equity_user.png",iconSize:[75,75],iconAnchor:[38,22]}),u=new k.a.Icon({iconUrl:"./icons/vibrancy_user.png",iconSize:[75,75],iconAnchor:[38,25]}),d=new k.a.Icon({iconUrl:"./icons/community_user.png",iconSize:[75,75],iconAnchor:[38,25]}),b=new k.a.Icon({iconUrl:"./icons/engagement_user.png",iconSize:[75,75],iconAnchor:[38,25]}),f=new k.a.Icon({iconUrl:"/favicon.ico",iconSize:[75,75],iconAnchor:[38,25]});k.a.DrawToolbar.include({getModeHandlers:function(e){return[{enabled:!0,handler:new k.a.Draw.Marker(e,{icon:l}),title:"Add Climate Action"},{enabled:!0,handler:new k.a.Draw.Marker(e,{icon:s}),title:"Add Accessibility Action"},{enabled:!0,handler:new k.a.Draw.Marker(e,{icon:u}),title:"Add Vibrancy Action"},{enabled:!0,handler:new k.a.Draw.Marker(e,{icon:d}),title:"Add Community Action"},{enabled:!0,handler:new k.a.Draw.Marker(e,{icon:b}),title:"Add Engagement Action"},{enabled:!0,handler:new k.a.Draw.Marker(e,{icon:f}),title:"Add Action"},{enabled:!0,handler:new k.a.Draw.Marker(e,{icon:f}),title:"Add Action"}]}});return c.a.createElement(C.a,null,c.a.createElement(A.a,{position:"topleft",onEdited:function(e){e.layers.eachLayer((function(e){e.properties&&function(e){var t=e.properties.id,n=e.getLatLng(),a={},c={lat:n.lng,lng:n.lat,type:e.properties.type};a["/points/"+t]=c,p.database().ref().update(a)}(e)}))},onCreated:function(t){var n=t.layer;e.panTo(n.getLatLng());var a=k.a.popup().setLatLng(n.getLatLng()).setContent("<div class=\"newComment\">\n                    <h3 class=\"heading\">Comment</h3>\n                    <textarea id=\"commentText\" cols=\"60\" rows=\"5\"></textarea>\n\n                    <div class=\"popReason\">\n                        <label>What's your relationship to Medford?</label>\n                        <div class='checkGroup'>\n                            <input id='popLive' type='checkbox' />\n                            <label>I live here</label>\n                        </div>\n                        <div class='checkGroup'>\n                            <input id='popWork' type='checkbox' />\n                            <label>I work here</label>\n                        </div>\n                        <div class='checkGroup'>\n                            <input id='popVisit' type='checkbox' />\n                            <label>I visit</label>\n                        </div>\n                    </div>\n\n                    <div class=\"popName\">\n                        <label>Optional: Your Name</label>\n                        <input id='commentName' type='text'/>\n                    </div>\n\n                    <div class=\"popEmail\">\n                        <label>Optional: Your Email</label>\n                        <input id='commentEmail' type='email' placeholder='Your email'/>\n                    </div>\n                    \n                    <div class=\"popButtons\">\n                        <button class=\"popSave button--primary\">Post</button>\n                        <button class=\"popCancel button--secondary\">Cancel</button>\n                    </div>\n                </div>");n.bindPopup(a).openPopup()},onDeleted:function(e){e.layers.eachLayer((function(e){e.properties&&function(e){var t=e.properties.id;console.log(t);var n={};n["/points/"+t]=null,n["/comments/"+t]=null,p.database().ref().update(n)}(e)}))},draw:{polyline:!1,polygon:!1,circle:!1,rectangle:!1,circlemarker:!1}}))}),M=n(41);var D=function(e){var t=e.comment,n=e.map,a=e.latlng;return c.a.createElement("div",{className:"sideComment","data-id":t.id,onClick:function(){n.leafletElement.setView(a,18),setTimeout((function(){var e=t.id,c=function(e,t){return e.filter((function(e){return!!e.options&&e.options.id===t}))}(Object.values(n.leafletElement._layers),e);(c=c[0])&&(n.leafletElement.setView(c.getLatLng(),18),c.openPopup()),n.leafletElement.setView(a,18)}),300)}},c.a.createElement("h3",{className:"commentType"},c.a.createElement("img",{className:"icon",alt:"",src:"/icons/".concat(t.type,".png")}),t&&"climate"===t.type&&t.type.toUpperCase(),t&&"accessibility"===t.type&&t.type.toUpperCase(),t&&"vibrancy"===t.type&&t.type.toUpperCase(),t&&"community"===t.type&&t.type.toUpperCase(),t&&"engagement"===t.type&&t.type.toUpperCase()),c.a.createElement("div",{className:"comment"},c.a.createElement("h3",{className:"commentContent"},t.comment),c.a.createElement("p",{className:"commentBy"},"by ",t.commentBy),c.a.createElement("p",{className:"commentDate"},j()(t.submittedOn).fromNow()),c.a.createElement("p",{className:"commentAbout"},N(t.live,t.work,t.visit))))};n(128);var U=function(e){var t=Object(a.useState)(!1),n=Object(r.a)(t,2),o=n[0],i=n[1],l=Object(a.useState)("home"),s=Object(r.a)(l,2),p=s[0],d=s[1],b=Object(a.useState)("English"),f=Object(r.a)(b,2),h=(f[0],f[1],Object(m.e)().id),y=e.comments,v=Object(a.useState)(""),E=Object(r.a)(v,2),g=E[0],O=E[1],k=Object(a.useState)(""),w=Object(r.a)(k,2),j=w[0],N=w[1];return Object(a.useEffect)((function(){console.log(h),L.a.get("https://dynamic-maps-backend.herokuapp.com/maps/list/".concat(h)).then((function(e){console.log(e.data.map),function(e){var t=document.getElementsByClassName("sidebar-header"),n=JSON.parse(e.headerColor);t[0].style.backgroundColor="rgb(".concat(n.r,", ").concat(n.g,", ").concat(n.b,")"),t[1].style.backgroundColor="rgb(".concat(n.r,", ").concat(n.g,", ").concat(n.b,")"),t[2].style.backgroundColor="rgb(".concat(n.r,", ").concat(n.g,", ").concat(n.b,")"),O(e.homeDescription),N(e.aboutDescription)}(e.data.map)}))}),[]),c.a.createElement(M.Sidebar,{id:"sidebar",position:"left",collapsed:o,selected:p,onOpen:function(e){return function(e){p===e&&!1===o?i(!0):(i(!1),d(e))}(e)},onClose:function(){return i(!0)},closeIcon:c.a.createElement("img",{className:"close",alt:"",src:"/icons/close.svg"})},c.a.createElement(M.Tab,{id:"home",header:"Home",icon:"home"!==p?c.a.createElement("img",{className:"home",alt:"",src:"/icons/home.png"}):c.a.createElement("img",{className:"home",alt:"",src:"/icons/home_live.png"}),active:!0},c.a.createElement("div",null,c.a.createElement("p",null,c.a.createElement("button",{className:"spanish button--primary"},"en Espa\xf1ol")),c.a.createElement("p",null,g),c.a.createElement("p",null,c.a.createElement("button",{className:"getStarted button--primary",onClick:function(){return i(!0)}},"Get Started")))),c.a.createElement(M.Tab,{id:"infoTab",header:"About the Plan",icon:"infoTab"!==p?c.a.createElement("img",{className:"info",alt:"",src:"/icons/new_info.png"}):c.a.createElement("img",{className:"info",alt:"",src:"/icons/info_live.png"})},c.a.createElement("div",null,c.a.createElement("p",null,c.a.createElement("button",{className:"spanish button--primary"},"en Espa\xf1ol")),c.a.createElement("p",null,j))),c.a.createElement(M.Tab,{id:"commentsTab",header:"Comments",icon:"commentsTab"!==p?c.a.createElement("img",{className:"comments",alt:"",src:"/icons/side_comments.png"}):c.a.createElement("img",{className:"comments",alt:"",src:"/icons/comments_live.png"})},y&&Object.keys(y).length>0&&Object.keys(y).map((function(t){return c.a.createElement(a.Fragment,{key:t},!y[t].hidden&&c.a.createElement(D,{key:t,comment:Object(u.a)({id:t},y[t]),map:e.map,latlng:{lat:e.points[t].lng,lng:e.points[t].lat}}))}))))};var B=function(e){var t=e.content,n=e.admin;return console.log(e),c.a.createElement(a.Fragment,null,!t.hidden&&c.a.createElement("div",{className:"replyPop"},c.a.createElement("h3",{className:"commentContent"},t.comment),c.a.createElement("div",{className:"replyDetails"},n&&c.a.createElement("button",{className:"hide button--admin",onClick:function(){return e.hideReply(e.commentId,e.replyId)}},"Hide"),c.a.createElement("div",{className:"replyByDetails"},c.a.createElement("p",{className:"commentBy"},"by ",t.commentBy||"Anonymous","  ",j()(t.submittedOn).fromNow()),c.a.createElement("p",{className:"commentAbout"},N(t.live,t.work,t.visit))))))};var P=function(e){var t=e.admin,n=e.comment,o=e.replies,i=[];o&&(Object.keys(o).forEach((function(e){o[e].key=e,i.push(o[e])})),i=i.sort((function(e,t){return Date.parse(e.submittedOn)-Date.parse(t.submittedOn)})));var l=Object(a.useState)(!1),m=Object(r.a)(l,2),s=m[0],p=m[1],d=function(t){if(s){e.postReply(t);var n=t.target.previousSibling.previousSibling;n.scrollTop=n.scrollHeight}p(!s)};return c.a.createElement("div",{className:"comment"},c.a.createElement("p",{className:"commentType"},c.a.createElement("b",null,n.type.toUpperCase(),":")),c.a.createElement("h3",{className:"commentContent"},n.comment),c.a.createElement("p",{className:"commentBy"},"by ",n.commentBy),c.a.createElement("p",{className:"commentDate"},j()(n.submittedOn).fromNow()),c.a.createElement("p",{className:"commentAbout"},N(n.live,n.work,n.visit)),c.a.createElement("div",{className:"postedReplies"},n.featured&&o&&i.map((function(n,a){return c.a.createElement(B,{key:a,replyId:n.key,commentId:e.id,admin:t,hideReply:e.hideReply,content:Object(u.a)({},n)})}))),n.featured&&c.a.createElement(a.Fragment,null,s&&c.a.createElement(a.Fragment,null,c.a.createElement("div",{className:"replyControls"},c.a.createElement("textarea",{id:"replyText",className:"replyText",placeholder:"Your reply"}),c.a.createElement("div",{className:"replyReason"},c.a.createElement("label",null,"What's your relationship to Medford?"),c.a.createElement("div",{className:"replyChecks"},c.a.createElement("div",{className:"checkGroup"},c.a.createElement("input",{id:"replyLive",type:"checkbox"}),c.a.createElement("label",null,"Live")),c.a.createElement("div",{className:"checkGroup"},c.a.createElement("input",{id:"replyWork",type:"checkbox"}),c.a.createElement("label",null,"Work")),c.a.createElement("div",{className:"checkGroup"},c.a.createElement("input",{id:"replyVisit",type:"checkbox"}),c.a.createElement("label",null,"Visit")))),c.a.createElement("div",{className:"replyName"},c.a.createElement("label",null,"What's your name? (optional)"),c.a.createElement("input",{id:"replyName",type:"text"}))),c.a.createElement("button",{className:"postReply button--primary","data-id":e.id,onClick:function(e){return d(e)}},"Post Reply"),c.a.createElement("button",{className:"replyCancel",onClick:function(){return p(!1)}},"Cancel")),!s&&c.a.createElement("button",{className:"postReply button--primary","data-id":e.id,onClick:d},"Reply")),t&&c.a.createElement("div",{className:"admin"},c.a.createElement("button",{className:"hide button--admin",onClick:function(){return e.hideComment(e.id)}},n.hidden?"Unhide":"Hide"),c.a.createElement("button",{className:"feature button--admin",onClick:function(){return e.featureComment(e.id)}},n.featured?"Unfeature":"Feature")))},R=n(21),T=n(22),_=n(40),z=n(23),W=n(34),G=n(33),V=n(19),F=(n(129),O.Control.extend({options:{className:"",onOff:"",handleOff:function(){}},onAdd:function(){var e=O.DomUtil.create("div",this.options.className);return O.DomEvent.disableClickPropagation(e),e},onRemove:function(e){return this.options.onOff&&e.off(this.options.onOff,this.options.handleOff,this),this}})),H=Object(S.d)(function(e){Object(W.a)(n,e);var t=Object(G.a)(n);function n(){return Object(R.a)(this,n),t.apply(this,arguments)}return Object(T.a)(n,[{key:"createLeafletElement",value:function(e){return new F(Object.assign({},e))}},{key:"componentDidMount",value:function(){Object(_.a)(Object(z.a)(n.prototype),"componentDidMount",this).call(this),this.forceUpdate()}},{key:"render",value:function(){return this.leafletElement&&this.leafletElement.getContainer()?i.a.createPortal(this.props.children,this.leafletElement.getContainer()):null}}]),n}(V.a));n(130);var q=function(e){var t=Object(a.useState)(""),o=Object(r.a)(t,2),i=o[0],l=o[1],s=Object(a.useState)(""),E=Object(r.a)(s,2),O=(E[0],E[1]),w=Object(m.e)().id;Object(a.useEffect)((function(){L.a.get("https://dynamic-maps-backend.herokuapp.com/maps/list/".concat(w)).then((function(e){l(e.data.map.baseMap),O(e.data.map.icons)}))}),[]);var S=e.user,C=e.admin,A={climate:k.a.Icon.extend({options:{iconUrl:"./assets/images/icons/climate.png",iconAnchor:new k.a.Point(38,18),iconSize:new k.a.Point(76,76)}}),accessibility:k.a.Icon.extend({options:{iconUrl:"./icons/equity.png",iconAnchor:new k.a.Point(38,18),iconSize:new k.a.Point(75,75)}}),vibrancy:k.a.Icon.extend({options:{iconUrl:"./icons/vibrancy.png",iconAnchor:new k.a.Point(38,22),iconSize:new k.a.Point(75,75)}}),community:k.a.Icon.extend({options:{iconUrl:"./icons/community.png",iconAnchor:new k.a.Point(38,22),iconSize:new k.a.Point(75,75)}}),engagement:k.a.Icon.extend({options:{iconUrl:"./icons/transparency.png",iconAnchor:new k.a.Point(38,22),iconSize:new k.a.Point(75,75)}})},I=Object(a.useState)({}),M=Object(r.a)(I,2),D=M[0],B=M[1],R=Object(a.useState)({}),T=Object(r.a)(R,2),_=T[0],z=T[1],W=Object(a.useState)({}),G=Object(r.a)(W,2),V=G[0],F=G[1],q=Object(a.useState)({}),J=Object(r.a)(q,2),Y=J[0],Q=J[1],Z=Object(a.useState)(!1),K=Object(r.a)(Z,2),X=K[0],$=K[1],ee=Object(a.useState)(!0),te=Object(r.a)(ee,2),ne=te[0],ae=te[1],ce=Object(a.useState)(!0),oe=Object(r.a)(ce,2),ie=oe[0],re=oe[1],le=Object(a.useState)(!0),me=Object(r.a)(le,2),se=me[0],pe=me[1],ue=Object(a.useState)(!0),de=Object(r.a)(ue,2),be=de[0],fe=de[1],he=Object(a.useState)(!0),ye=Object(r.a)(he,2),ve=ye[0],Ee=ye[1];Object(a.useEffect)((function(){S?(p.database().ref("points").once("value").then((function(e){z(e.val())})),p.database().ref("comments").once("value").then((function(e){F(e.val())})),p.database().ref("replies").once("value").then((function(e){Q(e.val())}))):p.auth().signInAnonymously().then((function(){p.database().ref("points").once("value").then((function(e){z(e.val())})),p.database().ref("comments").once("value").then((function(e){F(e.val())})),p.database().ref("replies").once("value").then((function(e){Q(e.val())}))})).catch((function(e){e.code,e.message}))}),[p]);var ge=i;delete k.a.Icon.Default.prototype._getIconUrl,k.a.Icon.Default.mergeOptions({iconRetinaUrl:n(131),iconUrl:n(132),shadowUrl:n(133)});var Oe=function e(t){t.target.removeEventListener("click",e),t.target.disabled=!0;var n=Object.keys(D.leafletElement._layers),a=D.leafletElement._layers[n[n.length-2]],c=document.getElementById("commentText").value,o=document.getElementById("commentName").value;""===o&&(o="Anonymous");var i=document.getElementById("popLive").checked,r=document.getElementById("popWork").checked,l=document.getElementById("popVisit").checked,m=document.getElementById("commentEmail").value;a.properties={};var s="_"+Math.random().toString(36).substr(2,9);a.properties.id=s,a.properties.comment=c,a.properties.name=o,a.properties.email=m,a.properties.work=r,a.properties.visit=l,a.properties.live=i,a.options.id=s,D.leafletElement.closePopup();var p=N(i,r,l),u=k.a.popup().setLatLng(a.getLatLng()).setContent('<div class="comment">\n                <h3 class="commentContent">'+a.properties.comment+'</h3>\n                <p class="commentBy">\n                    by '+a.properties.name+'</p>\n                <p class="commentDate">'+j()((new Date).toISOString()).fromNow()+'</p>\n                <p class="commentAbout">'+p+"</p>\n                </div>");a.bindPopup(u),a.openPopup(),k.a.zoomSnap=0;var d=a.options.icon.options.iconUrl;d=d.includes("climate")?"climate":d.includes("accessibility")?"accessibility":d.includes("vibrancy")?"vibrancy":d.includes("community")?"community":"engagement",a.properties.type=d;var b=a.getLatLng(),f={lat:b.lng,lng:b.lat,type:d};_&&(_[a.properties.id]=f);var h={comment:c,commentBy:o,featured:!0,hidden:!1,work:r,live:i,visit:l,submittedOn:(new Date).toISOString(),upvote:0,type:d,email:m};V&&(V[a.properties.id]=h),a.on("click",(function(){return Ie(s)})),Se(a.properties.id,f,h)},ke=function(e){D.leafletElement.closePopup();var t=Object.keys(D.leafletElement._layers),n=D.leafletElement._layers[t[t.length-1]];D.leafletElement.removeLayer(n)},we=function(e){var t=V[e].hidden;_[e].hidden=!t;var n=Object(u.a)({},_);z(n),V[e].hidden=!t,n=Object(u.a)({},V),F(n);var a={};a["/comments/"+e+"/"]=V[e],a["/points/"+e+"/"]=_[e],p.database().ref().update(a)},je=function(e){var t=V[e].featured;V[e].featured=!t;var n=Object(u.a)({},V);F(n);var a={};a["/comments/"+e+"/"]=V[e],p.database().ref().update(a)},Ne=function(e,t){var n=Y[e][t].hidden;Y[e][t].hidden=!n;var a=Object(u.a)({},Y);Q(a);var c={};c["/replies/"+e+"/"+t]=Y[e][t],p.database().ref().update(c)},Se=function(e,t,n){var a={};a["/points/"+e]=t,a["/comments/"+e]=n,p.database().ref().update(a)},Ce=function(e,t){"climate"===e?ae(!t):"accessibility"===e?re(!t):"vibrancy"===e?pe(!t):"community"===e?fe(!t):Ee(!t),Object.keys(_).map((function(n){_[n].type===e&&(_[n].filtered=t)}));var n=Object(u.a)({},_);z(n)},Ae=function(e){var t=e.target.dataset.id,n=document.getElementById("replyText").value,a=document.getElementById("replyName").value;""===a&&(a="Anonymous");var c=document.getElementById("replyLive").checked,o=document.getElementById("replyWork").checked,i=document.getElementById("replyVisit").checked,r={comment:n,submittedOn:(new Date).toISOString(),commentBy:a,live:c,work:o,visit:i,hidden:!1,upvote:0},l="_"+Math.random().toString(36).substr(2,9);Y[t]||(Y[t]={}),Y[t][l]=r;var m=Object(u.a)({},Y);Q(m);var s={};s["/replies/"+t+"/"+l]=r,p.database().ref().update(s)},Ie=function(e){var t=document.querySelector("[data-id="+e+"]");null!=t&&t.scrollIntoView()};return c.a.createElement(a.Fragment,null,c.a.createElement("div",{id:"map-div"},c.a.createElement(U,{comments:V,points:_,map:D,id:w}),c.a.createElement(d.a,{ref:function(e){B(e)},className:"sidebar-map",id:"leaflet-map",center:[42.42493,-71.12884],zoom:13.5,style:{height:"100vh"},maxZoom:20,onlayeradd:function(e){var t=document.querySelectorAll(".popCancel");t&&t.forEach((function(e){e.addEventListener("click",ke)}));var n=document.querySelectorAll(".popSave");n&&n.forEach((function(e){e.addEventListener("click",Oe)}))}},c.a.createElement(v.a,{position:"topright",showMarker:!0,showPopup:!1,inputPlaceholder:"Search for a location",zoom:13,providerOptions:{region:"us"}}),c.a.createElement(b.b,{position:"bottomright"},c.a.createElement(b.b.BaseLayer,{name:"Streets",checked:!0},c.a.createElement(f.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> \xa9 <a href="https://www.mapbox.com/about/maps/">Mapbox</a> map by <a href="https://www.landau.design">LANDAU</a> + <a href="http://interface-studio.com/">Interface Studio</a>',url:ge})),c.a.createElement(b.b.BaseLayer,{name:"Satellite"},c.a.createElement(f.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> \xa9 <a href="https://www.mapbox.com/about/maps/">Mapbox</a> map by <a href="https://www.landau.design">LANDAU</a> + <a href="http://interface-studio.com/">Interface Studio</a>',url:ge}))),c.a.createElement(x,null),c.a.createElement(g.a,{showCoverageOnHover:!1,disableClusteringAtZoom:18},_&&Object.keys(_).length>0&&Object.keys(_).map((function(e){return!_[e].filtered&&!_[e].hidden&&c.a.createElement(h.a,{key:e,id:e,position:[_[e].lng,_[e].lat],icon:new A[_[e].type],onClick:function(){return Ie(e)}},V[e]&&c.a.createElement(y.a,{id:e,featured:V[e].featured,reply:!1},c.a.createElement(P,{admin:C,comment:V[e],replies:Y[e],id:e,postReply:Ae,hideComment:we,featureComment:je,hideReply:Ne})))}))),c.a.createElement(H,{className:"filter",position:"topleft"},!X&&c.a.createElement("button",{className:"filter",onClick:function(){return $(!0)},onMouseOver:function(){return $(!0)}},c.a.createElement("img",{alt:"",src:"/icons/new_filter.png"})),X&&c.a.createElement("div",{className:"filterList",onMouseLeave:function(){return $(!1)}},c.a.createElement("div",{className:"filterGroup"},c.a.createElement("input",{type:"checkbox",name:"climate",id:"filterClimate",checked:ne,onChange:function(){return Ce("climate",ne)}}),c.a.createElement("label",{htmlFor:"climate"},"Climate")),c.a.createElement("div",{className:"filterGroup"},c.a.createElement("input",{type:"checkbox",name:"accessibility",id:"filterAccessibility",checked:ie,onChange:function(){return Ce("accessibility",ie)}}),c.a.createElement("label",{htmlFor:"accessibility"},"Accessibility")),c.a.createElement("div",{className:"filterGroup"},c.a.createElement("input",{type:"checkbox",name:"vibrancy",id:"filterVibrancy",checked:se,onChange:function(){return Ce("vibrancy",se)}}),c.a.createElement("label",{htmlFor:"vibrancy"},"Vibrancy")),c.a.createElement("div",{className:"filterGroup"},c.a.createElement("input",{type:"checkbox",name:"community",id:"filterCommunity",checked:be,onChange:function(){return Ce("community",be)}}),c.a.createElement("label",{htmlFor:"community"},"Community")),c.a.createElement("div",{className:"filterGroup"},c.a.createElement("input",{type:"checkbox",name:"engagement",id:"filterEngagement",checked:ve,onChange:function(){return Ce("engagement",ve)}}),c.a.createElement("label",{htmlFor:"engagement"},"Engagement")))))))};n(134);var J=function(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),o=n[0],i=n[1],l=Object(a.useState)(""),m=Object(r.a)(l,2),s=m[0],p=m[1];return c.a.createElement("div",{id:"login"},c.a.createElement("div",{className:"loginCard"},c.a.createElement("h2",null,"Login"),c.a.createElement("p",null,"Sign in to manage the map."),e.failed&&c.a.createElement("div",{className:"alert"},"Invalid email or password"),c.a.createElement("input",{type:"email",className:"email",placeholder:"Email",onChange:function(e){return i(e.target.value)}}),c.a.createElement("input",{type:"password",className:"pass",placeholder:"Password",onChange:function(e){return p(e.target.value)}}),c.a.createElement("button",{className:"login button--primary",onClick:function(){return e.authenticate(o,s)}},"Log In")))};var Y=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)(!1),s=Object(r.a)(i,2),u=s[0],d=s[1];return p.auth().onAuthStateChanged((function(e){e&&o(e)})),c.a.createElement(l.a,null,c.a.createElement(m.a,{exact:!0,path:"/:id"},c.a.createElement(q,null)),c.a.createElement(m.a,{path:"/admin"},n.isAnonymous?c.a.createElement(J,{authenticate:function(e,t){p.auth().signInWithEmailAndPassword(e,t).catch((function(e){d(!0);e.code,e.message}))},failed:u}):c.a.createElement(q,{admin:!0,user:n})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(135),n(136),n(137);i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},79:function(e,t,n){e.exports=n(138)},84:function(e,t,n){},91:function(e,t,n){}},[[79,1,2]]]);
//# sourceMappingURL=main.729a08b5.chunk.js.map
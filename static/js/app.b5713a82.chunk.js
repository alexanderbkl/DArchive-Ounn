(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{103:function(e,t,n){e.exports=n.p+"static/media/logo.deaa9c5a.png"},156:function(e,t,n){e.exports=n.p+"static/media/file.73e9524a.png"},157:function(e,t,n){e.exports=n.p+"static/media/ounn.ad2c5e49.png"},159:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return p}));var a=n(28),r=n.n(a),i=(n(78),n(0),n(277)),o=n(278),c=n(160),s=n(192),l=n(194),d=n(195),h=n(196),u=n(1),b=n(264);r()(e,{TextEncoder:b.TextEncoder,TextDecoder:b.TextDecoder});var j=Object(o.a)();function p(){return Object(u.jsx)(i.a,{children:Object(u.jsxs)(j.Navigator,{children:[Object(u.jsx)(j.Screen,{name:"LogIn",component:s.a,options:{headerShown:!1}}),Object(u.jsx)(j.Screen,{name:"SigIn",component:l.a,options:{headerShown:!1}}),Object(u.jsx)(j.Screen,{name:"Home",component:c.a,options:{headerShown:!1}}),Object(u.jsx)(j.Screen,{name:"FileInfo",component:h.a,options:{headerShown:!1}}),Object(u.jsx)(j.Screen,{name:"Settings",component:d.a,options:{headerShown:!1}})]})})}}).call(this,n(49))},160:function(e,t,n){"use strict";var a=n(28),r=n.n(a),i=n(22),o=n.n(i),c=n(9),s=n.n(c),l=n(7),d=n.n(l),h=(n(78),n(0)),u=n(2),b=n(10),j=n(27),p=n(23),f=n(53),x=n(60),g=n(75),m=n(44),w=n(73),O=n(11),y=n(18),v=n(63),k=(n(215),n(82)),C=n(203),S=n(182),T=n(39),z=n(97),I=n(122),P=n(183),A=n.n(P),D=n(85),W=n(1),L=(n(226),n(129).default),R=!1,E=new AbortController,B=new AbortController,U=new I.b({token:z.a.Web3StorageToken,abortController:E});t.a=function(e){var t=e.route,a=e.navigation,i=Object(f.a)(),c=Object(y.f)(),l=Object(v.b)(),P=h.useState([]),M=s()(P,2),J=M[0],N=M[1],H=h.useState([]),F=s()(H,2),K=F[0],G=F[1],Q=h.useState(["Photos"]),V=s()(Q,2),Y=V[0],X=V[1],Z=h.useState({value:0,total:100}),_=s()(Z,2),q=_[0],$=_[1],ee=h.useState(!1),te=s()(ee,2),ne=te[0],ae=te[1],re=h.useState(!1),ie=s()(re,2),oe=ie[0],ce=ie[1],se=h.useState(!1),le=s()(se,2),de=le[0],he=le[1],ue=h.useState({current:0,total:0}),be=s()(ue,2),je=be[0],pe=be[1],fe=h.useState({}),xe=s()(fe,2),ge=xe[0],me=xe[1],we=h.useState(0),Oe=s()(we,2),ye=Oe[0],ve=Oe[1],ke=function(e){return new Promise((function(n,a){return d.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(R){a.next=3;break}return a.next=3,d.a.awrap(function(){var a,r,s,l,h;return d.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return R=!0,u.next=3,d.a.awrap(Object(y.e)(Object(y.h)(Object(y.b)(c,"Utenti",t.params.email.replaceAll(".","DOT"),"Photos"),Object(y.g)("data","desc"),Object(y.k)("dir","==",Y))));case 3:return a=u.sent,G([]),u.next=7,d.a.awrap(Object(y.e)(Object(y.h)(Object(y.b)(c,"Utenti",t.params.email.replaceAll(".","DOT"),"folders"),Object(y.k)("dir","==",Y))));case 7:for(r=u.sent,s=function(e){G((function(t){return[].concat(o()(t),[{id:r.docs[e].id,name:r.docs[e].data().name,data:r.docs[e].data().data}])}))},l=0;l<r.docs.length;l++)s(l);for(h=0,0==a.docs.length&&n();h<a.docs.length;h++)J.includes(J.filter((function(e){return e.id===a.docs[h].id}))[0])?a.docs.length-1==h&&n():function(){var t={cid:a.docs[h].data().cid,data:a.docs[h].data().data,id:a.docs[h].id,name:a.docs[h].data().name,type:a.docs[h].data().type,size:a.docs[h].data().size,ranHeightImage:Math.random()<.5?void 0:i.width<900?Object(O.a)("20%"):Object(O.a)("25%")};try{t.notPrivate=a.docs[h].data().notPrivate}catch(r){}a.docs[h].id==e?(N((function(e){return[t].concat(o()(e))})),h=a.docs.length):N((function(e){return[].concat(o()(e),[t])})),a.docs.length-1==h&&n()}();case 13:case"end":return u.stop()}}),null,null,null,Promise)}());case 3:n();case 4:case"end":return a.stop()}}),null,null,null,Promise)}))};h.useEffect((function(){return d.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:0==J.length&&(ae(!0),ce(!0),ke().then((function(){R=!1,ae(!1),ce(!1)})));case 1:case"end":return e.stop()}}),null,null,null,Promise)}),[J]),h.useEffect((function(){"diretta"==ge.modalita&&(void 0!=ge.size?Te(1):ze(3))}),[ge]);var Ce=function(e){var n,a,r,i,o,s,l,h;return d.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:n=confirm("Do you want upload private (encrypted) or public (not encrypted) files? ('OK' for private, 'Cancel' for public)"),a=!1,r=0;case 3:if(!(r<e.length)){u.next=59;break}if(ce(!0),ae(!0),pe({current:r+1,total:e.length}),i=void 0,!n){u.next=28;break}for(o=new TextEncoder,s=t.params.password;s.length<16;)s+="k";return u.next=14,d.a.awrap(window.crypto.subtle.importKey("raw",o.encode(s),"AES-GCM",!1,["encrypt","decrypt"]));case 14:return l=u.sent,u.t0=d.a,u.t1=window.crypto.subtle,u.t2={name:"AES-GCM",iv:o.encode(s)},u.t3=l,u.next=21,d.a.awrap(e[r].arrayBuffer());case 21:return u.t4=u.sent,u.t5=u.t1.encrypt.call(u.t1,u.t2,u.t3,u.t4),u.next=25,u.t0.awrap.call(u.t0,u.t5);case 25:i=u.sent,u.next=31;break;case 28:return u.next=30,d.a.awrap(e[r].arrayBuffer());case 30:i=u.sent;case 31:return ce(!1),$({value:0,total:100}),h=void 0,u.prev=34,u.next=37,d.a.awrap(function(){var a,o,s,l;return d.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return a=0,o=new I.a([i],"file"),u.next=4,d.a.awrap(U.put([o],{wrapWithDirectory:!1,onStoredChunk:function(e){(a=Math.floor(a+e))>o.size?$({value:o.size,total:o.size}):$({value:a,total:o.size})},controllerFetch:E}));case 4:return s=u.sent,u.next=7,d.a.awrap(Object(y.a)(Object(y.b)(c,"Utenti",t.params.email.replaceAll(".","DOT"),"Photos"),{cid:void 0==s.data?s:s.data.cid,data:Date.now(),name:e[r].name,type:"rar"==e[r].name.substring(e[r].name.lastIndexOf(".")+1)||"zip"==e[r].name.substring(e[r].name.lastIndexOf(".")+1)?"application/zip":e[r].type,size:e[r].size,dir:Y,notPrivate:!n}));case 7:return l=u.sent,h=l.id,u.next=11,d.a.awrap(ke(l.id).then((function(){R=!1,ae(!1),ce(!1)})).catch((function(t){R=!1,alert("Loading file cancelled"),ae(!1),r=e.length})));case 11:case"end":return u.stop()}}),null,null,null,Promise)}());case 37:u.next=56;break;case 39:return u.prev=39,u.t6=u.catch(34),r=e.length,a=!0,u.prev=43,u.next=46,d.a.awrap(Object(y.c)(Object(y.d)(c,"Utenti",t.params.email.replaceAll(".","DOT"),"Photos",h)));case 46:u.next=50;break;case 48:u.prev=48,u.t7=u.catch(43);case 50:E=new AbortController,U=new I.b({token:z.a.Web3StorageToken,abortController:E}),console.log(u.t6),alert("Loading failed"),ae(!1),ce(!1);case 56:r++,u.next=3;break;case 59:a||alert("All files have been uploaded successfully");case 60:case"end":return u.stop()}}),null,null,[[34,39],[43,48]],Promise)},Se=function(){var e;return d.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(null==(e=window.prompt("Enter the name of the folder"))||""==e){n.next=8;break}return n.next=4,d.a.awrap(Object(y.a)(Object(y.b)(c,"Utenti",t.params.email.replaceAll(".","DOT"),"folders"),{name:e,data:Date.now(),dir:Y}));case 4:return ae(!0),ce(!0),n.next=8,d.a.awrap(ke().then((function(){R=!1,ae(!1),ce(!1)})));case 8:case"end":return n.stop()}}),null,null,null,Promise)},Te=function(e){var n,i,o,s,l,h,u;return d.a.async((function(b){for(;;)switch(b.prev=b.next){case 0:if(5==e&&(A()("https://"+ge.cid+".ipfs.dweb.link"),alert("Link copied to clipboard")),4==e&&a.push("FileInfo",{email:t.params.email,name:ge.name,size:ge.size,data:ge.data,cid:ge.cid}),2!=e){b.next=8;break}return b.next=5,d.a.awrap(Object(y.c)(Object(y.d)(c,"Utenti",t.params.email.replaceAll(".","DOT"),"Photos",ge.id)));case 5:(n=r()([],J)).splice(n.indexOf(n.filter((function(e){return e.id===ge.id}))[0]),1),N(n);case 8:if(1==e&&(ge.notPrivate?((o=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?window:window.open()).window.document.write("<html>  <head>    <style>      html,      body {        height: 100%;        width: 100%;      }      .container {        align-items: center;        display: flex;        justify-content: center;        height: 100%;        width: 100%;      }    </style>  </head>  <body style='background-color: #191919; overflow: hidden'>    <div class='container'>      <img src='https://i.ibb.co/68tNrK6/ounn.png' style='width: 250px' />  <br/>    <div class='content'>        <p          id='textDownload'          style='color: white; font-family: Arial, Helvetica, sans-serif'        >          Download of "+ge.name+" in progress...        </p>      </div>    </div>  </body></html>"),o.window.addEventListener("beforeunload",(function(e){B.abort(),B=new AbortController})),L.get("https://"+ge.cid+".ipfs.dweb.link",{signal:B.signal,responseType:"arraybuffer",onDownloadProgress:function(e){o.document.getElementById("textDownload").innerHTML="Download of "+ge.name+" in progress... "+e.loaded+"/"+e.total}}).then((function(e){var t,n,a;return d.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:t=o.document.createElement("a"),n=new Blob([e.data],{type:ge.type}),a=URL.createObjectURL(n),t.setAttribute("href",a),t.setAttribute("download",ge.name),o.document.body.append(t),t.click(),o.window.URL.revokeObjectURL(a),t.remove();case 9:case"end":return r.stop()}}),null,null,null,Promise)})).catch((function(e){"canceled"!=e.message&&(alert("Error during downloading "+ge.name),o.document.getElementById("textDownload").innerHTML="Error during downloading "+ge.name)}))):((i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?window:window.open()).window.document.write("<html>  <head>    <style>      html,      body {        height: 100%;        width: 100%;      }      .container {        align-items: center;        display: flex;        justify-content: center;        height: 100%;        width: 100%;      }    </style>  </head>  <body style='background-color: #191919; overflow: hidden'>    <div class='container'>      <img src='https://i.ibb.co/68tNrK6/ounn.png' style='width: 250px' /> <br/>     <div class='content'>        <p          id='textDownload'          style='color: white; font-family: Arial, Helvetica, sans-serif'        >          Download of "+ge.name+" in progress...        </p>      </div>    </div>  </body></html>"),i.window.addEventListener("beforeunload",(function(e){B.abort(),B=new AbortController})),L.get("https://"+ge.cid+".ipfs.dweb.link",{signal:B.signal,responseType:"arraybuffer",onDownloadProgress:function(e){i.document.getElementById("textDownload").innerHTML="Download of "+ge.name+" in progress... "+e.loaded+"/"+e.total}}).then((function(e){var n,a,r,o,c,s,l,h,u;return d.a.async((function(b){for(;;)switch(b.prev=b.next){case 0:for(n=new TextEncoder,a=t.params.password;a.length<16;)a+="k";return b.next=5,d.a.awrap(window.crypto.subtle.importKey("raw",n.encode(a),"AES-GCM",!1,["encrypt","decrypt"]));case 5:return r=b.sent,b.next=8,d.a.awrap(window.crypto.subtle.decrypt({name:"AES-GCM",iv:n.encode(a)},r,e.data));case 8:o=b.sent,ge.type.includes("image")||ge.type.includes("video")?(c=new Blob([o],{type:ge.type}),s=URL.createObjectURL(c),i.location.href=s):(l=i.document.createElement("a"),h=new Blob([o],{type:ge.type}),u=URL.createObjectURL(h),l.setAttribute("href",u),l.setAttribute("download",ge.name),i.document.body.append(l),l.click(),i.window.URL.revokeObjectURL(u),l.remove());case 10:case"end":return b.stop()}}),null,null,null,Promise)})).catch((function(e){"canceled"!=e.message&&(alert("Error during downloading "+ge.name),i.document.getElementById("textDownload").innerHTML="Error during downloading "+ge.name)})))),3!=e){b.next=20;break}if(null==(s=window.prompt("Enter new name"))||""==s.trim()){b.next=20;break}return l=r()([],J),h=l.filter((function(e){return e.id===ge.id}))[0],u=h.name.slice(h.name.lastIndexOf(".")),h.name=s.trim()+u,l[l.indexOf(l.filter((function(e){return e.id===ge.id}))[0])]=h,N(l),b.next=20,d.a.awrap(Object(y.j)(Object(y.d)(c,"Utenti",t.params.email.replaceAll(".","DOT"),"Photos",ge.id),{name:s.trim()+u}));case 20:case"end":return b.stop()}}),null,null,null,Promise)},ze=function(e){var n,a,i,s,l,h;return d.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:if(2!=e){u.next=16;break}return u.next=3,d.a.awrap(Object(y.e)(Object(y.h)(Object(y.b)(c,"Utenti",t.params.email.replaceAll(".","DOT"),"folders"),Object(y.k)("dir","array-contains",ge.id))));case 3:return n=u.sent,u.next=6,d.a.awrap(Object(y.e)(Object(y.h)(Object(y.b)(c,"Utenti",t.params.email.replaceAll(".","DOT"),"Photos"),Object(y.k)("dir","array-contains",ge.id))));case 6:if(a=u.sent,0!=n.size||0!=a.size){u.next=15;break}return u.next=10,d.a.awrap(Object(y.c)(Object(y.d)(c,"Utenti",t.params.email.replaceAll(".","DOT"),"folders",ge.id)));case 10:(i=r()([],K)).splice(i.indexOf(i.filter((function(e){return e.id===ge.id}))[0]),1),G(i),u.next=16;break;case 15:alert("The folder must be empty");case 16:if(3==e&&(X((function(e){return[].concat(o()(e),[ge.id])})),N([])),1!=e){u.next=27;break}if(null==(s=window.prompt("Enter new name"))||""==s.trim()){u.next=27;break}return l=r()([],K),(h=l.filter((function(e){return e.id===ge.id}))[0]).name=s.trim(),l[l.indexOf(l.filter((function(e){return e.id===ge.id}))[0])]=h,G(l),u.next=27,d.a.awrap(Object(y.j)(Object(y.d)(c,"Utenti",t.params.email.replaceAll(".","DOT"),"folders",ge.id),{name:s.trim()}));case 27:case"end":return u.stop()}}),null,null,null,Promise)},Ie=function(e){var t=e.data,a=e.cid,r=e.id,o=e.name,c=e.size,s=e.type,l=e.notPrivate;return Object(W.jsx)(p.a,{onPress:function(){me({id:r,cid:a,type:s,name:o,size:c,data:t,notPrivate:l,modalita:"diretta"})},children:Object(W.jsx)(u.a,{style:{padding:i.width<900?Object(O.a)("2%"):Object(O.a)("3%")},children:Object(W.jsxs)(u.a,{style:{flexDirection:"row",alignItems:"center"},children:[Object(W.jsx)(j.a,{source:n(l?255:156),cacheKey:a,style:{width:"90px",aspectRatio:.7,height:"110px",borderRadius:Object(O.a)("5%"),alignSelf:"stretch"}}),Object(W.jsx)(b.a,{style:{color:"white",width:"25%",fontWeight:"bold",marginLeft:"3%"},children:o}),Object(W.jsx)(b.a,{style:{color:"white",width:"25%",fontWeight:200,marginLeft:"10%"},children:"Size : "+(c/1e6).toFixed(2)+"MB Loading date: "+new Date(t).toLocaleString()}),Object(W.jsx)(u.a,{style:{flex:1,alignItems:"flex-end"},children:Object(W.jsx)(p.a,{onPress:function(){me({id:r,cid:a,type:s,name:o,size:c,data:t,notPrivate:l}),ve(1)},children:Object(W.jsx)(T.a,{name:"dots-vertical",color:"white",size:30})})})]})})})},Pe=function(e){var t=e.id,a=e.data,r=e.name;return Object(W.jsx)(p.a,{onPress:function(){me({id:t,modalita:"diretta"})},style:{padding:i.width<900?Object(O.a)("2%"):Object(O.a)("3%")},children:Object(W.jsx)(u.a,{children:Object(W.jsxs)(u.a,{style:{flexDirection:"row",alignItems:"center"},children:[Object(W.jsx)(j.a,{source:n(259),cacheKey:r,style:{width:"90px",aspectRatio:.7,height:"110px",borderRadius:Object(O.a)("5%"),alignSelf:"stretch"}}),Object(W.jsx)(b.a,{style:{color:"white",width:"25%",fontWeight:"bold",marginLeft:"3%"},children:r}),Object(W.jsx)(b.a,{style:{color:"white",width:"25%",fontWeight:200,marginLeft:"10%"},children:"Creation date: "+new Date(a).toLocaleString()}),Object(W.jsx)(u.a,{style:{flex:1,alignItems:"flex-end"},children:Object(W.jsx)(p.a,{onPress:function(){me({name:r,id:t}),ve(2)},children:Object(W.jsx)(T.a,{name:"dots-vertical",color:"white",size:30})})})]})})})};return Object(W.jsxs)(u.a,{style:{width:"flex",height:"100%",alignItems:"center"},children:[Object(W.jsx)(D.a,{colors:["#290026","#254a3e","#52816f"],style:{position:"absolute",left:0,right:0,top:0,height:"100vh"},start:{x:0,y:1},end:{x:1,y:1}}),Object(W.jsx)(j.a,{resizeMode:"center",style:{position:"absolute",top:Object(O.a)("5%"),left:50,width:i.width/4,height:"50px",marginTop:"10px",marginBottom:"50px"},source:{uri:n(157)}}),Object(W.jsx)(w.a,{visible:1==ye,transparent:!0,children:Object(W.jsx)(u.a,{style:{backgroundColor:"rgba(0, 0, 0, 0.5)",flex:1,alignItems:"center",justifyContent:"center",height:"100%"},children:Object(W.jsxs)(u.a,{style:{backgroundColor:"#2b2b2b",borderRadius:"5%",width:i.width>900?"50%":"80%",height:(i.width,"70%"),alignItems:"center",justifyContent:"center"},children:[Object(W.jsx)(b.a,{style:{textAlign:"center",color:"white",fontWeight:"100",fontSize:"30px",width:"80%"},children:ge.name}),Object(W.jsx)(p.a,{onPress:function(){Te(1),ve(0)},style:{marginTop:i.width>900?"3%":"7%"},children:Object(W.jsx)(b.a,{style:{color:"white",fontSize:"25px"},children:"Download"})}),void 0!=ge.notPrivate&&1==ge.notPrivate?Object(W.jsx)(p.a,{onPress:function(){Te(5),ve(0)},style:{marginTop:i.width>900?"3%":"7%"},children:Object(W.jsx)(b.a,{style:{color:"white",fontSize:"25px"},children:"Copy link"})}):null,Object(W.jsx)(p.a,{style:{marginTop:i.width>900?"3%":"7%"},onPress:function(){Te(3),ve(0)},children:Object(W.jsx)(b.a,{style:{color:"white",fontSize:"25px"},children:"Rename"})}),Object(W.jsx)(p.a,{style:{marginTop:i.width>900?"3%":"7%"},onPress:function(){Te(4),ve(0)},children:Object(W.jsx)(b.a,{style:{color:"white",fontSize:"25px"},children:"Info"})}),Object(W.jsx)(p.a,{style:{marginTop:i.width>900?"3%":"7%"},onPress:function(){Te(2),ve(0)},children:Object(W.jsx)(b.a,{style:{color:"red",fontSize:"25px"},children:"Delete"})}),Object(W.jsx)(p.a,{style:{marginTop:i.width>900?"3%":"7%"},onPress:function(){ve(0)},children:Object(W.jsx)(T.a,{name:"close",color:"#ff5c5c",size:30})})]})})}),Object(W.jsx)(w.a,{visible:2==ye,transparent:!0,children:Object(W.jsx)(u.a,{style:{backgroundColor:"rgba(0, 0, 0, 0.5)",flex:1,alignItems:"center",justifyContent:"center",height:"100%"},children:Object(W.jsxs)(u.a,{style:{backgroundColor:"#2b2b2b",borderRadius:"5%",width:i.width>900?"50%":"80%",height:i.width>900?"50%":"60%",alignItems:"center",justifyContent:"center"},children:[Object(W.jsx)(b.a,{style:{textAlign:"center",color:"white",fontWeight:"100",fontSize:"30px",width:"80%"},children:ge.name}),Object(W.jsx)(p.a,{onPress:function(){ze(3),ve(0)},style:{marginTop:i.width>900?"3%":"7%"},children:Object(W.jsx)(b.a,{style:{color:"white",fontSize:"25px"},children:"Open"})}),Object(W.jsx)(p.a,{style:{marginTop:i.width>900?"3%":"7%"},onPress:function(){ze(1),ve(0)},children:Object(W.jsx)(b.a,{style:{color:"white",fontSize:"25px"},children:"Rename"})}),Object(W.jsx)(p.a,{style:{marginTop:i.width>900?"3%":"7%"},onPress:function(){ze(2),ve(0)},children:Object(W.jsx)(b.a,{style:{color:"red",fontSize:"25px"},children:"Delete"})}),Object(W.jsx)(p.a,{style:{marginTop:i.width>900?"3%":"7%"},onPress:function(){ve(0)},children:Object(W.jsx)(T.a,{name:"close",color:"#ff5c5c",size:30})})]})})}),Object(W.jsx)(p.a,{style:{position:"absolute",right:"5%",top:"-2%",zIndex:100,backgroundColor:"transparent",alignItems:"center",justifyContent:"center"},onPress:function(){he(!de)},children:Object(W.jsx)(S.a,{position:"top-right",isOpen:de,style:{cursor:"pointer"},items:[{label:"Info"},{label:"Reload"},{label:"Create new folder"},{label:"Upload"},{label:"Logout"}],onMenuToggle:function(){he(!de)},onItemPress:function(e,n){1==n&&(document.getElementById("fileLoad").click(),he(!1)),2==n&&(Se(),he(!1)),3==n&&(N([]),he(!1)),4==n&&a.push("Settings",{email:t.params.email,password:t.params.password})},renderItemIcon:function(e,n){return 0==n?Object(W.jsx)(T.a,{name:"exit-to-app",onPress:function(){return d.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.awrap(AsyncStorage.clear());case 2:Object(v.d)(l),a.push("LogIn");case 4:case"end":return e.stop()}}),null,null,null,Promise)},size:30}):1==n?Object(W.jsx)(T.a,{name:"file-document-outline",onPress:function(){document.getElementById("fileLoad").click(),he(!1)},size:30}):2==n?Object(W.jsx)(T.a,{name:"folder-plus-outline",onPress:function(){Se(),he(!1)},size:30}):3==n?Object(W.jsx)(T.a,{name:"reload",onPress:function(){N([]),he(!1)},size:30}):4==n?Object(W.jsx)(T.a,{name:"information-outline",onPress:function(){a.push("Settings",{email:t.params.email,password:t.params.password}),he(!1)},size:30}):void 0}})}),Object(W.jsx)(k.a,{visible:ne,textStyle:{color:"white"},children:Object(W.jsx)(u.a,{style:{width:"100%",height:"100%",alignItems:"center",justifyContent:"center"},children:oe?Object(W.jsx)(x.a,{color:"white",size:"large"}):Object(W.jsxs)(u.a,{style:{height:"40%",borderRadius:Object(O.a)("5%"),backgroundColor:"#2b2b2b",width:i.width<900?"70%":"30%",alignItems:"center",justifyContent:"center"},children:[Object(W.jsx)(b.a,{style:{fontWeight:200,color:"white",fontWeight:"bold",marginBottom:"8%"},children:"Loading file "+je.current+" of "+je.total}),Object(W.jsx)(b.a,{style:{fontWeight:200,color:"white"},children:Math.floor(q.value/q.total*100)+" / 100"}),Object(W.jsx)(C.a,{style:{backgroundColor:"white"},progress:q.value/q.total,width:200,color:"black"}),Object(W.jsx)(p.a,{style:{backgroundColor:"#ff5c5c",width:"150px",height:"50px",marginTop:Object(O.a)("5%"),justifyContent:"center",alignItems:"center"},onPress:function(){E.abort()},children:Object(W.jsx)(u.a,{children:Object(W.jsx)(b.a,{style:{color:"white"},children:"Cancelled"})})})]})})}),Object(W.jsx)("input",{onChange:function(e){return d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.awrap(Ce(e.target.files));case 2:e.target.value="";case 3:case"end":return t.stop()}}),null,null,null,Promise)},id:"fileLoad",type:"file",accept:"*",style:{display:"none"},multiple:!0}),Object(W.jsx)("label",{for:"fileLoad"}),Object(W.jsx)(u.a,{style:{width:"100%",justifyContent:"center",flexDirection:"row",height:"5%",marginTop:Object(O.a)("15%"),alignItems:"center"},children:"Photos"!=Y[Y.length-1]?Object(W.jsxs)(p.a,{style:{justifyContent:"center",alignItems:"center",marginLeft:"50px"},onPress:function(){if(1!=Y.length){var e=r()([],Y);e.pop(),X(e),N([])}},children:[Object(W.jsx)(T.a,{name:"keyboard-backspace",color:"white",size:30}),Object(W.jsx)(b.a,{style:{color:"white",fontWeight:200},children:"Back"})]}):null}),Object(W.jsxs)(u.a,{style:{borderRadius:"50px",backgroundColor:"#210623",width:i.width/2,height:i.width/3.5,display:"flex",flexDirection:"row",alignItems:"center",marginTop:i.height/15},children:[Object(W.jsx)(u.a,{style:{width:"50%",height:"80%",borderRadius:"15px",borderWidth:"12px",borderColor:"#55e292",margin:"25px",alignSelf:"center",marginLeft:"1vw"},children:Object(W.jsx)(p.a,{style:{width:"100%",height:"100%",justifyContent:"center",alignItems:"center"},onPress:function(){document.getElementById("fileLoad").click(),he(!1)},children:Object(W.jsx)(j.a,{style:{width:"100%",height:"100%"},source:n(260)})})}),Object(W.jsxs)(u.a,{style:{width:"50%",height:"80%",marginLeft:"1.7vw"},children:[Object(W.jsx)(b.a,{style:{color:"white",fontSize:(i.width,i.width/70),fontWeight:"400",textAlign:"left"},children:"Recent files"}),Object(W.jsx)(m.a,{style:{width:"20vw",height:"80%",backgroundColor:"#413342",borderRadius:"50px",marginTop:"5%"},showsVerticalScrollIndicator:!1,children:0==K.length&&0==J.length?Object(W.jsxs)(u.a,{style:{width:"100%",alignItems:"center",justifyContent:"center"},children:[Object(W.jsx)(T.a,{name:"folder-plus-outline",color:"#757575",size:50}),Object(W.jsx)(b.a,{style:{color:"#757575",fontWeight:200},children:"Empty folder"})]}):Object(W.jsxs)(u.a,{children:[Object(W.jsx)(u.a,{style:{width:"100%"},children:Object(W.jsx)(g.a,{numColumns:1,data:K,renderItem:function(e){var t=e.item;return Object(W.jsx)(Pe,{id:t.id,data:t.data,name:t.name})},keyExtractor:function(e){return e.id}})}),Object(W.jsx)(u.a,{style:{width:"100%"},children:Object(W.jsx)(g.a,{numColumns:1,data:J,renderItem:function(e){var t=e.item;return Object(W.jsx)(Ie,{data:t.data,cid:t.cid,id:t.id,name:t.name,size:t.size,type:t.type,notPrivate:t.notPrivate})},keyExtractor:function(e){return e.id}})})]})})]})]})]})}},192:function(e,t,n){"use strict";var a=n(9),r=n.n(a),i=n(7),o=n.n(i),c=(n(78),n(0)),s=n(2),l=n(10),d=n(27),h=n(23),u=n(53),b=n(54),j=n(11),p=n(130),f=n(63),x=n(39),g=n(97),m=n(134),w=n(85),O=n(1);t.a=function(e){var t=e.navigation,a=Object(u.a)(),i=Object(p.a)(g.a.firebaseConfig),y=Object(f.b)(i),v=c.useState(""),k=r()(v,2),C=k[0],S=k[1],T=c.useState(""),z=r()(T,2),I=z[0],P=z[1];return c.useEffect((function(){var e,n;return o.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.a.awrap(m.a.getItem("credentials"));case 2:return e=a.sent,a.next=5,o.a.awrap(JSON.parse(e));case 5:void 0!=(n=a.sent)&&Object(f.c)(y,n.email,n.password).then((function(e){return o.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:t.push("Home",{email:n.email,password:n.password});case 1:case"end":return e.stop()}}),null,null,null,Promise)})).catch((function(e){alert("User credentials not valid")}));case 7:case"end":return a.stop()}}),null,null,null,Promise)}),[]),Object(O.jsxs)(s.a,{style:{width:"flex",height:"100%",backgroundColor:"#191919",alignItems:"center"},children:[Object(O.jsx)(w.a,{colors:["#290026","#254a3e","#52816f"],style:{position:"absolute",left:0,right:0,top:0,height:"100vh"},start:{x:0,y:1},end:{x:1,y:1}}),Object(O.jsx)(d.a,{resizeMode:"center",style:{position:"absolute",top:Object(j.a)("5%"),left:50,width:a.width/4,height:"50px",marginTop:"10px",marginBottom:"50px"},source:{uri:n(157)}}),Object(O.jsx)(d.a,{resizeMode:"center",style:{position:"absolute",top:Object(j.a)("5%"),right:0,width:a.width/4,height:"50px",marginTop:"10px",marginBottom:"50px"},source:{uri:n(103)}}),Object(O.jsxs)(s.a,{style:{marginTop:Object(j.a)("22%"),borderRadius:"20px",borderWidth:"12px",borderColor:"#55e292",width:a.width<900?a.width-100:a.width/3,backgroundColor:"transparent",justifyContent:"center",alignItems:"center"},children:[Object(O.jsx)(l.a,{style:{color:"white",fontSize:Object(j.a)("5%"),fontWeight:"400",marginTop:Object(j.a)("5%")},children:"Login"}),Object(O.jsx)(b.a,{style:{marginTop:Object(j.a)("3%"),height:Object(j.a)("5%"),width:a.width<900?a.width/2:a.width/4,borderColor:"black",borderWidth:"1px",borderRadius:Object(j.a)("5%"),textAlign:"center",backgroundColor:"#cceeed"},onChangeText:function(e){S(e)},textContentType:"emailAddress",placeholder:"Email"}),Object(O.jsx)(b.a,{style:{marginTop:Object(j.a)("3%"),height:Object(j.a)("5%"),width:a.width<900?a.width/2:a.width/4,borderColor:"black",borderWidth:"1px",borderRadius:Object(j.a)("5%"),textAlign:"center",backgroundColor:"#cceeed"},onChangeText:function(e){P(e)},secureTextEntry:"true",passwordRules:"true",placeholder:"Password"}),Object(O.jsx)(h.a,{style:{marginTop:Object(j.a)("3%"),backgroundColor:"#ff5c5c",width:"150px",height:"40px",justifyContent:"center",alignItems:"center"},onPress:function(){o.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:Object(f.c)(y,C,I).then((function(e){return o.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.awrap(m.a.setItem("credentials",JSON.stringify({email:C,password:I})));case 2:t.push("Home",{email:C,password:I});case 3:case"end":return e.stop()}}),null,null,null,Promise)})).catch((function(e){alert("User credentials not valid")}));case 1:case"end":return e.stop()}}),null,null,null,Promise)},children:Object(O.jsx)(s.a,{children:Object(O.jsx)(l.a,{style:{color:"white"},children:"Send"})})}),Object(O.jsx)(h.a,{style:{marginTop:Object(j.a)("2%")},onPress:function(){t.push("SigIn",{auth:y})},children:Object(O.jsx)(l.a,{style:{fontSize:Object(j.a)("2%"),fontWeight:200,color:"white"},children:"SignUp now"})}),Object(O.jsx)(h.a,{style:{justifyContent:"center",alignItems:"center",marginTop:"3%",marginBottom:Object(j.a)("5%")},onPress:function(){t.push("Settings",{email:""})},children:Object(O.jsx)(x.a,{name:"information-outline",color:"white",size:20})})]})]})}},194:function(e,t,n){"use strict";var a=n(9),r=n.n(a),i=(n(78),n(0)),o=n(2),c=n(10),s=n(27),l=n(23),d=n(53),h=n(54),u=n(11),b=(n(130),n(63)),j=n(18),p=n(85),f=n(1);t.a=function(e){var t=e.route,a=e.navigation,x=Object(d.a)(),g=t.params.auth,m=Object(j.f)(),w=i.useState(""),O=r()(w,2),y=O[0],v=O[1],k=i.useState(""),C=r()(k,2),S=C[0],T=C[1],z=i.useState(""),I=r()(z,2),P=I[0],A=I[1],D=i.useState(""),W=r()(D,2),L=W[0],R=W[1];return Object(f.jsxs)(o.a,{style:{width:"flex",height:"100%",backgroundColor:"#191919",alignItems:"center"},children:[Object(f.jsx)(p.a,{colors:["#290026","#254a3e","#52816f"],style:{position:"absolute",left:0,right:0,top:0,height:"100vh"},start:{x:0,y:1},end:{x:1,y:1}}),Object(f.jsx)(s.a,{resizeMode:"center",style:{width:x.width/8,height:"250px"},source:{uri:n(103)}}),Object(f.jsxs)(o.a,{style:{marginTop:Object(u.a)("1%"),borderRadius:"20px",width:x.width<900?x.width-100:x.width/3,backgroundColor:"transparent",borderWidth:"12px",borderColor:"#55e292",justifyContent:"center",alignItems:"center"},children:[Object(f.jsx)(c.a,{style:{color:"white",fontSize:Object(u.a)("5%"),fontWeight:"200",marginTop:Object(u.a)("5%")},children:"Sign up"}),Object(f.jsx)(h.a,{style:{marginTop:Object(u.a)("3%"),height:Object(u.a)("5%"),width:x.width<900?x.width/2:x.width/4,borderColor:"black",backgroundColor:"#cceeed",borderWidth:"1px",borderRadius:Object(u.a)("5%"),textAlign:"center"},onChangeText:function(e){v(e)},textContentType:"name",placeholder:"Name"}),Object(f.jsx)(h.a,{style:{marginTop:Object(u.a)("3%"),height:Object(u.a)("5%"),width:x.width<900?x.width/2:x.width/4,borderColor:"black",backgroundColor:"#cceeed",borderWidth:"1px",borderRadius:Object(u.a)("5%"),textAlign:"center"},onChangeText:function(e){T(e)},placeholder:"Surname"}),Object(f.jsx)(h.a,{style:{marginTop:Object(u.a)("3%"),height:Object(u.a)("5%"),width:x.width<900?x.width/2:x.width/4,borderColor:"black",borderWidth:"1px",borderRadius:Object(u.a)("5%"),textAlign:"center",backgroundColor:"#cceeed"},onChangeText:function(e){A(e)},textContentType:"emailAddress",placeholder:"Email"}),Object(f.jsx)(h.a,{style:{marginTop:Object(u.a)("3%"),height:Object(u.a)("5%"),width:x.width<900?x.width/2:x.width/4,borderColor:"black",borderWidth:"1px",borderRadius:Object(u.a)("5%"),textAlign:"center",backgroundColor:"#cceeed"},onChangeText:function(e){R(e)},secureTextEntry:"true",passwordRules:"true",placeholder:"Password"}),Object(f.jsx)(l.a,{style:{marginTop:Object(u.a)("3%"),backgroundColor:"#ff5c5c",width:"150px",height:"40px",justifyContent:"center",alignItems:"center"},onPress:function(){""!=y&&""!=S&&""!=P&&""!=L?L.length>=6?Object(b.a)(g,P.trim(),L.trim()).then((function(){Object(j.i)(Object(j.d)(m,"Utenti",P.replaceAll(".","DOT").trim()),{nome:y.trim(),cognome:S.trim()}),a.goBack(),alert("Registration has been completed successfully")})).catch((function(e){console.log(e),alert("This email already exist or is invalid")})):alert("Password has to be at least 6 character"):alert("Complete all fields")},children:Object(f.jsx)(o.a,{children:Object(f.jsx)(c.a,{style:{color:"white"},children:"Send"})})}),Object(f.jsx)(l.a,{style:{marginTop:Object(u.a)("2%"),marginBottom:Object(u.a)("5%")},onPress:function(){return a.goBack()},children:Object(f.jsx)(c.a,{style:{fontSize:Object(u.a)("2%"),fontWeight:200,color:"white"},children:"Go back"})})]})]})}},195:function(e,t,n){"use strict";var a=n(9),r=n.n(a),i=n(7),o=n.n(i),c=(n(78),n(0)),s=n(2),l=n(10),d=n(23),h=n(53),u=n(60),b=n(27),j=n(44),p=n(11),f=n(18),x=n(82),g=n(39),m=(n(158),n(1));t.a=function(e){var t=e.route,a=e.navigation,i=Object(h.a)(),w=(Object(f.f)(),c.useState(!1)),O=r()(w,2),y=O[0];O[1];return Object(m.jsxs)(j.a,{style:{backgroundColor:"#191919"},contentContainerStyle:{width:"flex",backgroundColor:"#191919",alignItems:"center"},children:[Object(m.jsx)(x.a,{visible:y,textStyle:{color:"white"},children:Object(m.jsx)(s.a,{style:{width:"100%",height:"100%",alignItems:"center",justifyContent:"center"},children:Object(m.jsx)(u.a,{color:"white",size:"large"})})}),Object(m.jsx)(b.a,{resizeMode:"center",style:{width:i.width/2,height:"50px",marginTop:"10px",marginBottom:"50px"},source:{uri:n(103)}}),Object(m.jsx)(l.a,{style:{color:"white",fontSize:i.width<900?i.width/30:i.width/40,fontWeight:"400",marginTop:Object(p.a)("-2%")},children:t.params.email}),Object(m.jsx)(s.a,{style:{width:"100%",justifyContent:"center",flexDirection:"row",height:"5%",marginTop:Object(p.a)("3%"),alignItems:"center"},children:Object(m.jsxs)(d.a,{style:{justifyContent:"center",alignItems:"center"},onPress:function(){a.goBack()},children:[Object(m.jsx)(g.a,{name:"keyboard-backspace",color:"white",size:30}),Object(m.jsx)(l.a,{style:{color:"white",fontWeight:200},children:"Back"})]})}),Object(m.jsxs)(s.a,{style:{borderRadius:"20px",backgroundColor:"#2b2b2b",width:"70%",alignItems:"center",marginTop:i.height/20},children:[Object(m.jsxs)(l.a,{style:{color:"white",textAlign:"center",width:i.width/2,marginTop:"5%",fontSize:i.width/40},children:["We are an open-source, user-controlled, encrypted, decentralized storage app for passwords, files and private data. Files are encrypted using the AES algorithm.","\n"]}),Object(m.jsx)(l.a,{style:{color:"white",fontWeight:"bold",fontSize:"20px",marginTop:"5%"},children:"Follow us on"}),Object(m.jsxs)(s.a,{style:{width:"100%",alignItems:"center",flexDirection:"row",justifyContent:"center"},children:[Object(m.jsx)(d.a,{style:{marginTop:Object(p.a)("3%"),marginBottom:"3%",justifyContent:"center",alignItems:"center"},onPress:function(){return o.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:window.open().location.href="https://www.instagram.com/ounnspace/";case 2:case"end":return e.stop()}}),null,null,null,Promise)},children:Object(m.jsx)(b.a,{style:{width:i.width>900?"50px":"40px",height:i.width>900?"50px":"40px",resizeMode:"cover"},source:{uri:n(262)}})}),Object(m.jsx)(d.a,{style:{marginTop:Object(p.a)("3%"),marginBottom:"3%",marginLeft:"2%",justifyContent:"center",alignItems:"center"},onPress:function(){return o.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:window.open().location.href="https://www.linkedin.com/company/ounn/";case 2:case"end":return e.stop()}}),null,null,null,Promise)},children:Object(m.jsx)(b.a,{style:{width:i.width>900?"44px":"34px",height:i.width>900?"44px":"34px",resizeMode:"cover"},source:{uri:n(263)}})})]}),Object(m.jsx)(s.a,{style:{width:"100%",height:"10%"}})]})]})}},196:function(e,t,n){"use strict";var a=n(9),r=n.n(a),i=n(7),o=n.n(i),c=(n(78),n(0)),s=n(2),l=n(10),d=n(23),h=n(53),u=n(60),b=n(27),j=n(44),p=n(11),f=n(18),x=n(82),g=n(39),m=(n(158),n(129)),w=n.n(m),O=n(1);t.a=function(e){var t=e.route,a=e.navigation,i=Object(h.a)(),m=(Object(f.f)(),c.useState(!1)),y=r()(m,2),v=y[0],k=(y[1],c.useState("")),C=r()(k,2),S=C[0],T=C[1];return c.useEffect((function(){return o.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.awrap(w.a.get("https://api.web3.storage/status/"+t.params.cid));case 2:e.sent.data.deals.length>0?T("Pinned"):T("Queuing");case 4:case"end":return e.stop()}}),null,null,null,Promise)}),[]),Object(O.jsxs)(j.a,{style:{backgroundColor:"#191919"},contentContainerStyle:{width:"flex",backgroundColor:"#191919",alignItems:"center"},children:[Object(O.jsx)(x.a,{visible:v,textStyle:{color:"white"},children:Object(O.jsx)(s.a,{style:{width:"100%",height:"100%",alignItems:"center",justifyContent:"center"},children:Object(O.jsx)(u.a,{color:"white",size:"large"})})}),Object(O.jsx)(b.a,{resizeMode:"center",style:{width:i.width/2,height:"250px",marginTop:"-20px"},source:{uri:n(103)}}),Object(O.jsx)(l.a,{style:{color:"white",fontSize:i.width<900?i.width/30:i.width/40,fontWeight:"400",marginTop:Object(p.a)("-2%")},children:t.params.email}),Object(O.jsx)(s.a,{style:{width:"100%",justifyContent:"center",flexDirection:"row",height:"5%",marginTop:Object(p.a)("3%"),alignItems:"center"},children:Object(O.jsxs)(d.a,{style:{justifyContent:"center",alignItems:"center"},onPress:function(){a.goBack()},children:[Object(O.jsx)(g.a,{name:"keyboard-backspace",color:"white",size:30}),Object(O.jsx)(l.a,{style:{color:"white",fontWeight:200},children:"Back"})]})}),Object(O.jsx)(b.a,{source:n(156),style:{width:"90px",aspectRatio:.7,height:"110px",borderRadius:Object(p.a)("5%"),marginTop:"5%"}}),Object(O.jsx)(l.a,{style:{color:"white",fontWeight:"bold",fontSize:"25px",marginTop:"3%"},children:"Status"}),Object(O.jsx)(l.a,{style:{color:"Pinned"==S?"green":"red",fontSize:"20px",marginTop:"1%",fontWeight:"200"},children:S}),Object(O.jsx)(l.a,{style:{color:"white",fontWeight:"bold",fontSize:"25px",marginTop:"3%"},children:"Name"}),Object(O.jsx)(l.a,{style:{color:"white",fontSize:"20px",marginTop:"1%",fontWeight:"200"},children:t.params.name}),Object(O.jsx)(l.a,{style:{color:"white",fontWeight:"bold",fontSize:"25px",marginTop:"3%"},children:"Size"}),Object(O.jsx)(l.a,{style:{color:"white",fontSize:"20px",marginTop:"1%",fontWeight:"200"},children:(t.params.size/1e6).toFixed(2)+"MB"}),Object(O.jsx)(l.a,{style:{color:"white",fontWeight:"bold",fontSize:"25px",marginTop:"3%"},children:"Loading date"}),Object(O.jsx)(l.a,{style:{color:"white",fontSize:"20px",marginTop:"1%",fontWeight:"200",marginBottom:"2%"},children:new Date(t.params.data).toLocaleString()})]})}},206:function(e,t,n){e.exports=n(275)},255:function(e,t,n){e.exports=n.p+"static/media/filePublic.2537e54c.png"},259:function(e,t,n){e.exports=n.p+"static/media/folder.5107a6da.png"},260:function(e,t,n){e.exports=n.p+"static/media/upload_button.8a26790a.png"},262:function(e,t,n){e.exports=n.p+"static/media/Instagram.07bf95fe.png"},263:function(e,t,n){e.exports=n.p+"static/media/linkedin.bcac093a.png"},97:function(e,t,n){"use strict";t.a={firebaseConfig:{apiKey:"AIzaSyDxqS-2MmrVRbhmg49Bx2P1b4f_lFeSkQ0",authDomain:"ounn-ea631.firebaseapp.com",databaseURL:"https://ounn-ea631-default-rtdb.firebaseio.com",projectId:"ounn-ea631",storageBucket:"ounn-ea631.appspot.com",messagingSenderId:"111990065034",appId:"1:111990065034:web:1b1a4a2fd6d9aef5db6a73",measurementId:"G-YL3CYJJN58"},Web3StorageToken:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGE4MjU5MDcyYkUxRmEwODhhZTA3MTI3OTg2NDVEY0VBRjFGNDMzREQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTgyMjcyNTE1MTgsIm5hbWUiOiJvbm4ifQ.6AAz_KHuowFfJcxlf0jHbRoVEAKMv6iER_WSYkaUtr0"}}},[[206,1,2]]]);
//# sourceMappingURL=app.b5713a82.chunk.js.map
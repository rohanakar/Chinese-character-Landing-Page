(this["webpackJsonpChinese-character"]=this["webpackJsonpChinese-character"]||[]).push([[0],[,,,,,function(e,t,a){e.exports=a.p+"static/media/go.e84e598f.svg"},,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/icon.95377ac4.svg"},,,function(e,t,a){e.exports=a(52)},,,,,function(e,t,a){},function(e,t,a){},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){var n={"./0.jpg":36,"./1.jpg":37,"./2.jpg":38,"./3.jpg":39,"./4.jpg":40,"./5.jpg":41,"./6.jpg":42,"./7.jpg":43,"./8.jpg":44,"./9.jpg":45,"./a8282cd3-c7d0-48cc-8ceb-b766afb6754c.jpg":46,"./dd972fa8-c32e-4a42-b423-f46b4d1d69a9.jpg":47};function i(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=o,e.exports=i,i.id=35},function(e,t,a){e.exports=a.p+"static/media/0.260ff6d6.jpg"},function(e,t,a){e.exports=a.p+"static/media/1.74642c7e.jpg"},function(e,t,a){e.exports=a.p+"static/media/2.dbe089ec.jpg"},function(e,t,a){e.exports=a.p+"static/media/3.448e5cf9.jpg"},function(e,t,a){e.exports=a.p+"static/media/4.54894b04.jpg"},function(e,t,a){e.exports=a.p+"static/media/5.50b82578.jpg"},function(e,t,a){e.exports=a.p+"static/media/6.518c2711.jpg"},function(e,t,a){e.exports=a.p+"static/media/7.f9a360b3.jpg"},function(e,t,a){e.exports=a.p+"static/media/8.54894b04.jpg"},function(e,t,a){e.exports=a.p+"static/media/9.448e5cf9.jpg"},function(e,t,a){e.exports=a.p+"static/media/a8282cd3-c7d0-48cc-8ceb-b766afb6754c.f42f93f1.jpg"},function(e,t,a){e.exports=a.p+"static/media/dd972fa8-c32e-4a42-b423-f46b4d1d69a9.04408f0d.jpg"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),o=a(6),r=a.n(o),s=(a(25),a(26),function(e){void 0!==(e=document.getElementsByClassName(e))[0]&&(e=e[0]);var t=e.offsetTop+2;window.scroll({top:t,left:0,behavior:"smooth"})}),c=function(e,t,a,n){for(var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:5,o=document.getElementById("canvas"),r=o.getContext("2d"),s=12,c=12;c<250;c+=i){r.font=c+"px "+e;var l=r.measureText(a),d=l.width;if(!(t>d+n))break;s=c}return s},l=a(14),d=a(3),m=function(){var e=Object(d.c)((function(e){return e.screenReducer})),t=e.width,a=e.active,n=Object(d.c)((function(e){return e.navbarReducer})).showMenu,o=Object(d.b)();console.log({showMenu:n});var r="651px";return(!t||t<=650)&&(r=n?"45%":"0%"),i.a.createElement("div",{className:"nav"},i.a.createElement(l.a,{size:30,color:"white",className:"icon",onClick:function(){!function(e){o({type:"setShowMenu",payload:{showMenu:e}})}(!n)}}),i.a.createElement("div",{className:"nav-heading",onClick:function(){s("content")}},"\u6c49\u5b57"),i.a.createElement("div",{className:"box",style:{width:r}},i.a.createElement("div",{className:0===a?"link active-home":"link"}," ",i.a.createElement("li",{onClick:function(){return s("home-content")}},"Home")),i.a.createElement("div",{className:1===a?"link active-details":"link"}," ",i.a.createElement("li",{onClick:function(){return s("details-content")}},"Details")),i.a.createElement("div",{className:2===a?"link active-overview":"link"}," ",i.a.createElement("li",{onClick:function(){return s("overview-content")}},"Overview")),i.a.createElement("div",{className:3===a?"link active-improvement":"link"}," ",i.a.createElement("li",{onClick:function(){return s("improvement-content")}},"Improvements"))))},h=a(2),u=a(11),p=(a(33),[{heading:"Registration",subheading:["The user starts on this page . This is standard login/registration page."]},{heading:"Home",subheading:["The user is presented with a search bar and other options."]},{heading:"Search",subheading:["The user can search for Chinese character via it's pronunciation(pinyin) or the exact character(via a Chinese keyboard).","Since many characters may have a similar pinyin the search is designed to list all possible characters whose sound  starts with the search term ('ren' as depicted in the image).","The user can than scroll this list and select a character to display"]},{heading:"CHARACTER",subheading:["This gif depicts all the information you can access . initially you will see the character and a stroke animation depicting how the character is to be drawn.","To repeat the animation just press on I button twice. Pressing on I button once loads a list of corresponding images which can be scrolled horizontally.","To the right of I button is a list of meanings for that character there can me multiple meanings which can be accessed via vertical scrolling.","Clicking on the AUDIO icon plays the pronunciation of that character."]},{heading:"LEARN",subheading:["The Hanyu Shuiping Kaoshi, translated as the Chinese Proficiency Test used in China, is the standardized test of Standard Chinese language proficiency of China for non-native speakers such as foreign students and overseas Chinese. ","These tests have various levels and each level corresponds to a set of characters which can be accessed from these options."]},{heading:"CHARACTER LIST",subheading:["App fetches the next 10 characters from server and loads it in memory . user can tap on buttons to navigate as depicted in gif and CHARCTER PAGE."]},{heading:"QUIZ",subheading:["The quiz contains of 10 random questions generated from the set of characters you  user has already seen in the HSK's .","Each question is of the from Select multiple options for a particular character. There is negative marking also. Selecting all correct options yield 1 point.","Sound option: Tapping on sound option once plays the sound and selects the option .To deselect the option user needs to tap on sound option again.","Image  option: Tapping on image option once magnifies the image tap again to select the option. .To deselect the option user needs to tap on image to magnify it and tap again to deselect. Image option can also be toggled by long pressing the option."]},{heading:"Quiz",subheading:["At the end of the quiz you are given a score."]},{heading:"Draw and Discover",subheading:["Yet to be imlemented."]}]),g=a(15),v=a(16),f=a(19),E=a(18),w=(a(34),a(10)),b=function(e){Object(f.a)(n,e);var t=Object(E.a)(n);function n(e){var o;return Object(g.a)(this,n),(o=t.call(this,e)).loadData=function(e){var t=[];0===e&&t.push(i.a.createElement("div",{key:0,className:"slideshow-image slideshow-left"},i.a.createElement("div",{className:"empty"})));for(var n=0;n<=8;n++){var o="slideshow-image";n===e-1&&(o+=" slideshow-left"),n===e&&(o+=" slideshow-main opacity"),n===e+1&&(o+=" slideshow-right"),t.push(i.a.createElement("div",{key:n+1,className:o},i.a.createElement("img",{alt:"Loading...",src:a(35)("./"+n+".jpg")})))}return 8===e&&t.push(i.a.createElement("div",{key:10,className:"slideshow-image slideshow-right"},i.a.createElement("div",{className:"empty"}))),t},o.state={sizeLeft:40,sizeRight:40},o}return Object(v.a)(n,[{key:"render",value:function(){var e=this,t=this.props.active,a=this.props.navigate;return i.a.createElement("div",{className:"slideshow-content"},i.a.createElement("div",{className:"slideshow-icon"},i.a.createElement(w.a,{size:this.state.sizeLeft,onMouseOver:function(){e.setState(Object(h.a)(Object(h.a)({},e.state),{},{sizeLeft:60}))},onMouseOut:function(){e.setState(Object(h.a)(Object(h.a)({},e.state),{},{sizeLeft:40}))},onClick:function(){0!==t&&a(t-1)}})),this.loadData(t),i.a.createElement("div",{className:"slideshow-icon"},i.a.createElement(w.b,{onMouseOver:function(){e.setState(Object(h.a)(Object(h.a)({},e.state),{},{sizeRight:60}))},onMouseOut:function(){e.setState(Object(h.a)(Object(h.a)({},e.state),{},{sizeRight:40}))},size:this.state.sizeRight,onClick:function(){8!==t&&a(t+1)}})))}}]),n}(i.a.Component),y=function(e){console.log(e);var t=e.active,a=100/e.total;return i.a.createElement("div",{style:{borderRadius:"10px",marginLeft:"10%",marginTop:"2vh",width:"80%",height:"5px",backgroundColor:"black"}},i.a.createElement("div",{style:{borderRadius:"10px",width:"".concat(a,"%"),height:"6px",backgroundColor:"#b7ffa8",marginLeft:"".concat(t*a,"%")}}))},x=function(){var e=Object(d.c)((function(e){return e.screenReducer})).width,t=Object(n.useState)(0),a=Object(u.a)(t,2),o=a[0],r=a[1],s=Object(n.useState)(!1),l=Object(u.a)(s,2),m=l[0],g=l[1];console.log({detailsData:m});for(var v=1e3,f=0;f<p.length;f++)v=Math.min(v,c("CodyStar",.95*e,p[f].heading,10));v||(v=80);var E=m?"X":"i",w=m?"close":"know more",x=m?{}:{top:"24%",left:"0",right:"100%",bottom:"76%",padding:"0"},N=m?{}:{top:"-70vh",opacity:0};return i.a.createElement("div",{className:"details-content"},i.a.createElement("br",null),e<900?i.a.createElement("div",{className:"circle",cntnt:w,onClick:function(){g(!m)}},i.a.createElement("span",null,E)):null,i.a.createElement("div",{className:"details-heading",style:{fontSize:v}},p[o].heading),i.a.createElement("div",{className:"details-body"},i.a.createElement(b,{active:o,navigate:function(e){r(e)}}),e>900?i.a.createElement("div",{className:"details-data"},i.a.createElement("div",{className:"details-subheading"},p[o].subheading.map((function(e,t){return i.a.createElement("div",{key:t,style:{flex:1}},i.a.createElement("br",null),e)})))):null,e<900?i.a.createElement("div",{className:"details-data2",style:Object(h.a)({},x)},i.a.createElement("div",{className:"details-subheading2",style:Object(h.a)({},N)},p[o].subheading.map((function(e,t){return i.a.createElement("div",{key:t,className:"elem"},i.a.createElement("br",null),e)})))):null),i.a.createElement(y,{active:o,total:p.length}),i.a.createElement("br",null))},N=(a(48),a(5)),k=a.n(N),j=function(){return i.a.createElement("div",{className:"home-content"},i.a.createElement("div",{className:"waste",style:{height:"17.5vh"}}),i.a.createElement("div",{className:"home-text"},i.a.createElement("div",{className:"home-heading"},"Chinese character is a learning app for Chinese characters . There are more than 8000 characters which user can search and see the character's meaning, stroke order, related images with meaning, how it is pronounced ."),i.a.createElement("div",{className:"home-subheading"},i.a.createElement("div",{style:{flex:1,padding:"10px"}},"It also provides a progressive way to learn the characters for various HSK levels with an quiz for the characters which a user has seen so far ."),i.a.createElement("div",{style:{flex:1,padding:"10px"}},"This project is the basis of a much higher level project which will have many more features ."))),i.a.createElement("div",{className:"home-subheading-button"},i.a.createElement("div",{className:"home-button",onClick:function(){s("details-content")}},i.a.createElement("span",{className:"home buttonText"},"UI Workflow"),i.a.createElement("img",{className:"buttonImage",src:k.a,width:35,alt:"Logo"})),i.a.createElement("div",{className:"home-button",onClick:function(){s("overview-content")}},">",i.a.createElement("span",{className:"home buttonText"},"Overview"),i.a.createElement("img",{className:"buttonImage",src:k.a,width:35,alt:"Logo"}))),i.a.createElement("div",{className:"waste",style:{height:"9vh"}}))},C=(a(49),function(){var e=Object(d.c)((function(e){return e.screenReducer})),t=e.width,a=e.fontLoaded,n=a?"CodyStar":"Roboto",o=a?"Joslyn-slab":"Roboto",r=c(n,.9*t,"Chinese Character",10),l=c(o,.45*t,"Innovative way to learn chinese",10,1);return i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"text"},i.a.createElement("div",{className:"heading",style:{fontFamily:n,fontSize:r-2+"px"}},"Chinese Character"),i.a.createElement("div",{className:"subheading",style:{fontFamily:o,fontSize:l+"px"}},"Innovative way to learn chinese"),i.a.createElement("div",{className:"button",onClick:function(){return s("home-content")}},i.a.createElement("span",{className:"buttonText"},"Know more"),i.a.createElement("img",{className:"buttonImage",src:k.a,width:35,alt:"Logo"}))))}),O=(a(50),function(){var e=Object(d.c)((function(e){return e.screenReducer})).width,t=c("CodyStar",.8*e,"Backend Overview",5);return t=Math.min(80,t),i.a.createElement("div",{className:"overview-content"},i.a.createElement("br",null),i.a.createElement("div",{className:"overview-heading",style:{fontSize:t}},"UI Overview",i.a.createElement("div",{className:"overview-cards"},i.a.createElement("div",{className:"overview-card"},i.a.createElement("div",{className:"card-heading"},"Library Used"),i.a.createElement("li",null,"expo : Base stuff"),i.a.createElement("li",null,"react native : Base Stuff"),i.a.createElement("li",null,"expo font : For loading the font"),i.a.createElement("li",null,"expo-av: For playing audio."),i.a.createElement("li",null,"react-native-svg-animations : for drawing and animating character strokes in a particular order. "),i.a.createElement("li",null,"react-native-svg : For drawing a complete character as a SVG.")),i.a.createElement("br",null),i.a.createElement("div",{className:"overview-card"},i.a.createElement("div",{className:"card-heading"},"key features"),i.a.createElement("div",{style:{display:"flex"}},i.a.createElement("div",{style:{padding:"10px",paddingRight:"2px",textDecoration:"underline",width:"20%"}},"State management :"),i.a.createElement("li",{style:{paddingLeft:"2px"}},"done by implementing basic redux functionality using Context and useReducer. UseReducer takes initialState and reducer( a function that updates our state) .Context allow to pass values without having to explicitly pass a prop through every level of the tree. So we add two context's one for authorization state management and one for global state management at the top of our main app . To access the states we use useContext method . It Accepts a context object (the value returned from React.createContext) and returns the current context value for that context. The current context value is determined by the value prop of the nearest <MyContext.Provider> above the calling component in the tree.")),i.a.createElement("div",{style:{display:"flex"}},i.a.createElement("div",{style:{padding:"10px",paddingRight:"2px",textDecoration:"underline",width:"20%"}},"Initial Flow :"),i.a.createElement("li",{style:{paddingLeft:"2px"}},"we wait for our fonts to be loaded and once they have loaded we render our app. We are also storing a token and an email of the user in the phone's memory which we check at startup isong useEffect hook. If we find it we update our state. Dependng upon weather a user is logged in we display the defaultScreen to be either home or login. We also update state.isLoading whenever we are calling an API.")),i.a.createElement("div",{style:{display:"flex"}},i.a.createElement("div",{style:{padding:"10px",paddingRight:"2px",textDecoration:"underline",width:"20%"}},"Navigation :"),i.a.createElement("li",{style:{paddingLeft:"2px"}},"For navigation we use NavigationContainer in which we use Drawer.Navigation and define our own customDrawerContent in which if user is loggedIn the options available to users are [home,learn,quiz,draw,discover] else we display login/register screen and we define the component mapping for a route using the name prop in <Drawer.screen>. We also have a custom component called loading which has a small animation and we load it if isLoading is true.")),i.a.createElement("div",{style:{display:"flex"}},i.a.createElement("div",{style:{padding:"10px",paddingRight:"2px",textDecoration:"underline",width:"20%"}},"Character drawing and animation :"),i.a.createElement("li",{style:{paddingLeft:"2px"}},"We receive from backend stillPoints and animated points (list of String). The still point has co-ordinates and the curve parameters where as the animated path has co-ordinates which  are to be connected via straight lines which can be animated in react easily. The no. of elements in list are determined by the number of times u will have to lift the pen while drawing it.. we animate 1 element the animate other after 1st has animated to create a smoothoverall flow."))))),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("hr",{style:{borderColor:"black",width:"80%",margin:"auto"}}),i.a.createElement("div",{className:"overview-heading",style:{fontSize:t,marginTop:"15vh"}},"Backend Overview",i.a.createElement("div",{className:"overview-cards"},i.a.createElement("div",{className:"overview-card"},i.a.createElement("div",{className:"card-heading"},"Library Used"),i.a.createElement("li",null,"springboot : Base stuff"),i.a.createElement("li",null,"selenium-chrome-driver : Automation and data gathering")),i.a.createElement("br",null),i.a.createElement("div",{className:"overview-card"},i.a.createElement("div",{className:"card-heading"},"key features"),i.a.createElement("div",{style:{display:"flex"}},i.a.createElement("div",{style:{padding:"10px",paddingRight:"2px",textDecoration:"underline",width:"14%"}},"DataSet :"),i.a.createElement("li",{style:{paddingLeft:"2px"}},"Dcitonary.txt and graphics.txt downloaded from htps://github.com/skishore/makemeahanzi . Processed them using a script into a sngle json file used this as a base for mongodb.")),i.a.createElement("div",{style:{display:"flex"}},i.a.createElement("div",{style:{padding:"10px",paddingRight:"2px",textDecoration:"underline",width:"14%"}},"Initial Work :"),i.a.createElement("li",{style:{paddingLeft:"2px"}},"From a text based dictonary i created a audio-image-text based dictonary. To do so i learned SELENIUM.. Eg. \u4e00 means '1'/'a' and is pronounced as 'yi' . So i scrapped google images fro the top 10 image meanings and scrapped the pronounciation. and added 2 utitlity methods to generateImages and Audio. Then i manually cleaned tha images (selected a subset of images) as there were some misleading images . Eg. if we searched seven it leads to an image of actor that worked in seven movie. After the manual reviewing i added these images and audio in db .")),i.a.createElement("div",{style:{display:"flex"}},i.a.createElement("div",{style:{padding:"10px",paddingRight:"2px",textDecoration:"underline",width:"14%"}},"Key Features :"),i.a.createElement("div",{style:{paddingLeft:"2px",flex:"1 1"}},i.a.createElement("li",{style:{padding:"2px",paddingTop:"10px"}},"Implemented search api which searches a character on the basis of it's pronounciation/actual character. which works by de-accent ing a given string ."),i.a.createElement("li",{style:{padding:"2px"}},"Implemented a quiz api to generate a score based algorithm."),i.a.createElement("li",{style:{padding:"2px"}},"Implemented JWT token and used that for authentication mechanism."),i.a.createElement("li",{style:{padding:"2px"}},"Added Request interceptor to only allow certain endpoints to be hitted and allow certain endpoints without token.")))))),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("hr",{style:{borderColor:"black",width:"80%",margin:"auto",borderWidth:"1.2px"}}),i.a.createElement("div",{className:"overview-heading",style:{fontSize:t,marginTop:"15vh"}},"Deployment Overview",i.a.createElement("div",{className:"overview-cards",style:{marginBottom:"10vh"}},i.a.createElement("div",{className:"overview-card"},i.a.createElement("div",{className:"card-heading"},"key features"),i.a.createElement("li",{style:{paddingLeft:"2px"}}," Build a jar file on my local system. Created an ec2-intsnance and installed java there ran the jav -jar command for running bakend"),i.a.createElement("li",{style:{paddingLeft:"2px"}},"Build the apk using expo-cli and used that on google play developer console .")))),i.a.createElement("br",null))}),T=(a(51),a(17)),S=a.n(T),I=function(){var e=Object(d.c)((function(e){return e.screenReducer})).width,t=c("CodyStar",.6*e,"Improvements",5);return i.a.createElement("div",{className:"improvement-content"},i.a.createElement("br",null),i.a.createElement("div",{className:"improvement-heading",style:{fontSize:t}},"Improvements"),i.a.createElement("div",{className:"impovement-details"},i.a.createElement("div",{style:{flex:1,marginTop:"2.5vh"}},"The idea behind this product was to develop an all powerful learning app that grows with its userbase. Initially I thought of  an application that teaches users list of characters on the basis of a mathematical function . (like lets say similarity between characters visual or audio base) Then we cluster together characters to enhance the speed of learning . We could also with enough time analyze users to find their strengths/ weekness . This needed some sort of quiz ."),i.a.createElement("div",{style:{flex:1,marginTop:"2.5vh"}},"For this initial idea I needed to develop a basic dictonary kind of application. But there was a problem I have never worked on a mobile app . So I ventured into react-native."),i.a.createElement("br",null),i.a.createElement("div",{style:{flex:1,marginTop:"2.5vh",fontSize:"16px"}},"Over time these are the various improvements that I thaught:",i.a.createElement("br",null),"1. Extend it for regional languages.",i.a.createElement("br",null),"2. Improve the UX.",i.a.createElement("br",null),"3. Analyzing the quiz data.",i.a.createElement("br",null),"4. Search engine optimization.",i.a.createElement("br",null))),i.a.createElement("img",{style:{position:"absolute",bottom:0,top:"20%",margin:"auto",left:0,right:0},src:S.a,width:"100%",alt:"Logo"}))},z=function(){var e=Object(d.b)();document.fonts.onloadingdone=function(t){e({type:"setFontLoaded",payload:{fontLoaded:!0}})};var t=Object(d.c)((function(e){return e?e.screenReducer:void 0})).width;return Object(n.useEffect)((function(){function t(){var t=document.documentElement.scrollTop,a=document.getElementsByClassName("home-content")[0].offsetTop,n=document.getElementsByClassName("details-content")[0].offsetTop,i=document.getElementsByClassName("overview-content")[0].offsetTop,o=document.getElementsByClassName("improvement-content")[0].offsetTop,r=-1;a<t&&(r=0,n<t&&(r=1,i<t&&(r=2,o<t&&(r=3)))),console.log("setting active ".concat(r)),e({type:"activeNavBarComponent",payload:{active:r}})}function a(){setTimeout((function(){e({type:"resize",payload:{width:window.innerWidth,height:window.innerHeight}})}),150)}return window.addEventListener("scroll",t),window.addEventListener("resize",a),a(),function(){window.removeEventListener("resize",a),window.removeEventListener("scroll",t)}}),[e]),t?i.a.createElement("div",null,i.a.createElement(m,null),i.a.createElement(C,null),i.a.createElement(j,null),i.a.createElement(x,null),i.a.createElement(O,null),i.a.createElement(I,null)):null};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=a(4),R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"resize":case"activeNavBarComponent":case"setFontLoaded":return Object(h.a)(Object(h.a)({},e),t.payload);default:return e}},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{showMenu:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setShowMenu":return Object(h.a)(Object(h.a)({},e),t.payload);default:return e}},B=Object(L.b)({screenReducer:R,navbarReducer:D}),A=Object(L.c)(B,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());r.a.render(i.a.createElement(d.a,{store:A},i.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[20,1,2]]]);
//# sourceMappingURL=main.a3f798ad.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,n){},,,function(e,t,n){e.exports=n(28)},,,,,function(e,t,n){},,function(e,t,n){},,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(10),c=n.n(o),r=(n(17),n(2)),s=n(3),l=n(6),h=n(4),u=n(5),g=n(1),d=function(e,t){return"flicker"===t?function(e){var t="https://api.flickr.com/services/rest?method=flickr.photos.search&sort=relevance&format=json&nojsoncallback=1&"+"api_key=".concat("e38f1bc56d9486ca37e84667b7a98ba8","&text=").concat(e);return fetch(t).then(function(e){return e.json()}).then(function(e){return e.photos.photo.map(function(e){return function(e){return{id:e.id,url:"http://farm".concat(e.farm,".staticflickr.com/").concat(e.server,"/").concat(e.id,"_").concat(e.secret,".jpg")}}(e)})}).catch(function(e){return console.log("error: ",e),e})}(e):"giphy"===t?function(e){var t="".concat("//api.giphy.com/v1/gifs/search","?api_key=").concat("YoyUyRGt2YenjFvxfq87V5gvNjak2EBQ","&q=").concat(e);return fetch(t).then(function(e){return e.json()}).then(function(e){return e.data.map(function(e){return function(e){return{id:e.id,url:e.images.original_mp4}}(e)})}).catch(function(e){return console.log("error: ",e),e})}(e):void 0};n(19);function f(e){var t=e.searchValue,n=e.searchTermChanged,a=e.search,o=e.engine,c=e.engineChanged;return i.a.createElement("div",{className:"search"},i.a.createElement("label",{htmlFor:"search-input"},"Search images:"),i.a.createElement("input",{id:"search-input",type:"text",placeholder:"Enter search term (e.g. 'cats')",value:t,onChange:n,onKeyPress:function(e){"Enter"===e.key&&a()}}),i.a.createElement("select",{value:o,onChange:c},i.a.createElement("option",{value:"flicker"},"Flicker"),i.a.createElement("option",{value:"giphy"},"Gighy")),i.a.createElement("input",{onClick:a,type:"submit",value:"Search"}))}var m=n(7),p=(n(9),function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(h.a)(t).call(this,e))).placeholderUrl="//via.placeholder.com/350x350?text=loading",n.state={visibility:!1},n.handleChange=n.handleChange.bind(Object(g.a)(Object(g.a)(n))),n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){e&&this.setState({visibility:e})}},{key:"render",value:function(){var e=this.props,t=e.photo,n=e.onImageClick;return i.a.createElement("article",null,i.a.createElement(m.a,{onChange:this.handleChange,rootMargin:"100px 100px 100px 100px"},i.a.createElement("a",{href:"#",onClick:n,className:"photos-grid__link",id:t.id},this.state.visibility&&i.a.createElement("figure",{className:"absolute-bg",style:{backgroundImage:"url(".concat(t.url,")")}}),!this.state.visibility&&i.a.createElement("figure",{className:"absolute-bg",style:{backgroundImage:"url(".concat(this.placeholderUrl,")")}}))))}}]),t}(i.a.Component));n(22);function v(e){var t=e.type,n=e.photos,a=e.onImageClick;return i.a.createElement("div",{className:"photos-grid"},n.map(function(e){return i.a.createElement(p,{key:e.id,type:t,photo:e,onImageClick:a})}))}var k=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={visibility:!1},n.handleChange=n.handleChange.bind(Object(g.a)(Object(g.a)(n))),n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){this.setState({visibility:e})}},{key:"render",value:function(){var e=this.props,t=e.video,n=e.onVideoClick;return i.a.createElement("article",null,i.a.createElement(m.a,{onChange:this.handleChange,rootMargin:"50px 50px 50px 50px"},i.a.createElement("a",{href:"#",onClick:n,className:"photos-grid__link",id:t.id},i.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0},i.a.createElement("source",{src:t.url.mp4})))))}}]),t}(i.a.Component);n(24);function b(e){e.type;var t=e.videos,n=e.onVideoClick;return i.a.createElement("div",{className:"videos-grid"},t.map(function(e){return i.a.createElement(k,{key:e.id,video:e,onVideoClick:n})}))}n(26);var C=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={loading:!0,searchValue:"car",engine:"flicker",photos:[]},n.search=n.search.bind(Object(g.a)(Object(g.a)(n))),n.searchTermChanged=n.searchTermChanged.bind(Object(g.a)(Object(g.a)(n))),n.searchEngineChanged=n.searchEngineChanged.bind(Object(g.a)(Object(g.a)(n))),n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.search()}},{key:"searchTermChanged",value:function(e){this.setState({searchValue:e.target.value})}},{key:"searchEngineChanged",value:function(e){var t=this,n=e.target.value;this.setState({engine:n},function(){return t.search()})}},{key:"search",value:function(){var e=this;this.setState({loading:!0,images:[]}),d(this.state.searchValue,this.state.engine).then(function(t){e.setState({photos:t,loading:!1})}).catch(function(t){return e.setState({photos:[],loading:!1})})}},{key:"onImageClick",value:function(e){console.log("onImageClick: ",e.target.id)}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(f,{search:this.search,engine:this.state.engine,engineChanged:this.searchEngineChanged,searchTermChanged:this.searchTermChanged,searchValue:this.state.searchValue}),i.a.createElement("div",null,this.state.loading&&i.a.createElement("div",{className:"loading"},"Loading..."),0===this.state.photos.length&&!this.state.loading&&i.a.createElement("div",null,"Can't find photos for this search term"),this.state.photos.length>0&&!this.state.loading&&i.a.createElement(i.a.Fragment,null,"flicker"===this.state.engine&&i.a.createElement(v,{photos:this.state.photos,onImageClick:this.onImageClick}),"giphy"===this.state.engine&&i.a.createElement(b,{videos:this.state.photos,onVideoClick:this.onImageClick}))))}}]),t}(a.Component),y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available; please refresh."),t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t.onSuccess&&t.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(i.a.createElement(C,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-flicker-app",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/react-flicker-app","/service-worker.js");y?(function(e,t){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):E(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):E(t,e)})}}()}],[[12,2,1]]]);
//# sourceMappingURL=main.7e3c0056.chunk.js.map
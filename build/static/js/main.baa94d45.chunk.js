(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){e.exports=n.p+"static/media/logo.c15b9152.svg"},26:function(e,t,n){e.exports=n.p+"static/media/error.8217e553.png"},27:function(e,t,n){e.exports=n(38)},32:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(22),c=n.n(s),o=(n(32),n(3)),i=n(6),l=n(8),u=n(7),m=n(9),p=n(23),h=n.n(p),f=n(14),d=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"container h-flex"},r.a.createElement("a",{href:"#",className:"logo"},r.a.createElement("img",{src:h.a,alt:"logo"})),r.a.createElement("nav",{className:"links"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(f.b,{to:"/",className:"menu__links"},"\u041b\u0435\u043d\u0442\u0430")),r.a.createElement("li",null,r.a.createElement(f.b,{to:"/profile",className:"menu__links"},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"))))))}}]),t}(a.Component),v=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("a",{href:"#",className:this.props.min?"user min":"user"},r.a.createElement("img",{src:this.props.src,alt:this.props.alt}),r.a.createElement("div",null,this.props.name))}}]),t}(a.Component),E=n(11),b=n.n(E),j=n(15),k=function e(){var t=this;Object(o.a)(this,e),this.getResource=function(){var e=Object(j.a)(b.a.mark(function e(n){var a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t._apiBase).concat(n));case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(n,", recived ").concat(a.status));case 5:return e.abrupt("return",a.json());case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),this.getAllPosts=Object(j.a)(b.a.mark(function e(){var n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("posts/");case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)})),this.getAllPhotos=Object(j.a)(b.a.mark(function e(){var n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("posts/");case 2:return n=e.sent,e.abrupt("return",n.map(t._transformPosts));case 4:case"end":return e.stop()}},e)})),this._transformPosts=function(e){return{src:e.src,alt:e.alt,id:e.id}},this._apiBase="http://localhost:3004/"},O=n(26),y=n.n(O),g=function(){return r.a.createElement("img",{src:y.a,alt:"error"})},w=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).InstaService=new k,n.state={posts:[],error:!1},n.onPostsLoaded=function(e){n.setState({posts:e,error:!1})},n.onError=function(e){n.setState({error:!0})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.updatePosts()}},{key:"updatePosts",value:function(){this.InstaService.getAllPosts().then(this.onPostsLoaded).catch(this.onError)}},{key:"renderItems",value:function(e){return e.map(function(e){var t=e.name,n=e.altname,a=e.photo,s=e.src,c=e.alt,o=e.descr;e.id;return r.a.createElement("div",{key:"id",className:"post"},r.a.createElement(v,{src:a,alt:n,name:t,min:!0}),r.a.createElement("img",{src:s,alt:c}),r.a.createElement("div",{className:"post__name"},t),r.a.createElement("div",{className:"post__descr"},o))})}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.posts;if(t)return r.a.createElement(g,null);var a=this.renderItems(n);return r.a.createElement("div",{className:"left"},a)}}]),t}(a.Component),P=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).InstaService=new k,n.state={posts:[],error:!1},n.onPostsLoaded=function(e){n.setState({posts:e,error:!1})},n.onError=function(e){n.setState({error:!0})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.updatePosts()}},{key:"updatePosts",value:function(){this.InstaService.getAllPosts().then(this.onPostsLoaded).catch(this.onError)}},{key:"renderItems",value:function(e){return e.map(function(e){var t=e.name,n=e.altname,a=e.photo;e.id;return r.a.createElement(v,{key:"id",src:a,alt:n,name:t,min:!0})})}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.posts;if(t)return r.a.createElement(g,null);var a=this.renderItems(n);return r.a.createElement("div",{className:"right"},a[0],r.a.createElement("div",{className:"users__block"},a))}}]),t}(a.Component);function N(){return r.a.createElement("div",{className:"container feed"},r.a.createElement(w,null),r.a.createElement(P,null))}var _=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).InstaService=new k,n.state={photos:[],error:!1},n.onPhotosLoaded=function(e){n.setState({photos:e,error:!1})},n.onError=function(e){n.setState({error:!0})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.updatePhotos()}},{key:"updatePhotos",value:function(){this.InstaService.getAllPhotos().then(this.onPhotosLoaded).catch(this.onError)}},{key:"renderItems",value:function(e){return e.map(function(e){var t=e.alt,n=e.src,a=e.id;return r.a.createElement("img",{src:n,alt:t,key:a})})}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.photos;if(t)return r.a.createElement(g,null);var a=this.renderItems(n);return r.a.createElement("div",{className:"palette"},a)}}]),t}(a.Component),x=function(){return r.a.createElement("div",{className:"container profile"},r.a.createElement(v,{src:"https://www.loyatic.eu/wp-content/uploads/2017/11/iStock_000020004182Medium1.jpg",alt:"altname",name:"name"}),r.a.createElement(_,null))},I=n(10);var S=function(){return r.a.createElement(f.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement(I.a,{path:"/",component:N,exact:!0}),r.a.createElement(I.a,{path:"/profile",component:x,exact:!0})))};c.a.render(r.a.createElement(S,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.baa94d45.chunk.js.map
(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],{25:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(2),c=n.n(s),a=n(13),o=n.n(a),i=(n(25),n(4)),u=n.n(i),h=n(14),l=n(15),d=n(16),j=n(19),m=n(18),f=n(17),p=n.n(f),b=(n(44),function(e){return Object(r.jsxs)("div",{className:"card-container",children:[Object(r.jsx)("img",{className:"card-img",src:"https://robohash.org/".concat(e.monster.id,"?set=set2"),alt:"monster"}),Object(r.jsx)("h3",{children:e.monster.name}),Object(r.jsx)("p",{children:e.monster.email})]})}),x=(n(45),function(e){return Object(r.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(r.jsx)(b,{monster:e},e.id)}))})}),O=(n(46),function(e){var t=e.searchHandler,n=e.placeholder;return Object(r.jsx)("input",{className:"input",type:"search",placeholder:n,onChange:function(e){t(e.target.value)}})}),v=(n(47),function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).searchHandler=function(e){r.setState({searchTerm:e})},r.state={monsters:[],error:"",searchTerm:""},r}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(h.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("https://jsonplaceholder.typicode.com/users");case 3:t=e.sent,this.setState((function(){return{monsters:t.data}})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),this.setState((function(){return{error:"Unable to fetch data"}}));case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchTerm,s=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(r.jsxs)("div",{className:"App",children:[this.state.error&&Object(r.jsx)("h3",{class:"error",children:this.state.error}),Object(r.jsx)("h2",{children:"Monsters Rolodex"}),Object(r.jsx)(O,{searchHandler:this.searchHandler,placeholder:"Search Monsters"}),Object(r.jsx)(x,{monsters:s})]})}}]),n}(c.a.Component)),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),s(e),c(e),a(e)}))};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(v,{})}),document.getElementById("root")),g()}},[[48,1,2]]]);
//# sourceMappingURL=main.8ca81fe6.chunk.js.map
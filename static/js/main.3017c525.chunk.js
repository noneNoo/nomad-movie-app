(this["webpackJsonpnomad-movie-app"]=this["webpackJsonpnomad-movie-app"]||[]).push([[0],{62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n(0),c=n.n(a),r=n(29),o=n.n(r),i=n(8),l=n(2),j=n(17),m=n.n(j),u=n(30),d=n(11),h=n(12),b=n(14),p=n(13),v=n(31),O=n.n(v);var x=function(e){var t=e.id,n=e.year,a=e.title,c=e.summary,r=e.poster,o=e.genres;return Object(s.jsx)(i.b,{className:"movie",to:{pathname:"/movie/".concat(t),state:{year:n,title:a,summary:c,poster:r,genres:o}},children:Object(s.jsxs)("div",{className:"movie__container",children:[Object(s.jsx)("img",{src:r,alt:a,title:a}),Object(s.jsxs)("div",{className:"movie__data",children:[Object(s.jsx)("h3",{className:"movie__title",children:a}),Object(s.jsx)("h5",{className:"movie__year",children:n}),Object(s.jsx)("ul",{className:"movie__genres",children:o.map((function(e,t){return Object(s.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(s.jsxs)("p",{className:"movie__summary",children:[c.slice(0,140),"..."]})]})]})})},f=(n(62),function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e.getMovies=Object(u.a)(m.a.mark((function t(){var n,s;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");case 2:n=t.sent,s=n.data.data.movies,e.setState({movies:s,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(s.jsx)("section",{className:"container",children:t?Object(s.jsx)("div",{className:"loader",children:Object(s.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(s.jsx)("div",{className:"movies",children:n.map((function(e){return Object(s.jsx)(x,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(c.a.Component));n(63);var g=function(e){return console.log(e),Object(s.jsxs)("div",{className:"about__container",children:[Object(s.jsx)("span",{children:"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"}),Object(s.jsx)("span",{children:"\u2212 George Orwell, 1984"})]})},y=(n(64),function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;void 0===t.state&&n.push("/")}},{key:"render",value:function(){console.log(this.props);var e=this.props.location;return e.state?Object(s.jsxs)("main",{children:[Object(s.jsx)("img",{src:e.state.poster}),Object(s.jsx)("h2",{children:e.state.title}),Object(s.jsx)("p",{children:e.state.summary})]}):null}}]),n}(c.a.Component));n(65);var _=function(){return Object(s.jsxs)("nav",{children:[Object(s.jsx)(i.b,{to:"/",children:"Home"}),Object(s.jsx)(i.b,{to:"/about",children:"About"})]})};var N=function(){return Object(s.jsxs)(i.a,{children:[Object(s.jsx)(_,{}),Object(s.jsx)(l.a,{path:"/",exact:!0,component:f}),Object(s.jsx)(l.a,{path:"/about",component:g}),Object(s.jsx)(l.a,{path:"/movie/:id",component:y})]})};o.a.render(Object(s.jsx)(N,{}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.3017c525.chunk.js.map
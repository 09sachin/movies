(this["webpackJsonpmovie-watchlist"]=this["webpackJsonpmovie-watchlist"]||[]).push([[0],{22:function(e,t,a){e.exports=a(34)},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),l=a(20),r=a.n(l),i=a(7),o=a(1),s=function(){return n.a.createElement("header",null,n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"inner-content"},n.a.createElement("div",{className:"brand"},n.a.createElement(i.b,{to:"/movies"},"MoviesPoint")),n.a.createElement("ul",{className:"nav-links"},n.a.createElement("li",null,n.a.createElement(i.b,{to:"/movies"},"Watch List")),n.a.createElement("li",null,n.a.createElement(i.b,{to:"/watched"},"Watched")),n.a.createElement("li",null,n.a.createElement(i.b,{to:"/add",className:"btn btn-main"},"+ Add"))))))},m=a(11),d=a(13),u=a(5),h=function(e,t){switch(t.type){case"ADD_MOVIE_TO_WATCHLIST":return Object(u.a)(Object(u.a)({},e),{},{watchlist:[t.payload].concat(Object(d.a)(e.watchlist))});case"REMOVE_MOVIE_FROM_WATCHLIST":return Object(u.a)(Object(u.a)({},e),{},{watchlist:e.watchlist.filter((function(e){return e.imdbID!==t.payload}))});case"ADD_MOVIE_TO_WATCHED":return Object(u.a)(Object(u.a)({},e),{},{watchlist:e.watchlist.filter((function(e){return e.imdbID!==t.payload.imdbID})),watched:[t.payload].concat(Object(d.a)(e.watched))});case"MOVE_TO_WATCHLIST":return Object(u.a)(Object(u.a)({},e),{},{watched:e.watched.filter((function(e){return e.imdbID!==t.payload.imdbID})),watchlist:[t.payload].concat(Object(d.a)(e.watchlist))});case"REMOVE_FROM_WATCHED":return Object(u.a)(Object(u.a)({},e),{},{watched:e.watched.filter((function(e){return e.imdbID!==t.payload}))});default:return e}},E={watchlist:localStorage.getItem("watchlist")?JSON.parse(localStorage.getItem("watchlist")):[],watched:localStorage.getItem("watched")?JSON.parse(localStorage.getItem("watched")):[]},v=Object(c.createContext)(E),f=function(e){var t=Object(c.useReducer)(h,E),a=Object(m.a)(t,2),l=a[0],r=a[1];Object(c.useEffect)((function(){localStorage.setItem("watchlist",JSON.stringify(l.watchlist)),localStorage.setItem("watched",JSON.stringify(l.watched))}),[l]);return n.a.createElement(v.Provider,{value:{watchlist:l.watchlist,watched:l.watched,addMovieToWatchlist:function(e){r({type:"ADD_MOVIE_TO_WATCHLIST",payload:e})},removeMovieFromWatchlist:function(e){r({type:"REMOVE_MOVIE_FROM_WATCHLIST",payload:e})},addMovieToWatched:function(e){r({type:"ADD_MOVIE_TO_WATCHED",payload:e})},moveToWatchlist:function(e){r({type:"MOVE_TO_WATCHLIST",payload:e})},removeFromWatched:function(e){r({type:"REMOVE_FROM_WATCHED",payload:e})}}},e.children)},b=function(e){var t=e.type,a=e.movie,l=Object(c.useContext)(v),r=l.removeMovieFromWatchlist,i=l.addMovieToWatched,o=l.moveToWatchlist,s=l.removeFromWatched;return n.a.createElement("div",{className:"inner-card-controls"},"watchlist"===t&&n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{className:"ctrl-btn",onClick:function(){return i(a)}},n.a.createElement("i",{className:"fa-fw far fa-eye"})),n.a.createElement("button",{className:"ctrl-btn",onClick:function(){return r(a.imdbID)}},n.a.createElement("i",{className:"fa-fw fa fa-times"}))),"watched"===t&&n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{className:"ctrl-btn",onClick:function(){return o(a)}},n.a.createElement("i",{className:"fa-fw far fa-eye-slash"})),n.a.createElement("button",{className:"ctrl-btn",onClick:function(){return s(a.imdbID)}},n.a.createElement("i",{className:"fa-fw fa fa-times"}))))},p=function(e){var t=e.movie,a=e.type;return n.a.createElement("div",{className:"movie-card"},n.a.createElement("div",{className:"overlay"}),n.a.createElement("img",{src:t.Poster,alt:t.Title}),n.a.createElement(b,{type:a,movie:t}))},w=function(){var e=Object(c.useContext)(v).watchlist;return n.a.createElement("div",{className:"movie-page"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"header"},n.a.createElement("h1",{className:"heading"},"My Watchlist"),n.a.createElement("span",{className:"count-pill"},e.length," ",1===e.length?"Movie":"Movies")),e.length>0?n.a.createElement("div",{className:"movie-grid"},e.map((function(e,t){return n.a.createElement(p,{movie:e,key:e.imdbID+t,type:"watchlist"})}))):n.a.createElement("h2",{className:"no-movies"},"No movies in your list! Add some!")))},N=function(){var e=Object(c.useContext)(v).watched;return n.a.createElement("div",{className:"movie-page"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"header"},n.a.createElement("h1",{className:"heading"},"Watched Movies"),n.a.createElement("span",{className:"count-pill"},e.length," ",1===e.length?"Movie":"Movies")),e.length>0?n.a.createElement("div",{className:"movie-grid"},e.map((function(e,t){return n.a.createElement(p,{movie:e,key:e.imdbID+t,type:"watched"})}))):n.a.createElement("h2",{className:"no-movies"},"No movies in your list! Add some!")))},O=function(e){var t=e.movie,a=Object(c.useContext)(v),l=a.addMovieToWatchlist,r=a.addMovieToWatched,i=a.watchlist,o=a.watched,s=i.find((function(e){return e.imdbID===t.imdbID})),m=o.find((function(e){return e.imdbID===t.imdbID})),d=!!s||!!m,u=!!m;return n.a.createElement("div",{className:"result-card"},n.a.createElement("div",{className:"poster-wrapper"},t.Poster?n.a.createElement("img",{src:t.Poster,alt:t.Title}):n.a.createElement("div",{className:"filler-poster"})),n.a.createElement("div",{className:"info"},n.a.createElement("div",{className:"header"},n.a.createElement("h3",{className:"title"},t.Title),n.a.createElement("h4",{className:"release-date"},t.Year)),n.a.createElement("div",{className:"controls"},n.a.createElement("button",{className:"btn",disabled:d,onClick:function(){return l(t)}},"Add to Watchlist"),n.a.createElement("button",{className:"btn",disabled:u,onClick:function(){return r(t)}},"Add to Watched"))))},g=function(){var e=Object(c.useState)(""),t=Object(m.a)(e,2),a=t[0],l=t[1],r=Object(c.useState)([]),i=Object(m.a)(r,2),o=i[0],s=i[1];return n.a.createElement("div",{className:"add-page"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"add-content"},n.a.createElement("div",{className:"input-wrapper"},n.a.createElement("input",{type:"text",placeholder:"Search for a movie",value:a,onChange:function(e){e.preventDefault(),l(e.target.value),fetch("https://www.omdbapi.com/?s=".concat(e.target.value,"&apikey=8e7a1250")).then((function(e){return e.json()})).then((function(e){e.Error?s([]):s(e.Search)}))}})),o.length>0&&n.a.createElement("ul",{className:"results"},o.map((function(e,t){return n.a.createElement("li",{key:e.imdbID+t},n.a.createElement(O,{movie:e}))}))))))};a(32),a(33);var y=function(){return n.a.createElement(f,null,n.a.createElement(i.a,null,n.a.createElement(s,null),n.a.createElement(o.c,null,n.a.createElement(o.a,{exact:!0,path:"/movies"},n.a.createElement(w,null)),n.a.createElement(o.a,{path:"/add"},n.a.createElement(g,null)),n.a.createElement(o.a,{path:"/watched"},n.a.createElement(N,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.174b5e21.chunk.js.map
(this["webpackJsonp07-heroes-app"]=this["webpackJsonp07-heroes-app"]||[]).push([[0],Array(18).concat([function(e,a,t){var r={"./dc-arrow.jpg":27,"./dc-batman.jpg":28,"./dc-black.jpg":29,"./dc-blue.jpg":30,"./dc-flash.jpg":31,"./dc-green.jpg":32,"./dc-martian.jpg":33,"./dc-robin.jpg":34,"./dc-superman.jpg":35,"./dc-wonder.jpg":36,"./marvel-captain.jpg":37,"./marvel-cyclops.jpg":38,"./marvel-daredevil.jpg":39,"./marvel-hawkeye.jpg":40,"./marvel-hulk.jpg":41,"./marvel-iron.jpg":42,"./marvel-silver.jpg":43,"./marvel-spider.jpg":44,"./marvel-thor.jpg":45,"./marvel-wolverine.jpg":46};function c(e){var a=s(e);return t(a)}function s(e){if(!t.o(r,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return r[e]}c.keys=function(){return Object.keys(r)},c.resolve=s,e.exports=c,c.id=18},,,,,,,,,function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/dc-arrow.53beb448.jpg"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/dc-batman.5d505a5b.jpg"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/dc-black.6188260a.jpg"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/dc-blue.38f37178.jpg"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/dc-flash.602ef4e2.jpg"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/dc-green.9cf1d7e1.jpg"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/dc-martian.325a5693.jpg"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/dc-robin.76994bb2.jpg"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/dc-superman.f57a075e.jpg"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/dc-wonder.7419e84a.jpg"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/marvel-captain.ee9ab36f.jpg"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/marvel-cyclops.d24a2309.jpg"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/marvel-daredevil.b783c6d5.jpg"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/marvel-hawkeye.3f65c9f2.jpg"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/marvel-hulk.f4aa146c.jpg"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/marvel-iron.2af9562a.jpg"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/marvel-silver.b16676fe.jpg"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/marvel-spider.f0a8b217.jpg"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/marvel-thor.467240a7.jpg"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/marvel-wolverine.4ff301c1.jpg"},,,,,,,,,,function(e,a,t){"use strict";t.r(a);var r=t(1),c=t(19),s=t.n(c),n=t(10),i=Object(r.createContext)(),l=t(4),o="[auth] login",d="[auth] logout",u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case o:return Object(l.a)(Object(l.a)({},a.payload),{},{logged:!0});case d:return{logged:!1};default:return e}},j=t(8),m=t(2),p=t(13),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(r.useState)(e),t=Object(n.a)(a,2),c=t[0],s=t[1],i=function(){s(e)},o=function(e){var a=e.target;s(Object(l.a)(Object(l.a)({},c),{},Object(p.a)({},a.name,a.value)))};return[c,o,i]},b=t(0),f=function(e){var a=e.history,t=Object(r.useContext)(i).dispatch,c=h({name:""}),s=Object(n.a)(c,2),l=s[0],d=s[1],u=l.name;return Object(b.jsxs)("div",{className:"container mt-5 text-center",children:[Object(b.jsx)("h1",{children:" Registrarse "}),Object(b.jsx)("hr",{}),Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("form",{className:"d-grid gap-1 col-6 m-auto",onSubmit:function(e){e.preventDefault();var r=localStorage.getItem("lastPath")||"/",c={type:o,payload:{name:"".concat(u)}};t(c),a.replace(r)},children:[Object(b.jsx)("input",{type:"text",placeholder:"Nombre",className:"form-control",name:"name",autoComplete:"off",value:u,onChange:d}),Object(b.jsx)("button",{type:"submit",className:"btn btn-dark m-1 btn-block",children:"Entrar"})]})})]})},v=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],O=t(18),g=function(e){var a=e.id,t=e.superhero,r=(e.publisher,e.alter_ego),c=e.first_appearance;e.characters;return Object(b.jsx)("div",{className:"col",children:Object(b.jsx)("div",{className:"card mb-3",style:{maxWidth:540},children:Object(b.jsxs)("div",{className:"row g-0",children:[Object(b.jsx)("div",{className:"col-md-4",children:Object(b.jsx)("img",{src:O("./".concat(a,".jpg")).default,className:"card-img-top",alt:t,style:{minHeight:"100%"}})}),Object(b.jsx)("div",{className:"col-md-8",children:Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsxs)("h5",{className:"card-title",children:[" ",t," "]}),Object(b.jsxs)("p",{className:"card-text",children:[" ",r," "]}),Object(b.jsx)("p",{className:"card-text",children:Object(b.jsx)("small",{className:"text-muted",children:c})}),Object(b.jsx)(j.b,{to:"./hero/".concat(a),className:"btn btn-dark",children:"Mas..."})]})})]})})})},x=function(e){var a=e.publisher,t=Object(r.useMemo)((function(){return function(e){if(!["DC Comics","Marvel Comics"].includes(e))throw new Error('Publisher "'.concat(e,'" no es correcto '));return v.filter((function(a){return a.publisher===e}))}(a)}),[a]);return Object(b.jsx)("div",{className:"row row-cols-1 row-cols-md-3 animate__animated animate__fadeIn",children:t.map((function(e){return Object(b.jsx)(g,Object(l.a)({},e),e.id)}))})},C=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:" DC "}),Object(b.jsx)("hr",{}),Object(b.jsx)(x,{publisher:"DC Comics"})]})},N=t(18),_=function(e){var a=e.history,t=Object(m.i)().heroeId,c=Object(r.useMemo)((function(){return e=t,v.find((function(a){return a.id===e}));var e}),[t]);if(!c)return Object(b.jsx)(m.a,{to:"/"});var s=c.superhero,n=c.publisher,i=c.alter_ego,l=c.first_appearance,o=c.characters;return Object(b.jsxs)("div",{className:"row mt-4",children:[Object(b.jsx)("div",{className:"col-4",children:Object(b.jsx)("img",{src:N("./".concat(t,".jpg")).default,alt:s,className:"img-fluid img-thumbnail animate__animated animate__fadeInLeft"})}),Object(b.jsxs)("div",{className:"col-8",children:[Object(b.jsxs)("h3",{children:[" ",s," "]}),Object(b.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(b.jsxs)("li",{className:"list-group-item",children:[" ",Object(b.jsx)("b",{children:"Alter ego: "})," ",i," "]}),Object(b.jsxs)("li",{className:"list-group-item",children:[" ",Object(b.jsx)("b",{children:"Editorial:  "})," ",n," "]}),Object(b.jsxs)("li",{className:"list-group-item",children:[" ",Object(b.jsx)("b",{children:"Primera Aparcion: "})," ",l," "]})]}),Object(b.jsxs)("div",{className:"m-3",children:[Object(b.jsx)("h5",{className:"",children:" Portadores del manto  "}),Object(b.jsxs)("p",{children:[" ",o," "]}),Object(b.jsx)("button",{className:"btn btn-dark",onClick:function(){a.goBack()},children:"Regresar"})]})]})]})},y=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:" Marvel "}),Object(b.jsx)("hr",{}),Object(b.jsx)(x,{publisher:"Marvel Comics"})]})},k=t(21),w=t.n(k),M=function(e){var a=e.history,t=Object(m.h)(),c=w.a.parse(t.search).q,s=void 0===c?"":c,i=h({search:s}),o=Object(n.a)(i,2),d=o[0],u=o[1],j=d.search,p=Object(r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""===e?[]:(e=e.toLocaleLowerCase(),v.filter((function(a){return a.superhero.toLocaleLowerCase().includes(e)})))}(s)}),[s]);return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Buscador"}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col-5",children:[Object(b.jsx)("h4",{children:" Buscar "}),Object(b.jsx)("hr",{}),Object(b.jsxs)("form",{className:"d-grid gap-1",onSubmit:function(e){e.preventDefault(),a.push("?q=".concat(j))},children:[Object(b.jsx)("input",{type:"text",placeholder:"Buscar",className:"form-control",name:"search",autoComplete:"off",value:j,onChange:u}),Object(b.jsx)("button",{type:"submit",className:"btn btn-dark m-1 btn-block",children:"Buscar"})]})]}),Object(b.jsxs)("div",{className:"col-7",children:[Object(b.jsx)("h4",{children:" Resultados "}),Object(b.jsx)("hr",{}),""===s&&Object(b.jsx)("div",{className:"alert alert-info",children:"Busca un heroe"}),""!==s&&0===p.length&&Object(b.jsxs)("div",{className:"alert alert-danger",children:["El heroe ",s," no encontrado"]}),p.map((function(e){return Object(b.jsx)(g,Object(l.a)({},e),e.id)}))]})]})]})},D=function(){var e=Object(r.useContext)(i),a=e.user.name,t=e.dispatch,c=Object(m.g)();return Object(b.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:[Object(b.jsx)(j.b,{className:"navbar-brand",to:"/",children:"Asociaciones"}),Object(b.jsx)("div",{className:"navbar-collapse",children:Object(b.jsxs)("div",{className:"navbar-nav",children:[Object(b.jsx)(j.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/marvel",children:"Marvel"}),Object(b.jsx)(j.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/dc",children:"DC"}),Object(b.jsx)(j.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/search",children:"Buscar"})]})}),Object(b.jsx)("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2",children:Object(b.jsxs)("ul",{className:"navbar-nav ms-auto",children:[Object(b.jsx)("span",{className:"nav-item nav-link text-info",children:a}),Object(b.jsx)("button",{className:"btn nav-item nav-link",onClick:function(){t({type:d}),c.replace("/login")},children:"Cerrar Sesion"})]})})]})},S=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(D,{}),Object(b.jsx)("div",{className:"container mt-2",children:Object(b.jsxs)(m.d,{children:[Object(b.jsx)(m.b,{exact:!0,path:"/marvel",component:y}),Object(b.jsx)(m.b,{exact:!0,path:"/hero/:heroeId",component:_}),Object(b.jsx)(m.b,{exact:!0,path:"/dc",component:C}),Object(b.jsx)(m.b,{exact:!0,path:"/search",component:M}),Object(b.jsx)(m.a,{to:"/marvel"})]})})]})},B=t(14),A=function(e){var a=e.isAuthentificated,t=e.component,r=Object(B.a)(e,["isAuthentificated","component"]);return localStorage.setItem("lastPath",r.location.pathname),Object(b.jsx)(m.b,Object(l.a)(Object(l.a)({},r),{},{component:function(e){return a?Object(b.jsx)(t,Object(l.a)({},e)):Object(b.jsx)(m.a,{to:"/login"})}}))},J=function(e){var a=e.isAuthentificated,t=e.component,r=Object(B.a)(e,["isAuthentificated","component"]);return Object(b.jsx)(m.b,Object(l.a)(Object(l.a)({},r),{},{component:function(e){return a?Object(b.jsx)(m.a,{to:"/"}):Object(b.jsx)(t,Object(l.a)({},e))}}))},I=function(){var e=Object(r.useContext)(i).user;return Object(b.jsx)(j.a,{children:Object(b.jsx)("div",{children:Object(b.jsxs)(m.d,{children:[Object(b.jsx)(J,{exact:!0,path:"/login",component:f,isAuthentificated:e.logged}),Object(b.jsx)(A,{path:"/",component:S,isAuthentificated:e.logged})]})})})},P=function(){return JSON.parse(localStorage.getItem("user"))||{logged:!1}},T=function(){var e=Object(r.useReducer)(u,{},P),a=Object(n.a)(e,2),t=a[0],c=a[1];return Object(r.useEffect)((function(){localStorage.setItem("user",JSON.stringify(t))}),[t]),Object(b.jsx)(i.Provider,{value:{user:t,dispatch:c},children:Object(b.jsx)(I,{})})};s.a.render(Object(b.jsx)(T,{}),document.getElementById("root"))}]),[[56,1,2]]]);
//# sourceMappingURL=main.23a63e9a.chunk.js.map
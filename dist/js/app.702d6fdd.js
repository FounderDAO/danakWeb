(function(t){function e(e){for(var n,s,o=e[0],c=e[1],l=e[2],u=0,f=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);_&&_(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,s=1;s<a.length;s++){var o=a[s];0!==i[o]&&(n=!1)}n&&(r.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},s={app:0},i={app:0},r=[];function o(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-24fc4fd0":"adcc7b7b","chunk-2d0cf524":"fa0e06d5","chunk-2d0da7d0":"ce1085dc","chunk-2d22d746":"70fda941","chunk-3fd43236":"23170d4b","chunk-8fe9f1c6":"8fa1eaaf","chunk-969e736e":"14d2211f","chunk-e5d6b074":"6a262faa","chunk-a9385196":"ea347791","chunk-c717ba3c":"557b2d6e"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={"chunk-24fc4fd0":1,"chunk-3fd43236":1,"chunk-969e736e":1,"chunk-e5d6b074":1,"chunk-a9385196":1,"chunk-c717ba3c":1};s[t]?e.push(s[t]):0!==s[t]&&a[t]&&e.push(s[t]=new Promise((function(e,a){for(var n="css/"+({}[t]||t)+"."+{"chunk-24fc4fd0":"57e22c34","chunk-2d0cf524":"31d6cfe0","chunk-2d0da7d0":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-3fd43236":"eb93345b","chunk-8fe9f1c6":"31d6cfe0","chunk-969e736e":"d4e36e99","chunk-e5d6b074":"a6e4a896","chunk-a9385196":"ba30ab64","chunk-c717ba3c":"7172b36d"}[t]+".css",i=c.p+n,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var l=r[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===i))return e()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){l=f[o],u=l.getAttribute("data-href");if(u===n||u===i)return e()}var _=document.createElement("link");_.rel="stylesheet",_.type="text/css",_.onload=e,_.onerror=function(e){var n=e&&e.target&&e.target.src||i,r=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete s[t],_.parentNode.removeChild(_),a(r)},_.href=i;var d=document.getElementsByTagName("head")[0];d.appendChild(_)})).then((function(){s[t]=0})));var n=i[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,a){n=i[t]=[e,a]}));e.push(n[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var f=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(_);var a=i[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",f.name="ChunkLoadError",f.type=n,f.request=s,a[1](f)}i[t]=void 0}};var _=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var _=u;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"03ab":function(t,e){t.exports="data:image/png;base64,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"},"0481":function(t,e,a){t.exports=a.p+"img/playmarket.1c5376b3.svg"},"067e":function(t,e,a){t.exports=a.p+"img/darax.f7e2a254.jpg"},1771:function(t,e,a){var n={"./icons/arrow-down.svg":"c874","./icons/arrow-right-circle.svg":"70be","./icons/clock.svg":"755b","./icons/home.svg":"ac9d","./icons/log-out.svg":"3367","./icons/menu.svg":"d17f","./icons/settings.svg":"9174","./icons/user.svg":"6aed","./icons/x.svg":"7387","./images/PicsArt_09-07-03.40.19.jpg":"4cf6","./images/ali.png":"e08b","./images/appstore.svg":"40be","./images/dala.png":"9f86","./images/danak.png":"3eac","./images/danak_text.png":"03ab","./images/darax.jpg":"067e","./images/download.png":"96fc","./images/friends.svg":"aab0","./images/home.png":"28ea","./images/human.png":"b64d","./images/jamoa.webp":"3ab1","./images/logout.png":"735a","./images/mc.svg":"1a42","./images/menuicon.png":"6b12","./images/paypal.png":"ac7b","./images/paypal.svg":"b67a","./images/playmarket.svg":"0481","./images/qiwi.svg":"f2a3","./images/unishop.png":"2dec","./images/uzb.png":"c5b6","./images/visa.svg":"f73a","./images/webmoney.svg":"50eb","./images/ya_money.svg":"2572","./logo/danak.svg":"21e1","./styles/main.css":"927c"};function s(t){var e=i(t);return a(e)}function i(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}s.keys=function(){return Object.keys(n)},s.resolve=i,t.exports=s,s.id="1771"},1789:function(t,e,a){},"1a42":function(t,e,a){t.exports=a.p+"img/mc.fc8da73b.svg"},"21e1":function(t,e,a){t.exports=a.p+"img/danak.cdf54c7c.svg"},2572:function(t,e,a){t.exports=a.p+"img/ya_money.912e5516.svg"},"28ea":function(t,e,a){t.exports=a.p+"img/home.7341615b.png"},"2dec":function(t,e,a){t.exports=a.p+"img/unishop.a22bf46e.png"},3367:function(t,e,a){t.exports=a.p+"img/log-out.8d509764.svg"},"357a":function(t,e,a){"use strict";a.d(e,"a",(function(){return c})),a.d(e,"b",(function(){return o}));var n=a("bc3a"),s=a.n(n),i=(a("c0d6"),"http://185.206.212.179"),r=localStorage.getItem("_uidt");r&&(s.a.defaults.headers.common["Authorization"]=r);s.a.create({baseURL:i,headers:{Authorization:"token ".concat(r)}});var o=s.a.create({baseURL:i,headers:{Authorization:"token ".concat(r)}}),c=(s.a.create({baseURL:i,headers:{Authorization:"token ".concat(r)}}),s.a.create({baseURL:i,headers:{"Content-Type":"application/json"}}));s.a.create({baseURL:i})},"36d4":function(t,e,a){},"3ab1":function(t,e,a){t.exports=a.p+"img/jamoa.468015a0.webp"},"3eac":function(t,e,a){t.exports=a.p+"img/danak.8794166f.png"},"40be":function(t,e,a){t.exports=a.p+"img/appstore.4eba6b97.svg"},"44a4":function(t,e,a){"use strict";a("723f")},"4cf6":function(t,e,a){t.exports=a.p+"img/PicsArt_09-07-03.40.19.0bbd5621.jpg"},"50eb":function(t,e,a){t.exports=a.p+"img/webmoney.fc13b0b9.svg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("a026"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Navbar"),a("router-view"),a("Footer")],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.sidebar?n("Sidebar",{on:{close:function(e){t.sidebar=!1}}}):t._e(),n("nav",{staticClass:"navbar sticky"},[t._v(" "+t._s(t.scrolling)+" "),n("div",{staticClass:"container navbar__container"},[n("div",{staticClass:"content"},[n("div",{staticClass:"navbar_left__box"},[t.sidebar?t._e():n("a",{staticClass:"border-0",on:{click:function(e){t.sidebar=!0}}},[n("img",{attrs:{src:a("d17f"),alt:""}})]),t.sidebar?n("a",{on:{click:function(e){t.sidebar=!1}}},[n("img",{attrs:{src:a("7387"),alt:""}})]):t._e()]),n("div",{staticClass:"imgBx"},[n("router-link",{staticClass:"link_for_image",attrs:{to:"/"}},[n("img",{attrs:{src:a("3eac"),alt:""}})]),n("router-link",{staticClass:"link_for_danak",staticStyle:{"text-decoration":"none"},attrs:{to:"/"}},[n("h1",[t._v(t._s(t.$t("danak")))])])],1)]),n("div",{staticClass:"btns"},[n("router-link",{staticClass:"login",attrs:{to:"/about","class-active":"active"}},[t._v(" "+t._s(t.$t("about"))+" ")]),t.isUserAuthenticated?[n("button",{staticClass:"register",on:{click:t.logout}},[t._v(" "+t._s(t.$t("close"))+" ")])]:[n("router-link",{staticClass:"login",attrs:{to:"/login"}},[t._v(t._s(t.$t("kirish")))]),n("router-link",{staticClass:"register",attrs:{to:"/register"}},[t._v(t._s(t.$t("royxatdan_otish")))])],n("LanguageDropdown"),t.isUserAuthenticated?[n("a",{staticClass:"profile_button",on:{click:t.profile}},[n("img",{attrs:{src:a("6aed"),alt:""}})]),t.profileModal?n("Profile",{on:{close:function(e){t.profileModal=!1}}}):t._e()]:t._e()],2)])])],1)},o=[],c=(a("d3b7"),a("3ca3"),a("ddb0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav-wrapper"},[a("div",{staticClass:"sl-nav"},[a("flag",{staticClass:"flag_icon",attrs:{iso:t.locale}}),t._v("  "),a("ul",[a("li",[a("b",[t._v(t._s(t.currentLocale))]),t._v(" "),a("i",{staticClass:"fa fa-angle-down",attrs:{"aria-hidden":"true"}}),a("div",{staticClass:"triangle"}),a("ul",[a("li",{on:{click:function(e){return t.setLocale("uz","Uzbek")}}},[a("flag",{attrs:{iso:"uz"}}),a("span",{staticClass:"active"},[t._v("Uzbek")])],1),a("li",{on:{click:function(e){return t.setLocale("ru","Русский")}}},[a("flag",{attrs:{iso:"ru"}}),a("span",[t._v("Русский")])],1),a("li",{on:{click:function(e){return t.setLocale("us","English")}}},[a("flag",{attrs:{iso:"us"}}),a("span",[t._v("English")])],1)])])])],1)])}),l=[],u={data:function(){return{currentLocale:"Русский",locale:null}},mounted:function(){this.locale=this.$i18n.locale},methods:{setLocale:function(t,e){var n=this;this.currentLocale=e,this.locale=t,a("c873")("./".concat(t,".json")).then((function(e){n.$i18n.setLocaleMessage(t,e),n.$i18n.locale=t}))}}},f=u,_=(a("8f9a"),a("2877")),d=Object(_["a"])(f,c,l,!1,null,"03c52d42",null),g=d.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidenav",attrs:{id:"mySidenav"}},[t._l(t.sidebarMenus,(function(e){return n("router-link",{key:e.id,staticClass:"col",attrs:{tag:"a","class-active":"active",exact:"",to:e.path}},[n("div",{on:{click:t.close}},[n("img",{attrs:{src:t.getImgUrl(e.imgUrl),alt:""}}),n("span",[t._v(t._s(e.title))])])])})),n("div",{staticClass:"mobile"},[n("router-link",{staticClass:"col mobile",attrs:{tag:"a",to:"/about","class-active":"active"}},[n("div",{on:{click:t.close}},[n("img",{attrs:{src:a("735a"),alt:"",width:"20"}}),n("span",[t._v(t._s(t.$t("about")))])])])],1),t.isUserAuthenticated?[n("button",{staticClass:"register",on:{click:t.logout}},[t._v(" "+t._s(t.$t("close"))+" ")])]:[n("div",{staticClass:"mobile"},[n("router-link",{staticClass:"col mobile",attrs:{tag:"a",to:"/login","class-active":"active"}},[n("div",{on:{click:t.close}},[n("span",[t._v(t._s(t.$t("kirish")))])])]),n("router-link",{staticClass:"col mobile",attrs:{tag:"a",to:"/register","class-active":"active"}},[n("div",{on:{click:t.close}},[n("span",[t._v(t._s(t.$t("royxatdan_otish")))])])])],1)]],2)},p=[],h={data:function(){return{sidebarMenus:[{id:1,title:"Bosh sahifa",imgUrl:"icons/home.svg",path:"/"},{id:2,title:"About",imgUrl:"icons/home.svg",path:"/about"},{id:3,title:"Mening naqd pulim",imgUrl:"icons/home.svg",path:"/"},{id:4,title:"To'lov tarixi",imgUrl:"icons/home.svg",path:"/transaction/history"},{id:5,title:"Mening hamyonim",imgUrl:"icons/home.svg",path:"/mywallet"},{id:6,title:"Sozlamalar",imgUrl:"icons/home.svg",path:"/"}]}},methods:{getImgUrl:function(t){return a("1771")("./"+t)},close:function(){this.$emit("close")},logout:function(){var t=this;this.$store.dispatch("logoutUser").then((function(){t.$router.push("/login")}))}},computed:{isUserAuthenticated:function(){return this.$store.getters.isUserAuthenticated}}},v=h,b=(a("9a4b"),Object(_["a"])(v,m,p,!1,null,"19ab46ac",null)),k=b.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userData?n("div",{staticClass:"profile_card",attrs:{id:"card"}},[n("div",{staticClass:"header_profile"},[n("i",{staticClass:"far fa-user-circle user_icon"}),n("p",[t._v(t._s(t.userData.username))]),t._m(0),n("a",{on:{click:t.closeProfileModal}},[n("img",{attrs:{src:a("3367"),alt:""}})])]),n("div",{staticClass:"profile_texts"},[n("h1",[t._v(t._s(t.$t("cashback_ustasi")))]),n("p",[t._v(t._s(t.$t("sadoqat_darajasi")))]),n("p",[n("strong",[t._v(t._s(t.$t("darajani_oshirish")))]),n("br"),n("br"),t._v(" "+t._s(t.$t("maksimal_daraja"))+" ")]),n("div",{staticClass:"profile_link"},[n("p",[t._v(t._s(t.$t("chiqarilgan_summa"))),n("strong",[t._v("$ "+t._s(t.userData.all_transaction))])]),t._m(1)])]),n("div",{staticClass:"profile_body"},[n("img",{attrs:{src:"finger.svg",alt:""}}),n("p",[t._v(t._s(t.$t("qanday_ishlashi")))]),t._m(2),n("img",{attrs:{src:"finger.svg",alt:""}}),n("p",[t._v("U qanday ishlaydi?")]),t._m(3)]),n("div",{staticClass:"cashback"},[n("h1",[t._v(t._s(t.$t("naqd_pul")))]),n("p",[t._v(t._s(t.$t("tasdiqlash")))]),n("h2",{staticClass:"grey_number"},[t._v("$ "+t._s(t.userData.estimated))]),n("p",{staticClass:"border_bottom"}),n("p",[t._v(t._s(t.$t("yechib_olish_uchun_mavjud"))+":")]),n("h2",{staticClass:"black_number"},[t._v("$ "+t._s(t.userData.all))]),n("button",{style:{cursor:t.withdrawButton?"not-allowed":"pointer"}},[t._v(t._s(t.$t("pulni_olish")))])])]):t._e()},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:"#"}},[n("img",{attrs:{src:a("9174"),alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:"#"}},[n("img",{attrs:{src:a("70be"),alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fas fa-chevron-right"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fas fa-chevron-right"})])}],y=a("1da1"),x=(a("96cf"),a("357a")),E={data:function(){return{userData:null}},mounted:function(){var t=this;return Object(y["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(x["b"])("/api/v1/user/profile/information");case 2:a=e.sent,200===a.status&&(t.userData=a.data.data);case 4:case"end":return e.stop()}}),e)})))()},methods:{closeProfileModal:function(){this.$emit("close")}},withdrawButton:function(){return this.userData.all>"0.10"}},S=E,A=(a("7c66"),Object(_["a"])(S,w,C,!1,null,"0d712d6b",null)),R=A.exports,j={name:"Header",data:function(){return{sidebar:!1,profileModal:!1}},components:{LanguageDropdown:g,Sidebar:k,Profile:R},computed:{isUserAuthenticated:function(){return this.$store.getters.isUserAuthenticated},menuItems:function(){return this.isUserAuthenticated?[{title:"Profile",path:"/profile"},{title:"Logout",path:"/logout"}]:[{title:"Login",path:"/login"},{title:"Register",path:"/register"}]},scrolling:function(){window.addEventListener("scroll",(function(){var t=document.querySelector(".navbar");t.classList.toggle("sticky",window.scrollY>0)}))}},methods:{logout:function(){var t=this;this.$store.dispatch("logoutUser").then((function(){t.$router.push("/login")}))},profile:function(){this.profileModal=!this.profileModal},setLocale:function(t){var e=this;this.locale=t,a("c873")("./".concat(t,".json")).then((function(a){e.$i18n.setLocaleMessage(t,a),e.$i18n.locale=t}))}}},L=j,U=(a("44a4"),Object(_["a"])(L,r,o,!1,null,"92093b80",null)),I=U.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"section_five"},[a("div",{staticClass:"container"},[t._m(0),a("p",{staticClass:"cash"},[t._v(t._s(t.$t("bizga_ergashing")))]),t._m(1),a("div",{staticClass:"texts"},[a("p",[t._v(" "+t._s(t.$t("footer_title"))+" ")]),a("span",[a("a",{attrs:{href:"#"}},[t._v(t._s(t.$t("foydalanuvchi_shartnomasi"))+" ")]),a("span",[t._v(" va ")]),a("a",{attrs:{href:"#"}},[t._v(" "+t._s(t.$t("maxfiylik_siyosati")))])])]),t._m(2)])])},O=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"images"},[n("img",{attrs:{src:a("b67a"),alt:""}}),n("img",{attrs:{src:a("1a42"),alt:""}}),n("img",{attrs:{src:a("f73a"),alt:""}}),n("img",{attrs:{src:a("2572"),alt:""}}),n("img",{attrs:{src:a("f2a3"),alt:""}}),n("img",{attrs:{src:a("50eb"),alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"social_btns"},[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fab fa-vk"})]),a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fab fa-odnoklassniki"})]),a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fab fa-facebook-f"})]),a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fab fa-twitter"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"download_img"},[n("a",{attrs:{href:"#"}},[n("img",{attrs:{src:a("0481"),alt:""}})]),n("a",{attrs:{href:"#"}},[n("img",{attrs:{src:a("40be"),alt:""}})])])}],q={name:"Footer"},D=q,M=Object(_["a"])(D,T,O,!1,null,"e7042d26",null),N=M.exports,J={name:"Layout",components:{Navbar:I,Footer:N}},P=J,$=Object(_["a"])(P,s,i,!1,null,null,null),z=$.exports,W=a("8c4f"),Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{background:"#eee"}},[n("section",{staticClass:"section_one"},[n("div",{staticClass:"container"},[n("h1",[t._v(t._s(t.$t("pitsa_sayohat")))]),n("p",{staticClass:"cash"},[t._v(t._s(t.$t("cashback_dokonlar")))]),n("div",{staticClass:"content"},[n("a",{attrs:{href:""}},[n("div",{staticClass:"markets"},[n("img",{attrs:{src:a("e08b"),alt:""}}),n("p",[t._v("0.14 % - "+t._s(t.$t("dan_qaytib_keladi"))+" ")]),n("h3",[t._v("6.46 % "+t._s(t.$t("gacha")))]),n("h4",[t._v(t._s(t.$t("card_title")))])])]),n("a",{attrs:{href:""}},[n("div",{staticClass:"markets"},[n("img",{attrs:{src:a("2dec"),alt:""}}),n("p",[t._v("0.14 % - "+t._s(t.$t("dan_qaytib_keladi"))+" ")]),n("h3",[t._v("6.46 % "+t._s(t.$t("gacha")))]),n("h4",[t._v(" "+t._s(t.$t("card_title_2"))+" ")])])])])]),t._m(0)]),n("section",{staticClass:"section_two",attrs:{id:"section_two"}},[n("h1",[t._v(" "+t._s(t.$t("section_2_title"))+" ")]),n("p",[t._v(" "+t._s(t.$t("section_2_title_2"))+" ")]),n("img",{attrs:{src:a("ac7b"),alt:""}})]),n("section",{staticClass:"section_three"},[n("div",{staticClass:"container"},[n("h1",[t._v(" "+t._s(t.$t("section_3_title"))+" "),n("i",{staticClass:"fas fa-heart"}),t._v(" "+t._s(t.$t("section_3_title_2qismi"))+" ")]),n("p",{staticClass:"cash"},[t._v(" "+t._s(t.$t("section_3_title_2"))+" ")]),n("img",{attrs:{src:a("3ab1"),alt:""}}),t._m(1)])]),n("section",{staticClass:"section_four"},[n("div",{staticClass:"container"},[n("div",{staticClass:"items"},[n("h2",[t._v(" "+t._s(t.$t("section_4_item_title_1"))+" ")]),n("br"),n("a",{attrs:{href:"#"}},[t._v(" "+t._s(t.$t("section_4_item1_link1"))+" ")]),n("br"),n("a",{attrs:{href:"#"}},[t._v(" "+t._s(t.$t("section_4_item1_link2"))+" ")]),n("br"),n("a",{attrs:{href:"#"}},[t._v(" "+t._s(t.$t("section_4_item1_link3"))+" ")]),n("br"),n("a",{attrs:{href:"#"}},[t._v(" "+t._s(t.$t("section_4_item1_link4"))+" ")]),n("br"),n("a",{attrs:{href:"#"}},[t._v(" "+t._s(t.$t("section_4_item1_link5"))+" ")]),n("br")]),n("div",{staticClass:"items"},[n("h2",[t._v(" "+t._s(t.$t("section_4_item_title_2")))]),n("br"),n("a",{attrs:{href:"#"}},[t._v(" "+t._s(t.$t("section_4_item2_link1"))+" ")]),n("br"),n("a",{attrs:{href:"#"}},[t._v(" "+t._s(t.$t("section_4_item2_link2"))+" ")]),n("br"),n("a",{attrs:{href:"#"}},[t._v(" "+t._s(t.$t("section_4_item2_link3"))+" ")]),n("br"),n("a",{attrs:{href:"#"}},[t._v(" "+t._s(t.$t("section_4_item2_link4"))+" ")]),n("br"),n("a",{attrs:{href:"#"}},[t._v(" "+t._s(t.$t("section_4_item2_link5"))+" ")]),n("br"),n("a",{attrs:{href:"#"}},[t._v(" "+t._s(t.$t("section_4_item2_link6"))+" ")]),n("br"),n("a",{attrs:{href:"#"}},[t._v(" "+t._s(t.$t("section_4_item2_link7"))+" ")]),n("br"),n("a",{attrs:{href:"#"}},[t._v(" "+t._s(t.$t("section_4_item2_link8"))+" ")]),n("br")]),n("div",{staticClass:"items"},[n("h2",[t._v(" "+t._s(t.$t("section_4_item_title_3"))+" ")]),n("br"),n("a",{attrs:{href:"#"}},[t._v(" "+t._s(t.$t("section_4_item3_link1"))+" ")]),n("br"),n("a",{attrs:{href:"#"}},[t._v(" "+t._s(t.$t("section_4_item3_link2"))+" ")]),n("br"),n("a",{attrs:{href:"#"}},[t._v(" "+t._s(t.$t("section_4_item3_link3"))+" ")]),n("br"),n("a",{attrs:{href:"#"}},[t._v(" "+t._s(t.$t("section_4_item3_link4"))+" ")]),n("br")]),n("div",{staticClass:"items"},[n("h2",[t._v(" "+t._s(t.$t("section_4_item_title_4")))]),n("br"),n("p",[t._v(" "+t._s(t.$t("section_4_item4_link"))+" ")])])])])])},B=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"arrow",attrs:{href:"#section_two"}},[n("img",{attrs:{src:a("c874"),alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"social_btns"},[a("a",{attrs:{href:""}},[a("button",[a("i",{staticClass:"fab fa-facebook-f"}),a("p",[t._v("Facebook")]),t._v(" "),a("p",[t._v("1711")])])]),a("a",{attrs:{href:""}},[a("button",[a("i",{staticClass:"fab fa-vk"}),a("p",[t._v("VKontakte")]),t._v(" "),a("p",[t._v("803")])])]),a("a",{attrs:{href:""}},[a("button",[a("i",{staticClass:"fab fa-twitter"}),a("p",[t._v("Twitter")]),t._v(" "),a("p",[t._v("1072")])])]),a("a",{attrs:{href:""}},[a("button",[a("i",{staticClass:"fab fa-odnoklassniki"}),a("p",[t._v("Одноклас..")]),t._v(" "),a("p",[t._v("702")])])])])}],F={name:"Home"},K=F,H=Object(_["a"])(K,Z,B,!1,null,null,null),Y=H.exports;n["default"].use(W["a"]);var G=[{path:"/",name:"home",component:Y},{path:"/login",name:"login",component:function(){return Promise.all([a.e("chunk-8fe9f1c6"),a.e("chunk-e5d6b074")]).then(a.bind(null,"a55b"))}},{path:"/mywallet",name:"mywallet",component:function(){return a.e("chunk-3fd43236").then(a.bind(null,"5f02f"))}},{path:"/register",name:"register",component:function(){return Promise.all([a.e("chunk-8fe9f1c6"),a.e("chunk-969e736e")]).then(a.bind(null,"73cf"))}},{path:"/profile",name:"profile",component:function(){return a.e("chunk-c717ba3c").then(a.bind(null,"c66d"))}},{path:"/forget",name:"forget",component:function(){return a.e("chunk-a9385196").then(a.bind(null,"5373"))}},{path:"/transaction/history",name:"transaction_history",component:function(){return a.e("chunk-24fc4fd0").then(a.bind(null,"953d"))}},{path:"/about",name:"About",component:function(){return a.e("chunk-2d22d746").then(a.bind(null,"f820"))}}],Q=new W["a"]({mode:"history",routes:G}),X=Q,V=a("c0d6"),tt=a("ee98"),et=a.n(tt),at=(a("15f5"),a("7051"),a("a925")),nt=a("cd7c");n["default"].use(at["a"]);var st=new at["a"]({locale:"ru",fallbackLocale:"ru",messages:{ru:nt}}),it=a("d61f"),rt=a("4f76"),ot=a.n(rt);a("927c"),n["default"].use(ot.a),n["default"].use(et.a),n["default"].use(it["a"]),n["default"].config.productionTip=!1,new n["default"]({i18n:st,router:X,store:V["a"],render:function(t){return t(z)}}).$mount("#app")},"6aed":function(t,e,a){t.exports=a.p+"img/user.ed52f187.svg"},"6b12":function(t,e,a){t.exports=a.p+"img/menuicon.79b18a5d.png"},"70be":function(t,e,a){t.exports=a.p+"img/arrow-right-circle.bdbb0ef6.svg"},"723f":function(t,e,a){},"735a":function(t,e,a){t.exports=a.p+"img/logout.71f96015.png"},7387:function(t,e,a){t.exports=a.p+"img/x.b0200bf7.svg"},"755b":function(t,e,a){t.exports=a.p+"img/clock.ea3f87d1.svg"},"7c66":function(t,e,a){"use strict";a("1789")},"8f9a":function(t,e,a){"use strict";a("36d4")},9174:function(t,e,a){t.exports=a.p+"img/settings.a2376801.svg"},"927c":function(t,e,a){},"96fc":function(t,e,a){t.exports=a.p+"img/download.5ddb2eb2.png"},"9a4b":function(t,e,a){"use strict";a("d6e9")},"9f86":function(t,e,a){t.exports=a.p+"img/dala.2b0fed5f.png"},aab0:function(t,e,a){t.exports=a.p+"img/friends.04e39200.svg"},ac7b:function(t,e,a){t.exports=a.p+"img/paypal.2a896299.png"},ac9d:function(t,e,a){t.exports=a.p+"img/home.55644be0.svg"},b64d:function(t,e,a){t.exports=a.p+"img/human.fff200ce.png"},b67a:function(t,e,a){t.exports=a.p+"img/paypal.4a55ab82.svg"},c0d6:function(t,e,a){"use strict";var n=a("a026"),s=a("2f62"),i=a("1da1"),r=(a("96cf"),a("357a")),o={state:{user:{userData:[]}},getters:{getProfile:function(t){return t.user.userData},getProjectInfo:function(t){return t.user.userCount}},mutations:{UPDATE_DATA:function(t,e){t.user.userData=e},PROJECT_INFO:function(t,e){t.projectInfo=e}},actions:{getProjectInfo:function(t){return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.commit,e.prev=1,n=localStorage.getItem("token"),!n){e.next=9;break}return e.next=6,r["b"].get("api/project_info");case 6:return s=e.sent,a("PROJECT_INFO",s.data),e.abrupt("return",s);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](1),a("SET_ERROR",e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))()},getProfiles:function(t){return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.commit,e.prev=1,n=localStorage.getItem("token"),!n){e.next=10;break}return e.next=6,r["b"].get("api/profile/");case 6:return s=e.sent,console.log("getProfiles -> response",s),a("UPDATE_DATA",s.data),e.abrupt("return",s.data);case 10:e.next=16;break;case 12:e.prev=12,e.t0=e["catch"](1),a("SET_ERROR",e.t0.message),alert(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})))()}}},c=(a("d3b7"),{state:{user:{isAuthenticated:!1,token:localStorage.getItem("_uidt")||null}},getters:{loggedIn:function(t){return t.user.token},isUserAuthenticated:function(t){return!!t.user.token},isStateUser:function(t){return t.user}},mutations:{updateLocalStorage:function(t,e){localStorage.setItem("_uidt",e),t.user.token=e,t.user.isAuthenticated=!0},updateAccess:function(t,e){t.user.token=e},GOOGLE_AUTH:function(t,e){t.user.token=e,t.user.isAuthenticated=!0},SET_USER:function(t,e){t.user.isAuthenticated=!0,t.user.token=e},UNSET_USER:function(t){t.user={isAuthenticated:null,token:null}},destroyToken:function(t){t.user.token=null,t.user.isAuthenticated=!1}},actions:{registerUser:function(t,e){t.commit;return new Promise((function(t,a){r["a"].post("/auth/users/",e).then((function(e){t(e)})).catch((function(t){a(t)}))}))},logoutUser:function(t){return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.commit,n=t.getters,!n.loggedIn){e.next=17;break}return e.prev=2,e.next=5,r["a"].post("/auth/token/logout");case 5:return s=e.sent,localStorage.removeItem("_uidt"),a("destroyToken",s.detail),a("getProfile",null),e.abrupt("return",s);case 12:throw e.prev=12,e.t0=e["catch"](2),localStorage.removeItem("_uidt"),a("destroyToken"),e.t0.message;case 17:case"end":return e.stop()}}),e,null,[[2,12]])})))()},loginUser:function(t,e){var a=t.commit;t.dispatch;return new Promise((function(t,n){r["a"].post("/rest-auth/login/",e).then((function(e){e.data.key;a("updateLocalStorage",e.data.key),t(e)})).catch((function(t){n(t)}))}))},loginUser2:function(t,e){return Object(i["a"])(regeneratorRuntime.mark((function a(){var n,s,i,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.commit,s=t.dispatch,a.prev=1,a.next=4,r["a"].post("/api/v1/rest-auth/login/",{username:e.username,password:e.password});case 4:return i=a.sent,a.next=7,i.data.key;case 7:return o=a.sent,n("updateLocalStorage",o),s("getProfiles"),a.abrupt("return",i);case 13:a.prev=13,a.t0=a["catch"](1),n("SET_ERROR",a.t0.message);case 16:case"end":return a.stop()}}),a,null,[[1,13]])})))()},googleAuth:function(t,e){var a=t.commit;t.dispatch;return new Promise((function(t,n){r["a"].post("/api/v1/user/google/",e).then((function(e){console.log("response",e),a("updateLocalStorage",e.data.key),t(e)})).catch((function(t){n(t)}))}))},facebookAuth:function(t,e){var a=t.commit;t.dispatch;return new Promise((function(t,n){r["a"].post("/api/v1/user/facebook/",e).then((function(e){console.log("response",e),a("updateLocalStorage",e.data.key),t(e)})).catch((function(t){n(t),a("SET_ERROR",t.message)}))}))},forgetPass:function(t,e){return Object(i["a"])(regeneratorRuntime.mark((function a(){var n,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.commit,a.prev=1,a.next=4,r["a"].post("auth/users/reset_password/",e);case 4:return s=a.sent,console.log("forgetPass -> response",s),a.abrupt("return",s);case 9:return a.prev=9,a.t0=a["catch"](1),console.log("forgetPass -> e",a.t0),n("SET_ERROR",a.t0.message),a.abrupt("return",a.t0);case 14:case"end":return a.stop()}}),a,null,[[1,9]])})))()},setUser:function(t,e){var a=t.commit;a("SET_USER",e)}}}),l={state:{processing:!1,error:null},mutations:{SET_PROCESSING:function(t,e){t.processing=e},SET_ERROR:function(t,e){t.error=e},CLEAN_ERROR:function(t){t.error=null}},getters:{getProcessing:function(t){return t.processing},getError:function(t){return t.error}}};n["default"].use(s["a"]);e["a"]=new s["a"].Store({modules:{authenticationModule:c,userModule:o,general:l}})},c5b6:function(t,e,a){t.exports=a.p+"img/uzb.bbc26213.png"},c873:function(t,e,a){var n={"./ru.json":["cd7c"],"./us.json":["62e7","chunk-2d0cf524"],"./uz.json":["6c8e","chunk-2d0da7d0"]};function s(t){if(!a.o(n,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=n[t],s=e[0];return Promise.all(e.slice(1).map(a.e)).then((function(){return a.t(s,3)}))}s.keys=function(){return Object.keys(n)},s.id="c873",t.exports=s},c874:function(t,e,a){t.exports=a.p+"img/arrow-down.15251d3f.svg"},cd7c:function(t){t.exports=JSON.parse('{"close":"Выход","Language":"Ru","profile":"Моя страница","cashback_ustasi":"Кэшбэк Мастер","sadoqat_darajasi":"- Ваш уровень в программе лояльности.","darajani_oshirish":"Как повысить уровень?","maksimal_daraja":"Вы уже достигли максимума","chiqarilgan_summa":"Вы спасли","qanday_ishlashi":"Как это работает?","naqd_pul":"Моя страница","tasdiqlash":"Ожидается подтверждение:","yechib_olish_uchun_mavjud":"Доступно для вывода:","pulni_olish":"Вывод средств","danak":"Данак","about":"О нас","kirish":"Вступление","royxatdan_otish":"Зарегистрироваться","bizga_ergashing":"Подписывайтесь на нас","footer_title":"Copyright © - Все права защищены 2021","foydalanuvchi_shartnomasi":"Пользовательское Соглашение","maxfiylik_siyosati":"Политика конфиденциальности","email":"Электронная почта","pitsa_sayohat":"От пиццы до путешествий","cashback_dokonlar":"МАГАЗИНЫ И УСЛУГИ С 3000+ КЭШБЕК","dan_qaytib_keladi":"возвращается из","gacha":"до того как","card_title":"Aliexpress","card_title_2":"Unishop","section_2_title":"Быстрый выход удобным способом","section_2_title_2":"МИНИМАЛЬНАЯ СУММА СОХРАНЕНИЯ - ОТ 1,5 $","section_3_title":"Поделись этим со своими близкими","section_3_title_2qismi":"сделай мир лучше!","section_3_title_2":"РАССКАЗЫВАЙТЕ ДРУЗЬЯМ О ПРОСТОМ СПОСОБЕ СПАСЕНИЯ","section_4_item_title_1":"Сэкономить больше","section_4_item_title_2":"Позволь нам помочь","section_4_item_title_3":"Работать с нами","section_4_item_title_4":"О нас","section_4_item1_link1":"Наличные отменены дважды на Алиэкспресс!","section_4_item1_link2":"Дополнительные скидки на Алиэкспресс: Купить полезное","section_4_item1_link3":"Наличные при покупке на Алиэкспресс: кратко о главном","section_4_item1_link4":"Лучше скачать кэшбэк на Алиэкспресс и как его установить","section_4_item1_link5":"Что такое плагины кэшбэка AliExpress и в чем их преимущества?","section_4_item2_link1":"Программа лояльности Данак","section_4_item2_link2":"Приложение для Android Danak","section_4_item2_link3":"Приложение для iOS Danak","section_4_item2_link4":"Расширение для браузеров","section_4_item2_link5":"Помощь","section_4_item2_link6":"Задайте вопрос","section_4_item2_link7":"Блог","section_4_item2_link8":"Карта сайта","section_4_item3_link1":"Приложение «Приведи друга»","section_4_item3_link2":"Рекламируйте нас","section_4_item3_link3":"Советы для магазинов","section_4_item3_link4":"Рекламируется на Мегабонусе »","section_4_item4_link":"Мы считаем, что экономия - это преимущество разумного расходования денег, поэтому предлагаем новый инструмент. Объединив сотни магазинов, технологии и дизайн, мы создали отличный кэшбэк-сервис, который сделает ваши покупки по-настоящему экономичными. С помощью нашего сервиса вы можете получить 40% возврат суммы покупки в сотнях любимых магазинов и сервисов по всему миру."}')},d17f:function(t,e,a){t.exports=a.p+"img/menu.ca394ec8.svg"},d6e9:function(t,e,a){},e08b:function(t,e,a){t.exports=a.p+"img/ali.0592aa7c.png"},f2a3:function(t,e,a){t.exports=a.p+"img/qiwi.1757c86f.svg"},f73a:function(t,e,a){t.exports=a.p+"img/visa.a8c9f8df.svg"}});
//# sourceMappingURL=app.702d6fdd.js.map
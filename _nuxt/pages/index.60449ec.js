(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{185:function(t,e,l){var content=l(190);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(49).default)("1b7833da",content,!0,{sourceMap:!1})},186:function(t,e,l){var content=l(194);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(49).default)("20c104f8",content,!0,{sourceMap:!1})},189:function(t,e,l){"use strict";var r=l(185);l.n(r).a},190:function(t,e,l){(e=l(48)(!1)).push([t.i,'.link-arrow svg{transition:transform .2s}.link-arrow:hover svg{transform:translate(10px)}.bg-hover-pastel-yellow:hover{background-color:#fffff5}.bg-hover-pastel-blue:hover{background-color:#f3f7fa}.bg-gray{background-color:#7a7d85}.border-light-grey{border-color:#70737a}.red{color:#cb0000}.column-gap-1{grid-column-gap:4rem;-moz-column-gap:4rem;column-gap:4rem}.font-2{font-family:"Lusitana",serif}.font-1,body{font-family:inter,serif}.blend-multiply{background-blend-mode:multiply}.bg-text{font-size:1.466rem;font-weight:600;line-height:1.1}@media (min-width:1024px){.lg\\:bg-transparent-important{background-color:transparent!important}}@media (min-width:768px){.bg-text{font-size:1.466rem}.md\\:column-count-2{-moz-column-count:2;column-count:2}.md\\:overlap-8vh{margin-top:-8vh}}.container{max-width:1500px}.zn1{z-index:-1}.border-color-card{border-color:#70737a}.bg-primary{background-color:#cd4749}.bg-gold{background-color:#a0998f}@media (min-width:1024px){.bg-text{font-size:2.8rem}.overlap-1{margin-top:-20vh}.overlap-2{margin-top:-30vh}}@media only screen and (min-width:1024px){.lg\\:overlap-30vh{margin-top:-5vh}}',""]),t.exports=e},191:function(t,e,l){t.exports=l.p+"img/victoireLogo.fb7a7e5.jpg"},192:function(t,e){t.exports={corePlugins:{container:!1},theme:{screens:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px"}},variants:{},plugins:[],purge:{enabled:!0,content:["components/**/*.vue","layouts/**/*.vue","pages/**/*.vue","plugins/**/*.js","nuxt.config.js"]}}},193:function(t,e,l){"use strict";var r=l(186);l.n(r).a},194:function(t,e,l){(e=l(48)(!1)).push([t.i,".nav-mobile{font-size:.8rem}.nav__item:hover{cursor:pointer}.border-b-primary,.nav__item:hover{border-bottom:1px solid #cd4749}.nav__links>a{text-transform:capitalize;font-size:1.2rem;font-weight:500;padding-left:2rem;color:#262626!important;text-decoration:none;display:inline-block}.nav__links>a:hover>span{border-bottom:1px solid #cd4749}.nav__links>div{font-weight:500;letter-spacing:.05em;font-size:5}.nav__links>span{padding-top:.333rem;line-height:1}.border-ebebeb{border-color:#ebebeb}.logo{min-width:100%;top:4px;mix-blend-mode:multiply}@media (min-width:768px){.nav__links>a:hover>span{border-bottom:1px solid #cd4749}}#nav-icon4{position:relative;transform:rotate(0deg);transition:.5s ease-in-out}#nav-icon4 span{display:block;position:absolute;height:2px;width:100%;background:#262626;opacity:1;left:0;transform:rotate(0deg);transition:.2s ease-in-out}#nav-icon4 span:first-child{top:0;transform-origin:left center}#nav-icon4 span:nth-child(2){top:8px;transform-origin:left center}#nav-icon4 span:nth-child(3){top:16px;transform-origin:left center}#nav-icon4.open span:first-child{transform:rotate(45deg);top:0;left:0}#nav-icon4.open span:nth-child(2){width:0;opacity:0}#nav-icon4.open span:nth-child(3){transform:rotate(-45deg);top:17px;left:0}",""]),t.exports=e},195:function(t,e,l){"use strict";l.r(e);var r=l(192),o=l.n(r),n={beforeMount:function(){var t=this,e=parseInt(o.a.theme.screens.lg,10);window.addEventListener("resize",(function(){window.innerWidth>=e?document.body.style.overflow="auto":t.showNav&&(document.body.style.overflow="hidden")}))},data:function(){return{languages:["EN","FR","NL"],languageActive:"FR",showNav:!1,navLinks:[{title:"vente",to:"#",amount:92},{title:"immobilier neuf",to:"#",amount:68},{title:"location",to:"#",amount:53},{title:"residence service",to:"#",amount:20}]}},methods:{toggleNav:function(){this.showNav=!this.showNav,this.showNav?document.body.style.overflow="hidden":document.body.style.overflow="auto"}}},c=(l(193),l(22)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"overflow-hidden"},[r("div",{staticClass:"z-30 relative top-0 left-0 right-0 bg-white"},[r("div",{staticClass:"border-b border-ebebeb"},[r("div",{staticClass:"flex justify-between items-center px-4"},[r("nuxt-link",{attrs:{to:"/"}},[r("img",{staticClass:"logo relative",attrs:{src:l(191)}})]),t._v(" "),r("div",{staticClass:"hidden lg:flex items-center"},[r("div",{staticClass:"flex items-center font-medium"},[r("nuxt-link",{staticClass:"mr-4",attrs:{to:"/"}},[r("button",{staticClass:"bg-primary hover:bg-red-700 text-white font-bold py-3 px-6"},[t._v("\n                Contact\n              ")])]),t._v("\n            |\n            "),r("nuxt-link",{attrs:{to:"/"}},[r("span",{staticClass:"nav__item m-4 p-1"},[t._v("FR")])])],1)]),t._v(" "),r("div",{staticClass:"lg:hidden cursor-pointer p-4",on:{click:t.toggleNav}},[r("div",{staticClass:"px-3 h-5",class:{open:t.showNav},attrs:{id:"nav-icon4"}},[r("span"),t._v(" "),r("span"),t._v(" "),r("span")])])],1)]),t._v(" "),r("div",{staticClass:"hidden lg:block"},[r("div",{staticClass:"flex pt-8 pb-12"},t._l(t.navLinks,(function(e){return r("div",{key:e.title,staticClass:"flex w-1/4 nav__links"},[r("nuxt-link",{attrs:{to:"/"+e.to}},[r("div",[t._v(t._s(e.amount))]),t._v(" "),r("span",[t._v(t._s(e.title))])])],1)})),0)])]),t._v(" "),t.showNav?r("div",{staticClass:"nav-mobile flex flex-col lg:hidden"},[r("div",{staticClass:"overflow-y-auto fixed z-20 top-0 left-0 right-0 bottom-0 bg-white"},[r("div",{staticClass:"flex flex-col min-h-full capitalize px-8 pt-24 pb-10 py-8"},[r("div",{staticClass:"py-6"},[r("div",{staticStyle:{"font-size":"1.2em"}},[t._v("Choisissez votre langue")]),t._v(" "),r("div",[t._v("–")]),t._v(" "),r("ul",{staticClass:"flex"},t._l(t.languages,(function(e){return r("li",{key:e,staticClass:"flex mr-6 opacity-50",class:{"opacity-100 border-b-primary":e===t.languageActive},staticStyle:{"font-size":"2em"}},[t._v(t._s(e))])})),0)]),t._v(" "),r("ul",{staticClass:"py-6 flex-grow"},[r("div",{staticStyle:{"font-size":"1.2em"}},[t._v("Biens immobiliers")]),t._v(" "),r("div",[t._v("–")]),t._v(" "),t._l(t.navLinks,(function(e){return r("li",{key:e.title,staticClass:"py-2"},[r("nuxt-link",{staticClass:"flex ",staticStyle:{"font-size":"2em"},attrs:{to:"/"+e.to}},[r("div",{staticClass:"mr-6"},[t._v(t._s(e.amount))]),t._v(" "),r("span",[t._v(t._s(e.title))])])],1)}))],2),t._v(" "),r("button",{staticClass:"bg-primary hover:bg-red-700 text-white font-bold py-5"},[t._v("\n          Contact\n        ")])])])]):t._e()])}),[],!1,null,null,null);e.default=component.exports},196:function(t,e,l){"use strict";l.r(e);var r={},o=l(22),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("nuxt-link",{staticClass:"link-arrow lg:flex",attrs:{to:"/"}},[e("div",{staticClass:"w-20"},[e("svg",{attrs:{height:"40",width:"42"}},[e("line",{staticStyle:{stroke:"white","stroke-width":"2"},attrs:{x1:"0",y1:"20",x2:"40",y2:"20"}}),this._v(" "),e("path",{attrs:{fill:"none",stroke:"white","stroke-width":"2",d:"M32 28 L40 20 L32 12"}}),this._v(" "),e("path",{attrs:{d:"M150 0 L75 200 L225 200 Z"}})])]),this._v(" "),this._t("default",[e("h1",{staticClass:"ml-1 masthead-text"},[this._v("Découvrez notre portfolio"),e("br"),this._v("immobilière")])])],2)}),[],!1,null,null,null);e.default=component.exports},197:function(t,e,l){"use strict";l.r(e);var r={mounted:function(){console.log("leftSticky",this.realEstates)},props:["realEstates"]},o=l(22),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"relative lg:overlap-30vh"},[l("div",{staticClass:"container mx-auto"},[l("div",{staticClass:"flex flex-col lg:flex-row"},[l("div",{staticClass:"w-full lg:w-1/2"},[l("div",{staticClass:"lg:hidden flex flex-col md:flex-row"},[l("div",{staticClass:"w-full bg-white md:border-r border-color-card cardSm"},[l("CardSm",{attrs:{realEstate:t.realEstates[0]}})],1),t._v(" "),l("div",{staticClass:"w-full bg-white border-t md:border-r border-color-card cardSm md:overlap-8vh"},[l("CardSm",{attrs:{realEstate:t.realEstates[1]}})],1)]),t._v(" "),l("div",{staticClass:"lg:absolute top-0 left-0 right-0 bottom-0"},[l("div",{staticClass:"container mx-auto h-full"},[l("div",{staticClass:"sticky top-0 w-full lg:w-1/2 bg-white border-t lg:border-t-0 lg:border-r border-color-card"},[l("CardLg")],1)])])]),t._v(" "),l("div",{staticClass:"w-full lg:w-1/2"},[l("div",{staticClass:"relative bg-gold lg:bg-transparent-important"},[l("div",{staticClass:"flex flex-col md:flex-row"},[l("div",{staticClass:"w-full lg:w-1/2 overlap-1"},[l("div",{staticClass:"w-full bg-white md:border-r border-color-card cardSm hidden lg:block"},[l("CardSm",{attrs:{realEstate:t.realEstates[0]}})],1),t._v(" "),l("div",{staticClass:"bg-white border-t md:border-r border-color-card cardSm"},[l("CardSm",{attrs:{realEstate:t.realEstates[2]}})],1),t._v(" "),l("div",{staticClass:"bg-white border-t md:border-r border-color-card cardSm"},[l("CardSm",{attrs:{realEstate:t.realEstates[3]}})],1)]),t._v(" "),l("div",{staticClass:"w-full lg:w-1/2 overlap-2"},[l("div",{staticClass:"bg-white md:border-r border-color-card cardSm hidden lg:block"},[l("CardSm",{attrs:{realEstate:t.realEstates[1]}})],1),t._v(" "),l("div",{staticClass:"bg-white border-t md:border-r border-color-card cardSm"},[l("CardSm",{attrs:{realEstate:t.realEstates[4]}})],1),t._v(" "),l("div",{staticClass:"bg-white border-t md:border-r border-color-card cardSm"},[l("CardSm",{attrs:{realEstate:t.realEstates[5]}})],1)])])])])])]),t._v(" "),l("div",{staticClass:"flex md:justify-end"},[l("div",{staticClass:"w-full lg:w-1/2 bg-gold col-start-2 relative"},[l("div",{staticClass:"my-40 lg:my-32 xl:my-48 px-10 lg:px-20"},[l("h4",{staticClass:"bg-text text-white mb-6"},[t._v("Nos services immobiliers")]),t._v(" "),l("div",{staticClass:"flex flex-wrap "},[l("nuxt-link",{staticClass:"uppercase mr-5 mb-5 bg-white text-indigo-900 hover:bg-red-700 font-medium py-2 px-3",attrs:{to:"/"}},[t._v("\n            vente\n          ")]),t._v(" "),l("nuxt-link",{staticClass:"uppercase mr-5 mb-5 bg-white text-indigo-900 hover:bg-red-700 font-medium py-2 px-3",attrs:{to:"/"}},[t._v("\n            location\n          ")]),t._v(" "),l("nuxt-link",{staticClass:"whitespace-no-wrap uppercase mr-5 mb-5 bg-white text-indigo-900 hover:bg-red-700 font-medium py-2 px-3",attrs:{to:"/"}},[t._v("\n            Expertise & conseils\n          ")]),t._v(" "),l("nuxt-link",{staticClass:"whitespace-no-wrap uppercase mr-5 mb-5 bg-white text-indigo-900 hover:bg-red-700 font-medium py-2 px-3",attrs:{to:"/"}},[t._v("\n            Recherche de biens\n          ")])],1)])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardSm:l(199).default,CardLg:l(200).default})},198:function(t,e,l){"use strict";l.r(e);var r={props:["bgUrl"]},o=l(22),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"relative h-screen"},[e("div",{staticClass:"bg-cover bg-center h-full bg-gray-200 blend-multiply",style:"min-height:500px;background-image: url("+this.bgUrl+");"}),this._v(" "),e("div",{staticClass:"bg-black absolute top-0 left-0 right-0 bottom-0 opacity-50"}),this._v(" "),e("div",{staticClass:"container mx-auto absolute top-0 right-0 left-0 z-10 text-white"},[e("div",{staticClass:"mt-32 px-6",staticStyle:{"font-size":"2.8rem","font-weight":"600"}},[e("nuxt-link",{attrs:{to:"/"}},[this._t("default")],2)],1)])])}),[],!1,null,null,null);e.default=component.exports},199:function(t,e,l){"use strict";l.r(e);var r={props:["realEstate"],computed:{aspectRatio:function(){switch(this.realEstate.imageAspectRatio){case"4:3":return"75%";case"3:2":return"66.66%";case"8:5":return"62.5%";default:return"100%"}}}},o=l(22),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("nuxt-link",{staticClass:"flex flex-col w-full bg-hover-pastel-blue p-4 pb-8 h-full",attrs:{to:"/"}},[l("div",[l("div",{staticClass:"relative w-full",style:"padding-top:"+t.aspectRatio},[l("div",{staticClass:"absolute top-0 left-0 right-0 bottom-0"},[l("div",{staticClass:"h-full w-full",style:"background-size:cover;background-position:center center;background-image: url("+t.realEstate.imageUrl+");"})])])]),t._v(" "),l("div",{staticClass:"px-4"},[l("div",{staticClass:"mt-8 mb-4"},[l("h4",{staticClass:"font-2",staticStyle:{"font-size":"1.8rem"}},[t._v(t._s(t.realEstate.name))]),t._v(" "),l("h4",{staticClass:"font-2 red",staticStyle:{"font-size":"1.8rem"}},[t._v(t._s(t.realEstate.location))])]),t._v(" "),l("div",{staticClass:"mb-3"},[t._v("—")]),t._v(" "),l("ul",[l("li",{staticClass:"estate-list__price"},[t._v("À partir de "+t._s(t.realEstate.price)+" €")]),t._v(" "),l("li",[t._v("Nombre d'unités proposées: "+t._s(t.realEstate.units))]),t._v(" "),l("li",[t._v("Disponibilité: "+t._s(t.realEstate.availability))])])])])}),[],!1,null,null,null);e.default=component.exports},200:function(t,e,l){"use strict";l.r(e);var r={},o=l(22),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("nuxt-link",{staticClass:"flex flex-col w-full bg-hover-pastel-yellow",attrs:{to:"/"}},[e("h3",{staticClass:"text-center my-20 font-2 px-5",staticStyle:{"font-size":"2.8rem","font-weight":"100"}},[this._v("Une équipe d'experts à votre écoute")]),this._v(" "),e("div",{staticClass:"mb-12 px-8"},[e("p",{staticClass:"column-gap-1 md:column-count-2"},[this._v("\n      Notre équipe de 34 spécialistes hautement qualifiés — tous diplômés, agréés IPI et polyglottes — se tient à votre disposition et à votre écoute. Toutes les collaborations réussies commencent par une simple rencontre. Alors : voyons-nous, et discutons de votre projet.\n    ")])]),this._v(" "),e("div",{staticClass:"w-2/3 mx-auto mb-24"},[e("div",{staticClass:"relative w-full",staticStyle:{"padding-top":"133.333%"}},[e("div",{staticClass:"absolute top-0 left-0 right-0 bottom-0"},[e("div",{staticClass:"h-full w-full",staticStyle:{"background-size":"cover","background-position":"center center","background-image":"url(https://www.victoire.be/sites/default/files/2020-02/Photo%20Equipe_0.jpg)"}})])])])])}),[],!1,null,null,null);e.default=component.exports},201:function(t,e,l){"use strict";l.r(e);var r={mixins:[{methods:{lerp:function(t,e,l){return t*(1-l)+e*l},percentage:function(a,b,t){return this.clamp((t-a)/(b-a))},clamp:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Math.min(l,Math.max(e,t))}}}],beforeMount:function(){window.addEventListener("scroll",this.scroll)},data:function(){return{windowWidth:null,opacity:{startPos:null,endPos:null,startValue:.3,endValue:.7,currentValue:null},bgUrls:["https://www.victoire.be/sites/default/files/styles/hero/public/whise/3916713/86c34e464291430da2f7c376a3619ff4.jpg?itok=BvR6ZJhe","https://www.victoire.be/sites/default/files/styles/hero/public/whise/3916713/5076a14513654178b51880b484f56d2b.jpg?itok=tt4q4Qon","https://www.victoire.be/sites/default/files/styles/hero/public/whise/4072577/eb8fbd8d3da94fe7b3a1ab1754320541.jpg?itok=Bi6tLs_7"]}},computed:{currentOpacity:function(){return this.opacity.currentValue||this.opacity.startValue},realEstates:function(){return this.$store.getters.realEstateSales},scrollItem:function(){return{y1:this.opacity.startPos,y2:this.opacity.endPos,from:this.opacity.startValue,to:this.opacity.endValue,currentPercent:0}}},methods:{calcMastheadTextPos:function(){var t=document.querySelector("#js-masthead-text");t&&(this.opacity.startPos=t.getBoundingClientRect().top+window.scrollY,this.opacity.endPos=t.getBoundingClientRect().bottom+window.scrollY)},scroll:function(){var t=this;this.windowWidth!==window.innerWidth&&(this.calcMastheadTextPos(),this.windowWidth=window.innerWidth);var e=this.percentage(this.scrollItem.y1,this.scrollItem.y2,window.scrollY);this.scrollItem.currentPercent!==e&&(this.scrollItem.currentPercent=e,window.requestAnimationFrame((function(){var e=t.lerp(t.scrollItem.from,t.scrollItem.to,t.scrollItem.currentPercent);t.opacity.currentValue=e})))}}},o=(l(189),l(22)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("div",{staticClass:"relative "},[l("div",{staticClass:"z-10 relative lg:absolute top-0 left-0 right-0 bottom-0"},[l("div",{staticClass:"container mx-auto"},[l("Nav",{attrs:{id:"js-nav"}}),t._v(" "),l("div",{staticClass:"absolute overflow-hidden text-white"},[l("div",{staticClass:"pb-48 pt-5 ml-5",attrs:{id:"js-masthead-text"}},[l("ArrowLink",[l("h4",{staticClass:"bg-text"},[t._v("Découvrez notre portfolio"),l("br"),t._v("immobilière")])])],1)])],1)]),t._v(" "),l("div",{staticClass:"zn1 lg:absolute left-0 right-0 top-0 bottom-0"},[l("div",{staticClass:"lg:sticky top-0 h-full lg:h-screen bg-gray-200 blend-multiply",style:"min-height:500px;background-size:cover;background-position:center center;background-image: url("+t.bgUrls[0]+");"}),t._v(" "),l("div",{staticClass:"bg-overlay bg-black absolute top-0 left-0 right-0 bottom-0",style:"opacity:"+t.currentOpacity})]),t._v(" "),l("div",{staticClass:"hidden lg:block h-screen"}),t._v(" "),l("LeftSticky",{attrs:{id:"js-below-masthead",realEstates:t.realEstates}})],1),t._v(" "),l("Fullscreen",{attrs:{bgUrl:t.bgUrls[1]}},[l("ArrowLink",[l("h4",{staticClass:"bg-text"},[t._v("Parcourir notre biens immobiliers"),l("br"),t._v(" à vendre")])])],1),t._v(" "),l("div",{staticClass:"relative"},[l("div",{staticClass:"hidden lg:block absolute top-0 left-0  bottom-0 w-1/2 bg-gold"}),t._v(" "),l("div",{staticClass:"hidden lg:block absolute top-0 right-0 bottom-0 w-1/2 bg-gray"}),t._v(" "),l("div",{staticClass:"relative container mx-auto"},[l("div",{staticClass:"flex flex-col lg:items-center lg:flex-row"},[t._m(0),t._v(" "),l("div",{staticClass:"w-full mx-auto text-white bg-gray lg:bg-transparent"},[l("div",{staticClass:"px-10 lg:px-16 xl:px-32 my-32"},[l("nuxt-link",{staticClass:"inline-block",attrs:{to:"/"}},[l("h4",{staticClass:"bg-text mb-8"},[t._v("Évaluation immobilière")]),t._v(" "),l("button",{staticClass:"bg-primary hover:bg-red-700 text-white font-bold py-3 px-6"},[t._v("\n                En savoir plus\n              ")])])],1)])])])]),t._v(" "),l("Fullscreen",{attrs:{bgUrl:t.bgUrls[2]}},[l("ArrowLink",[l("h4",{staticClass:"bg-text"},[t._v("Trouver un bien"),l("br"),t._v(" à louer")])])],1),t._v(" "),l("footer",{staticClass:"relative bg-gray py-8 md:py-10 text-white"},[l("div",{staticClass:"flex flex-wrap container mx-auto uppercase"},[t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),l("div",{staticClass:"w-full md:w-1/2 mb-12 lg:w-1/4 px-6 pt-8 border-t lg:border-t-0 border-light-grey lg:pt-0"},[l("div",{staticClass:"font-bold"},[t._v("SUIVEZ NOUS")]),t._v(" "),l("div",{staticClass:"md:block"},[t._v("—")]),t._v(" "),l("nuxt-link",{staticClass:"block",attrs:{to:"/"}},[t._v("\n          Instagram\n        ")]),t._v(" "),l("nuxt-link",{staticClass:"block",attrs:{to:"/"}},[t._v("\n          Facebook\n        ")]),t._v(" "),l("nuxt-link",{staticClass:"block",attrs:{to:"/"}},[t._v("\n          Twitter\n        ")])],1)])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full mx-auto text-white bg-gold lg:bg-transparent"},[e("div",{staticClass:"px-10 lg:px-16 xl:px-32 my-32"},[e("h4",{staticClass:"bg-text mb-8"},[this._v("Abonnez-vous à la newsletter")]),this._v(" "),e("input",{staticClass:"mb-3 appearance-none w-full py-5 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"username",type:"email",placeholder:"Votre adresse email"}}),this._v(" "),e("button",{staticClass:"bg-primary hover:bg-red-700 text-white font-bold py-3 px-6"},[this._v("\n              OK\n            ")])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"w-full md:w-1/2 mb-12 lg:w-1/4 px-6 pt-8 border-t lg:border-t-0 border-light-grey lg:pt-0"},[l("div",{staticClass:"font-bold"},[t._v("BUREAU UCCLE")]),t._v(" "),l("div",{staticClass:"md:block"},[t._v("—")]),t._v(" "),l("p",[t._v("Chaussée de Waterloo"),l("br"),t._v("1382 - 1180"),l("br"),t._v("Uccle")]),t._v(" "),l("div",{staticClass:"mt-5"},[l("p",[t._v("Vente: "),l("span",{staticClass:"whitespace-no-wrap"},[t._v("+32 (0)2 375 10 00")])]),t._v(" "),l("p",[t._v("Location: "),l("span",{staticClass:"whitespace-no-wrap"},[t._v("+32 (0)2 375 10 20")])]),t._v(" "),l("p",[t._v("Neuf: "),l("span",{staticClass:"whitespace-no-wrap"},[t._v("+32 (0)2 375 10 10")])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"w-full md:w-1/2 mb-12 lg:w-1/4 px-6 pt-8 border-t lg:border-t-0 border-light-grey lg:pt-0"},[l("div",{staticClass:"font-bold"},[t._v("BUREAU WOLUWE")]),t._v(" "),l("div",{staticClass:"md:block"},[t._v("—")]),t._v(" "),l("p",[t._v("Avenue de Tervueren"),l("br"),t._v("418 - 1150"),l("br"),t._v("Woluwe-St-Pierre")]),t._v(" "),l("div",{staticClass:"mt-5"},[l("p",[t._v("Vente: "),l("span",{staticClass:"whitespace-no-wrap"},[t._v("+32 (0)2 772 15 30")])]),t._v(" "),l("p",[t._v("Location: "),l("span",{staticClass:"whitespace-no-wrap"},[t._v("+32 (0)2 771 12 40")])]),t._v(" "),l("p",[t._v("Neuf: "),l("span",{staticClass:"whitespace-no-wrap"},[t._v("+32 (0)2 777 15 10")])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"w-full md:w-1/2 mb-12 lg:w-1/4 px-6 pt-8 border-t lg:border-t-0 border-light-grey lg:pt-0 "},[l("div",{staticClass:"font-bold"},[t._v("HORAIRES D'OUVERTURES")]),t._v(" "),l("div",{staticClass:"md:block"},[t._v("—")]),t._v(" "),l("p",[t._v("lundi au vendredi:"),l("br"),t._v("9h — 18h")]),t._v(" "),l("p",[t._v("samedi:"),l("br"),t._v("10h — 13h (à Uccle)")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Nav:l(195).default,ArrowLink:l(196).default,LeftSticky:l(197).default,Fullscreen:l(198).default})}}]);
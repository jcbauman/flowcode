(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{10:function(e,t,a){e.exports={flowExplorer:"flowPageExplorer_flowExplorer__1SpId",filterContainer:"flowPageExplorer_filterContainer__1A6oB",filterButton:"flowPageExplorer_filterButton__3Wmqp",filterButtonSelected:"flowPageExplorer_filterButtonSelected__w9lH1",pageContainer:"flowPageExplorer_pageContainer__23xjY"}},21:function(e,t,a){e.exports=a(33)},26:function(e,t,a){},27:function(e,t,a){},3:function(e,t,a){e.exports={expandedPage:"flowPageExpanded_expandedPage__3x3qb",linkItem:"flowPageExpanded_linkItem__1Pfqn",linkIconImage:"flowPageExpanded_linkIconImage__1P4BH",linkText:"flowPageExpanded_linkText__1K28v",profileImage:"flowPageExpanded_profileImage__OKak-",profileImageCircle:"flowPageExpanded_profileImageCircle__atk0u",profileImageSquare:"flowPageExpanded_profileImageSquare__ppGWU",textDark:"flowPageExpanded_textDark__14s5n",textLight:"flowPageExpanded_textLight__3S317",linkItemDark:"flowPageExpanded_linkItemDark__Wzj9L",linkItemLight:"flowPageExpanded_linkItemLight__1oEAs",shareButton:"flowPageExpanded_shareButton__2HbBi",shareButtonText:"flowPageExpanded_shareButtonText__18ain",shareButtonCopied:"flowPageExpanded_shareButtonCopied__29hRL"}},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),o=a.n(l),i=(a(26),a(7)),c=a(1),s=a(12),m=(a(27),function(e){if(e)return{backgroundColor:e.backgroundColor}}),g=[{title:"All",filterString:""},{title:"Writers",filterString:"writer"},{title:"Athletes",filterString:"athlete"},{title:"Influencers",filterString:"influencer"}],f=function(e){var t,a,n=e.backgroundColor,r=n.substring(4,n.length-1).replace(/ /g,"").split(","),l=parseFloat(r[0])/255,o=parseFloat(r[1])/255,i=parseFloat(r[2])/255,c=Math.max(l,o,i),s=Math.min(l,o,i),m=(c+s)/2;if(c===s)t=a=0;else{var g=c-s;switch(a=m>.5?g/(2-c-s):g/(c+s),c){case l:t=(o-i)/g+(o<i?6:0);break;case o:t=(i-l)/g+2;break;case i:t=(l-o)/g+4}t&&(t/=6)}return{hue:t,saturation:a,lightness:m}},u=a(9),p=a.n(u);function d(e){var t=(e.page||{pages:[]}).pages[0]||{};return r.a.createElement(s.b,{to:"".concat("/flowcode","/").concat(t.slugName),className:p.a.cardContainer,style:m(t.theme)},r.a.createElement("h4",{className:f(t.theme).lightness>.6?p.a.textDark:p.a.textLight},t.displayName),r.a.createElement("img",{className:"".concat(p.a.profileImage," ").concat("circle"===t.theme.profileImageShapeType?p.a.profileImageCircle:p.a.profileImageSquare),src:t.profileImage,alt:"".concat(t.displayName,"'s Profile")}))}var h=a(10),_=a.n(h);function x(e){var t,a=e.trendingPages,l=Object(n.useState)(""),o=Object(i.a)(l,2),c=o[0],s=o[1];return r.a.createElement("div",{className:_.a.flowExplorer},r.a.createElement("div",{className:_.a.filterContainer},g.map((function(e){return r.a.createElement("p",{className:"".concat(_.a.filterButton," ").concat(c===e.filterString?_.a.filterButtonSelected:""),onClick:function(){return s(e.filterString)}},e.title)}))),r.a.createElement("div",{className:_.a.pageContainer},(t=c,""===t?a:a.filter((function(e){return e.category===t}))).map((function(e){return r.a.createElement(d,{page:e})}))))}var E=a(3),w=a.n(E);function k(e){var t=e.slug,a=e.trendingPages,l=Object(n.useState)(!1),o=Object(i.a)(l,2),c=o[0],s=o[1],g=a.filter((function(e){return"/"+e.pages[0].slugName===t})),u=g[0]?g[0].pages[0]:void 0;return Object(n.useEffect)((function(){c&&setTimeout((function(){s(!1)}),1200)}),[c]),u?r.a.createElement("div",{className:w.a.expandedPage,style:m(u.theme)},r.a.createElement("h2",{className:f(u.theme).lightness>.6?w.a.textDark:w.a.textLight},u.displayName),r.a.createElement("img",{className:"".concat(w.a.profileImage," ").concat("circle"===u.theme.profileImageShapeType?w.a.profileImageCircle:w.a.profileImageSquare),src:u.profileImage,alt:"".concat(u.displayName,"'s Profile")}),r.a.createElement("h5",{className:f(u.theme).lightness>.6?w.a.textDark:w.a.textLight},u.caption||""),u.share?r.a.createElement("div",{className:c?w.a.shareButtonCopied:w.a.shareButton,onClick:function(){return function(){var e=document.createElement("input");e.setAttribute("value",(u||{shortUrl:""}).shortUrl),document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),s(!0)}()}},r.a.createElement("p",{className:w.a.shareButtonText},c?"Copied!":"Share")):"",u.links.map((function(e){return r.a.createElement("div",{className:"".concat(w.a.linkItem," ").concat(f(u.theme).lightness>.6?w.a.linkItemDark:w.a.linkItemLight),onClick:function(){return window.open(e.actionData.link,"_blank")}},e.thumbNailImgUrl?r.a.createElement("img",{className:w.a.linkIconImage,src:e.thumbNailImgUrl,alt:""}):"",r.a.createElement("h5",{className:w.a.linkText},e.title))}))):r.a.createElement("div",{className:w.a.expandedPage},r.a.createElement("h3",null,"Loading..."))}var I=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)([]),m=Object(i.a)(o,2),g=m[0],f=m[1];return Object(n.useEffect)((function(){fetch("https://dtxsharedprodcdn2.blob.core.windows.net/random/flowpages-mock-data.json").then((function(e){return e.json()})).then((function(e){return l((e||{pages:[]}).pages)})).catch((function(e){return console.log(e)}))}),[]),Object(n.useEffect)((function(){var e=a.map((function(e){return"/flowcode/"+e.pages[0].slugName}));f(e)}),[a]),r.a.createElement(s.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/flowcode/",exact:!0,render:function(){return r.a.createElement(x,{trendingPages:a})}}),"} />",r.a.createElement(c.a,{path:g,render:function(){return r.a.createElement(k,{slug:window.location.pathname,trendingPages:a})}})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports={cardContainer:"flowPage_cardContainer__16uLH",profileImage:"flowPage_profileImage__2uZ5G",profileImageCircle:"flowPage_profileImageCircle__UtLQI",profileImageSquare:"flowPage_profileImageSquare__1wUAh",textDark:"flowPage_textDark__1h7BY",textLight:"flowPage_textLight__1hKwP"}}},[[21,1,2]]]);
//# sourceMappingURL=main.1de6b697.chunk.js.map
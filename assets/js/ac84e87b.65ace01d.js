"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7303],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),p=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(o.Provider,{value:n},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=p(t),u=i,m=f["".concat(o,".").concat(u)]||f[u]||d[u]||a;return t?r.createElement(m,c(c({ref:n},s),{},{components:t})):r.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,c=new Array(a);c[0]=u;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[f]="string"==typeof e?e:i,c[1]=l;for(var p=2;p<a;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6058:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(7462),i=(t(7294),t(3905));const a={id:"IHIArenaReport",title:"Interface: IHIArenaReport",sidebar_label:"IHIArenaReport",sidebar_position:0,custom_edit_url:null},c=void 0,l={unversionedId:"api/interfaces/IHIArenaReport",id:"api/interfaces/IHIArenaReport",title:"Interface: IHIArenaReport",description:"Properties",source:"@site/docs/api/interfaces/IHIArenaReport.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/IHIArenaReport",permalink:"/michos-api/docs/api/interfaces/IHIArenaReport",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"IHIArenaReport",title:"Interface: IHIArenaReport",sidebar_label:"IHIArenaReport",sidebar_position:0,custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"IHIArena",permalink:"/michos-api/docs/api/interfaces/IHIArena"},next:{title:"IHIAvatar",permalink:"/michos-api/docs/api/interfaces/IHIAvatar"}},o={},p=[{value:"Properties",id:"properties",level:2},{value:"area",id:"area",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"battle_infos",id:"battle_infos",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"rank",id:"rank",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"ranking_percentage",id:"ranking_percentage",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"score",id:"score",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"time_second",id:"time_second",level:3},{value:"Defined in",id:"defined-in-5",level:4}],s={toc:p},f="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(f,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"area"},"area"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"area"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vanlinh1602/michos-api/blob/cfc97fe/src/client/hi/record/interfaces/arena.interface.ts#L11"},"src/client/hi/record/interfaces/arena.interface.ts:11")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"battle_infos"},"battle","_","infos"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"battle","_","infos"),": ",(0,i.kt)("a",{parentName:"p",href:"/michos-api/docs/api/interfaces/BattleInfo"},(0,i.kt)("inlineCode",{parentName:"a"},"BattleInfo")),"[]"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vanlinh1602/michos-api/blob/cfc97fe/src/client/hi/record/interfaces/arena.interface.ts#L12"},"src/client/hi/record/interfaces/arena.interface.ts:12")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"rank"},"rank"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"rank"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vanlinh1602/michos-api/blob/cfc97fe/src/client/hi/record/interfaces/arena.interface.ts#L9"},"src/client/hi/record/interfaces/arena.interface.ts:9")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"ranking_percentage"},"ranking","_","percentage"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"ranking","_","percentage"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vanlinh1602/michos-api/blob/cfc97fe/src/client/hi/record/interfaces/arena.interface.ts#L10"},"src/client/hi/record/interfaces/arena.interface.ts:10")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"score"},"score"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"score"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vanlinh1602/michos-api/blob/cfc97fe/src/client/hi/record/interfaces/arena.interface.ts#L8"},"src/client/hi/record/interfaces/arena.interface.ts:8")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"time_second"},"time","_","second"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"time","_","second"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vanlinh1602/michos-api/blob/cfc97fe/src/client/hi/record/interfaces/arena.interface.ts#L13"},"src/client/hi/record/interfaces/arena.interface.ts:13")))}d.isMDXComponent=!0}}]);
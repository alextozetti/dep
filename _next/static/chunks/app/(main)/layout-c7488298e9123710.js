(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4095],{2548:function(e,i,t){Promise.resolve().then(t.bind(t,2984))},2984:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return w}});var l=t(9268),a=t(465),o=t(6006),n=t(5942),s=t(8671),r=()=>{let{layoutConfig:e}=(0,o.useContext)(s.V);return(0,l.jsxs)("div",{className:"layout-footer",children:[(0,l.jsx)("img",{src:"/layout/images/logo-".concat("light"===e.colorScheme?"dark":"white",".svg"),alt:"Logo",height:"20",className:"mr-2"}),"by",(0,l.jsx)("span",{className:"font-medium ml-2",children:"PrimeReact"})]})},c=t(5846),u=t.n(c),p=t(9347),m=t(562);let b=(0,o.createContext)({}),d=e=>{let{children:i}=e,[t,a]=(0,o.useState)("");return(0,l.jsx)(b.Provider,{value:{activeMenu:t,setActiveMenu:a},children:i})};var f=t(6008);let k=e=>{let i=(0,f.usePathname)(),t=(0,f.useSearchParams)(),{activeMenu:a,setActiveMenu:s}=(0,o.useContext)(b),r=e.item,c=e.parentKey?e.parentKey+"-"+e.index:String(e.index),d=r.to&&i===r.to,v=a===c||a.startsWith(c+"-"),x=e=>{r.to&&r.to===e&&s(c)};(0,o.useEffect)(()=>{x(i)},[i,t]);let h=i=>{if(r.disabled){i.preventDefault();return}r.command&&r.command({originalEvent:i,item:r}),r.items?s(v?e.parentKey:c):s(c)},g=r.items&&!1!==r.visible&&(0,l.jsx)(m.Z,{timeout:{enter:1e3,exit:450},classNames:"layout-submenu",in:!!e.root||v,children:(0,l.jsx)("ul",{children:r.items.map((e,i)=>(0,l.jsx)(k,{item:e,index:i,className:e.badgeClass,parentKey:c},e.label))})},r.label);return(0,l.jsxs)("li",{className:(0,n.AK)({"layout-root-menuitem":e.root,"active-menuitem":v}),children:[e.root&&!1!==r.visible&&(0,l.jsx)("div",{className:"layout-menuitem-root-text",children:r.label}),(!r.to||r.items)&&!1!==r.visible?(0,l.jsxs)("a",{href:r.url,onClick:e=>h(e),className:(0,n.AK)(r.class,"p-ripple"),target:r.target,tabIndex:0,children:[(0,l.jsx)("i",{className:(0,n.AK)("layout-menuitem-icon",r.icon)}),(0,l.jsx)("span",{className:"layout-menuitem-text",children:r.label}),r.items&&(0,l.jsx)("i",{className:"pi pi-fw pi-angle-down layout-submenu-toggler"}),(0,l.jsx)(p.H,{})]}):null,r.to&&!r.items&&!1!==r.visible?(0,l.jsxs)(u(),{href:r.to,replace:r.replaceUrl,target:r.target,onClick:e=>h(e),className:(0,n.AK)(r.class,"p-ripple",{"active-route":d}),tabIndex:0,children:[(0,l.jsx)("i",{className:(0,n.AK)("layout-menuitem-icon",r.icon)}),(0,l.jsx)("span",{className:"layout-menuitem-text",children:r.label}),r.items&&(0,l.jsx)("i",{className:"pi pi-fw pi-angle-down layout-submenu-toggler"}),(0,l.jsx)(p.H,{})]}):null,g]})};var v=()=>{let{layoutConfig:e}=(0,o.useContext)(s.V);return(0,l.jsx)(d,{children:(0,l.jsxs)("ul",{className:"layout-menu",children:[[{label:"Home",items:[{label:"Dashboard",icon:"pi pi-fw pi-home",to:"/"}]},{label:"UI Components",items:[{label:"Form Layout",icon:"pi pi-fw pi-id-card",to:"/uikit/formlayout"},{label:"Input",icon:"pi pi-fw pi-check-square",to:"/uikit/input"},{label:"Float Label",icon:"pi pi-fw pi-bookmark",to:"/uikit/floatlabel"},{label:"Invalid State",icon:"pi pi-fw pi-exclamation-circle",to:"/uikit/invalidstate"},{label:"Button",icon:"pi pi-fw pi-mobile",to:"/uikit/button",class:"rotated-icon"},{label:"Table",icon:"pi pi-fw pi-table",to:"/uikit/table"},{label:"List",icon:"pi pi-fw pi-list",to:"/uikit/list"},{label:"Tree",icon:"pi pi-fw pi-share-alt",to:"/uikit/tree"},{label:"Panel",icon:"pi pi-fw pi-tablet",to:"/uikit/panel"},{label:"Overlay",icon:"pi pi-fw pi-clone",to:"/uikit/overlay"},{label:"Media",icon:"pi pi-fw pi-image",to:"/uikit/media"},{label:"Menu",icon:"pi pi-fw pi-bars",to:"/uikit/menu",preventExact:!0},{label:"Message",icon:"pi pi-fw pi-comment",to:"/uikit/message"},{label:"File",icon:"pi pi-fw pi-file",to:"/uikit/file"},{label:"Chart",icon:"pi pi-fw pi-chart-bar",to:"/uikit/charts"},{label:"Misc",icon:"pi pi-fw pi-circle",to:"/uikit/misc"}]},{label:"Prime Blocks",items:[{label:"Free Blocks",icon:"pi pi-fw pi-eye",to:"/blocks",badge:"NEW"},{label:"All Blocks",icon:"pi pi-fw pi-globe",url:"https://blocks.primereact.org",target:"_blank"}]},{label:"Utilities",items:[{label:"PrimeIcons",icon:"pi pi-fw pi-prime",to:"/utilities/icons"},{label:"PrimeFlex",icon:"pi pi-fw pi-desktop",url:"https://primeflex.org/",target:"_blank"}]},{label:"Pages",icon:"pi pi-fw pi-briefcase",to:"/pages",items:[{label:"Landing",icon:"pi pi-fw pi-globe",to:"/landing"},{label:"Auth",icon:"pi pi-fw pi-user",items:[{label:"Login",icon:"pi pi-fw pi-sign-in",to:"/auth/login"},{label:"Error",icon:"pi pi-fw pi-times-circle",to:"/auth/error"},{label:"Access Denied",icon:"pi pi-fw pi-lock",to:"/auth/access"}]},{label:"Crud",icon:"pi pi-fw pi-pencil",to:"/pages/crud"},{label:"Timeline",icon:"pi pi-fw pi-calendar",to:"/pages/timeline"},{label:"Not Found",icon:"pi pi-fw pi-exclamation-circle",to:"/pages/notfound"},{label:"Empty",icon:"pi pi-fw pi-circle-off",to:"/pages/empty"}]},{label:"Hierarchy",items:[{label:"Submenu 1",icon:"pi pi-fw pi-bookmark",items:[{label:"Submenu 1.1",icon:"pi pi-fw pi-bookmark",items:[{label:"Submenu 1.1.1",icon:"pi pi-fw pi-bookmark"},{label:"Submenu 1.1.2",icon:"pi pi-fw pi-bookmark"},{label:"Submenu 1.1.3",icon:"pi pi-fw pi-bookmark"}]},{label:"Submenu 1.2",icon:"pi pi-fw pi-bookmark",items:[{label:"Submenu 1.2.1",icon:"pi pi-fw pi-bookmark"}]}]},{label:"Submenu 2",icon:"pi pi-fw pi-bookmark",items:[{label:"Submenu 2.1",icon:"pi pi-fw pi-bookmark",items:[{label:"Submenu 2.1.1",icon:"pi pi-fw pi-bookmark"},{label:"Submenu 2.1.2",icon:"pi pi-fw pi-bookmark"}]},{label:"Submenu 2.2",icon:"pi pi-fw pi-bookmark",items:[{label:"Submenu 2.2.1",icon:"pi pi-fw pi-bookmark"}]}]}]},{label:"Get Started",items:[{label:"Documentation",icon:"pi pi-fw pi-question",to:"/documentation"},{label:"Figma",url:"https://www.dropbox.com/scl/fi/bhfwymnk8wu0g5530ceas/sakai-2023.fig?rlkey=u0c8n6xgn44db9t4zkd1brr3l&dl=0",icon:"pi pi-fw pi-pencil",target:"_blank"},{label:"View Source",icon:"pi pi-fw pi-search",url:"https://github.com/primefaces/sakai-react",target:"_blank"}]}].map((e,i)=>(null==e?void 0:e.seperator)?(0,l.jsx)("li",{className:"menu-separator"}):(0,l.jsx)(k,{item:e,root:!0,index:i},e.label)),(0,l.jsx)(u(),{href:"https://blocks.primereact.org",target:"_blank",style:{cursor:"pointer"},children:(0,l.jsx)("img",{alt:"Prime Blocks",className:"w-full mt-3",src:"/layout/images/banner-primeblocks".concat("light"===e.colorScheme?"":"-dark",".png")})})]})})},x=()=>(0,l.jsx)(v,{});let h=(0,o.forwardRef)((e,i)=>{let{layoutConfig:t,layoutState:a,onMenuToggle:r,showProfileSidebar:c}=(0,o.useContext)(s.V),p=(0,o.useRef)(null),m=(0,o.useRef)(null),b=(0,o.useRef)(null);return(0,o.useImperativeHandle)(i,()=>({menubutton:p.current,topbarmenu:m.current,topbarmenubutton:b.current})),(0,l.jsxs)("div",{className:"layout-topbar",children:[(0,l.jsxs)(u(),{href:"/",className:"layout-topbar-logo",children:[(0,l.jsx)("img",{src:"/layout/images/logo-".concat("light"!==t.colorScheme?"white":"dark",".svg"),width:"47.22px",height:"35px",alt:"logo"}),(0,l.jsx)("span",{children:"SAKAI"})]}),(0,l.jsx)("button",{ref:p,type:"button",className:"p-link layout-menu-button layout-topbar-button",onClick:r,children:(0,l.jsx)("i",{className:"pi pi-bars"})}),(0,l.jsx)("button",{ref:b,type:"button",className:"p-link layout-topbar-menu-button layout-topbar-button",onClick:c,children:(0,l.jsx)("i",{className:"pi pi-ellipsis-v"})}),(0,l.jsxs)("div",{ref:m,className:(0,n.AK)("layout-topbar-menu",{"layout-topbar-menu-mobile-active":a.profileSidebarVisible}),children:[(0,l.jsxs)("button",{type:"button",className:"p-link layout-topbar-button",children:[(0,l.jsx)("i",{className:"pi pi-calendar"}),(0,l.jsx)("span",{children:"Calendar"})]}),(0,l.jsxs)("button",{type:"button",className:"p-link layout-topbar-button",children:[(0,l.jsx)("i",{className:"pi pi-user"}),(0,l.jsx)("span",{children:"Profile"})]}),(0,l.jsx)(u(),{href:"/documentation",children:(0,l.jsxs)("button",{type:"button",className:"p-link layout-topbar-button",children:[(0,l.jsx)("i",{className:"pi pi-cog"}),(0,l.jsx)("span",{children:"Settings"})]})})]})]})});h.displayName="AppTopbar";var g=t(3045),y=t(3142),w=e=>{let{children:i}=e,{layoutConfig:t,layoutState:c,setLayoutState:u}=(0,o.useContext)(s.V),{setRipple:p}=(0,o.useContext)(y.Ou),m=(0,o.useRef)(null),b=(0,o.useRef)(null),[d,k]=(0,a.OR)({type:"click",listener:e=>{var i,t,l,a,o,n;let s=!((null===(i=b.current)||void 0===i?void 0:i.isSameNode(e.target))||(null===(t=b.current)||void 0===t?void 0:t.contains(e.target))||(null===(a=m.current)||void 0===a?void 0:null===(l=a.menubutton)||void 0===l?void 0:l.isSameNode(e.target))||(null===(n=m.current)||void 0===n?void 0:null===(o=n.menubutton)||void 0===o?void 0:o.contains(e.target)));s&&S()}}),v=(0,f.usePathname)(),w=(0,f.useSearchParams)();(0,o.useEffect)(()=>{S(),A()},[v,w]);let[j,N]=(0,a.OR)({type:"click",listener:e=>{var i,t,l,a,o,n,s,r;let c=!((null===(t=m.current)||void 0===t?void 0:null===(i=t.topbarmenu)||void 0===i?void 0:i.isSameNode(e.target))||(null===(a=m.current)||void 0===a?void 0:null===(l=a.topbarmenu)||void 0===l?void 0:l.contains(e.target))||(null===(n=m.current)||void 0===n?void 0:null===(o=n.topbarmenubutton)||void 0===o?void 0:o.isSameNode(e.target))||(null===(r=m.current)||void 0===r?void 0:null===(s=r.topbarmenubutton)||void 0===s?void 0:s.contains(e.target)));c&&A()}}),S=()=>{u(e=>({...e,overlayMenuActive:!1,staticMenuMobileActive:!1,menuHoverActive:!1})),k(),C()},A=()=>{u(e=>({...e,profileSidebarVisible:!1})),N()},M=()=>{document.body.classList?document.body.classList.add("blocked-scroll"):document.body.className+=" blocked-scroll"},C=()=>{document.body.classList?document.body.classList.remove("blocked-scroll"):document.body.className=document.body.className.replace(RegExp("(^|\\b)"+"blocked-scroll".split(" ").join("|")+"(\\b|$)","gi")," ")};(0,o.useEffect)(()=>{(c.overlayMenuActive||c.staticMenuMobileActive)&&d(),c.staticMenuMobileActive&&M()},[c.overlayMenuActive,c.staticMenuMobileActive]),(0,o.useEffect)(()=>{c.profileSidebarVisible&&j()},[c.profileSidebarVisible]),(0,a.zq)(()=>{k(),N()});let P=(0,n.AK)("layout-wrapper",{"layout-overlay":"overlay"===t.menuMode,"layout-static":"static"===t.menuMode,"layout-static-inactive":c.staticMenuDesktopInactive&&"static"===t.menuMode,"layout-overlay-active":c.overlayMenuActive,"layout-mobile-active":c.staticMenuMobileActive,"p-input-filled":"filled"===t.inputStyle,"p-ripple-disabled":!t.ripple});return(0,l.jsx)(o.Fragment,{children:(0,l.jsxs)("div",{className:P,children:[(0,l.jsx)(h,{ref:m}),(0,l.jsx)("div",{ref:b,className:"layout-sidebar",children:(0,l.jsx)(x,{})}),(0,l.jsxs)("div",{className:"layout-main-container",children:[(0,l.jsx)("div",{className:"layout-main",children:i}),(0,l.jsx)(r,{})]}),(0,l.jsx)(g.default,{}),(0,l.jsx)("div",{className:"layout-mask"})]})})}},5846:function(e,i,t){e.exports=t(7477)},6008:function(e,i,t){e.exports=t(794)}},function(e){e.O(0,[434,6878,9424,543,8285,7477,5066,5594,3542,9253,5769,1744],function(){return e(e.s=2548)}),_N_E=e.O()}]);
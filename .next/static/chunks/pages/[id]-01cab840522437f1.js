(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[112],{5222:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[id]",function(){return n(6577)}])},3858:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(5893),i=n(8420),a=n(5313);function c(e){var t=e.dateString,n=e.title,c=(0,i.Z)(t);try{(0,a.Z)(c,"dd MMM yyyy")}catch(o){console.log(c),console.log(t),console.log(n)}return(0,r.jsx)("time",{dateTime:t,children:(0,a.Z)(c,"dd MMM yyyy")})}},6162:function(e,t,n){"use strict";n.d(t,{Z:function(){return S},y:function(){return I}});var r,i=n(4924),a=n(5893),c=n(9008),o=n.n(c),s=n(5675),l=n.n(s),g=n(8721),u=n.n(g),d=n(5794),h=n.n(d),_=n(4628),m=n.n(_),x=n(3897),f=n.n(x),p=n(1664),v=n.n(p),k=n(4571),j=n.n(k),w=n(4184),y=n.n(w),b=function(e){var t=e.onDarkmodeToggle,n=e.isDarkMode,r=function(){t(!n)},c=y()(j().toggle,(0,i.Z)({},j().toggleChecked,n));return(0,a.jsxs)("div",{onClick:r,className:c,children:[(0,a.jsxs)("div",{className:j().toggleContainer,children:[(0,a.jsx)("div",{className:j().toggleCheck,children:(0,a.jsx)("span",{children:"\ud83c\udf1c"})}),(0,a.jsx)("div",{className:j().toggleUncheck,children:(0,a.jsx)("span",{children:"\ud83c\udf1e"})})]}),(0,a.jsx)("div",{className:j().toggleCircle}),(0,a.jsx)("input",{onChange:r,type:"checkbox","aria-label":"Toggle Button",className:j().toggleInput})]})},C=n(7294),T="Luculent Lollygag",I="Reyan Blog",N="dark",H="light",M="theme",Z=(r={},(0,i.Z)(r,N,m()),(0,i.Z)(r,H,f()),r);function S(e){var t=e.children,n=e.home,r=(0,C.useState)(H),i=r[0],c=r[1];(0,C.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)").matches?N:H,t=window.localStorage.getItem(M)||e;c(t)}),[]);var s=Z[i];return(0,a.jsx)("div",{className:s.themeWrapper,children:(0,a.jsxs)("div",{className:"".concat(u().container),children:[(0,a.jsxs)(o(),{children:[(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,a.jsx)("meta",{name:"description",content:"Blog about software engineering, management, and other interesting thoughts"}),(0,a.jsx)("meta",{name:"og:title",content:I})]}),(0,a.jsx)(b,{onDarkmodeToggle:function(){var e=i===N?H:N;c(e),window.localStorage.setItem(M,e)},isDarkMode:i===N}),(0,a.jsx)("header",{className:u().header,children:n?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l(),{priority:!0,src:"/images/reyan.png",className:h().borderCircle,height:300,width:300,alt:T}),(0,a.jsx)("h1",{className:h().heading2Xl,children:T}),(0,a.jsx)("p",{className:h().lightText,children:"A blog by Dan Uhl"})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(v(),{href:"/",children:(0,a.jsx)("a",{children:(0,a.jsx)(l(),{priority:!0,src:"/images/scene.jpeg",className:h().borderCircle,height:108,width:108,alt:T})})}),(0,a.jsx)("h2",{className:h().headingLg,children:(0,a.jsx)(v(),{href:"/",children:(0,a.jsx)("a",{className:h().colorInherit,children:T})})})]})}),(0,a.jsx)("main",{children:t({theme:s})}),!n&&(0,a.jsx)("div",{className:u().backToHome,children:(0,a.jsx)(v(),{href:"/",children:(0,a.jsx)("a",{children:"\u2190 Back to home"})})})]})})}},4738:function(e,t,n){"use strict";n.d(t,{Qr:function(){return s},g4:function(){return g},y8:function(){return u}});var r=n(7568),i=n(4051),a=n.n(i),c=(0,n(5360).eI)("https://iyvwqamzwsuiekomctrp.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0NDI3Njk1MywiZXhwIjoxOTU5ODUyOTUzfQ.7XYYmauqXCCa-xm43vYbxAfV6qdaLlBv2_Pv6oMo5TI"),o="page_data",s=function(){var e=(0,r.Z)(a().mark((function e(){var t,n,r,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.from(o).select("*");case 2:return t=e.sent,n=t.data,r=t.error,i=n.reduce((function(e,t){var n=t.id,r=t.view_count,i=t.like_count;return e[n]={views:r,likes:i},e}),{}),r&&console.error("getAllPageViews: ".concat(r)),e.abrupt("return",i);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.from(o).insert([{id:t,view_count:0,like_count:0}]);case 2:return n=e.sent,r=n.data,(i=n.error)&&console.error("getAllPageViews: ".concat(i)),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s();case 2:if(e.sent[t]){e.next=6;break}return e.next=6,l(t);case 6:return console.log("incrementing ".concat(t)),e.next=9,c.rpc("incrementviews",{page_id:t});case 9:return n=e.sent,r=n.data,(i=n.error)&&console.error("getAllPageViews: ".concat(i)),e.abrupt("return",r);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s();case 2:if(e.sent[t]){e.next=6;break}return e.next=6,l(t);case 6:return console.log("incrementing ".concat(t)),e.next=9,c.rpc("incrementlikes",{page_id:t});case 9:return n=e.sent,r=n.data,(i=n.error)&&console.error("getAllPageViews: ".concat(i)),e.abrupt("return",r);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},6577:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return m},default:function(){return x}});var r=n(5893),i=n(6162),a=n(9008),c=n.n(a),o=n(3858),s=n(5794),l=n.n(s),g=n(4738),u=n(7294),d={fontSize:"1.4em",background:"none",border:"none",cursor:"pointer"},h="\ud83d\udc4d",_="\ud83d\udc96",m=!0;function x(e){var t=e.postData,n=(0,u.useState)(h),a=n[0],s=n[1];(0,u.useEffect)((function(){(0,g.g4)(t.id),window.localStorage.getItem(t.id)&&s(_)}),[]);var m=function(){window.localStorage.getItem(t.id)||(window.localStorage.setItem(t.id,"liked"),s(_),(0,g.y8)(t.id))};return(0,r.jsx)(i.Z,{children:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c(),{children:(0,r.jsx)("title",{children:t.title})}),(0,r.jsxs)("article",{children:[(0,r.jsx)("h1",{className:l().headingXl,children:t.title}),(0,r.jsx)("div",{className:l().lightText,children:(0,r.jsx)(o.Z,{dateString:t.date})}),(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:t.contentHtml}})]}),(0,r.jsx)("button",{onClick:m,style:d,children:a})]})}})}},8721:function(e){e.exports={outerContainer:"layout_outerContainer__ExiGH",container:"layout_container__fbLkO",header:"layout_header__kY0Lt",backToHome:"layout_backToHome__9sjx_"}},4571:function(e){e.exports={toggle:"toggle_toggle__dvuTg",toggleInput:"toggle_toggleInput___RU7f",toggleCheck:"toggle_toggleCheck__xUj3r",toggleUncheck:"toggle_toggleUncheck__VtG_u",toggleContainer:"toggle_toggleContainer__K3RPH",toggleCircle:"toggle_toggleCircle__42TBJ",toggleChecked:"toggle_toggleChecked__WEX0E"}},4628:function(e){e.exports={themeWrapper:"theme-dark_themeWrapper__Kp4gF",tabHeading:"theme-dark_tabHeading__uiGkI",activeTabHeading:"theme-dark_activeTabHeading__Rbxs4"}},3897:function(e){e.exports={themeWrapper:"theme-light_themeWrapper__bvKnI",tabHeading:"theme-light_tabHeading__U_yuD",activeTabHeading:"theme-light_activeTabHeading__9CFTC"}},5794:function(e){e.exports={heading2Xl:"utils_heading2Xl___9fFP",headingXl:"utils_headingXl__u25Y2",headingLg:"utils_headingLg__5535D",headingMd:"utils_headingMd__gD1Ok",borderCircle:"utils_borderCircle__s2nTm",colorInherit:"utils_colorInherit__mSH_x",padding1px:"utils_padding1px__PWQKR",list:"utils_list__4Mu4l",listItem:"utils_listItem__s2m6i",lightText:"utils_lightText__eUzGY",greyLightText:"utils_greyLightText__DCLw8",tag:"utils_tag__r8GDN",selectedTag:"utils_selectedTag__rQ1Jy",headings:"utils_headings__ylTEg"}}},function(e){e.O(0,[78,688,774,888,179],(function(){return t=5222,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
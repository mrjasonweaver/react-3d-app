(this["webpackJsonpreact-3d-app"]=this["webpackJsonpreact-3d-app"]||[]).push([[0],{41:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var r=n(7),s=n.n(r),c=n(34),a=n.n(c),o=(n(41),n(13)),l=n(12),u=n(50),i=n(10),j=function(e){var t=e.handleColorChange,n=e.handleTextureChange;return Object(i.jsxs)("nav",{children:[Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"/red",onClick:function(e){return t(e,"crimson")},children:"Red"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"/green",onClick:function(e){return t(e,"teal")},children:"Green"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"/blue",onClick:function(e){return t(e,"steelblue")},children:"Blue"})})]}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"/smooth",onClick:function(e){return n(e,"smooth")},children:"smooth"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"/aged",onClick:function(e){return n(e,"rough")},children:"rough"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"/beatup",onClick:function(e){return n(e,"beatup")},children:"beatup"})})]})]})},p=n(47),b=n(49),h=n(37),d=n(48),x=function(e){var t=e.currentColor,n=e.currentTexture,s=e.colorMap,c=e.normalMap,a=e.roughnessMap,o=e.metalnessMap,l=Object(d.a)("./models/submarine-without-propeller.gltf"),u=l.scene,j=l.nodes,p=l.materials;return Object(r.useLayoutEffect)((function(){Object.assign(p.Material,{metalnessMap:o,normalMap:c,roughnessMap:a,map:s,color:t})}),[u,j,p,t,n,s,c,a,o]),Object(i.jsx)("primitive",{object:u})},O=function(e){var t=e.currentColor,n=e.currentTexture,s=e.colorMap,c=e.normalMap,a=e.roughnessMap,o=e.metalnessMap,l=Object(d.a)("./models/propeller.gltf"),u=l.scene,j=l.nodes,p=l.materials;return Object(r.useLayoutEffect)((function(){Object.assign(p.Material,{metalnessMap:o,normalMap:c,roughnessMap:a,map:s,color:t})}),[u,j,p,t,n,s,c,a,o]),Object(i.jsx)("primitive",{object:u})},f=function(e){var t=e.currentColor,n=e.currentTexture,s=e.upKeyPressed,c=Object(p.a)(n),a=Object(o.a)(c,4),u=a[0],j=a[1],d=a[2],f=a[3],g=Object(r.useRef)();return Object(l.b)((function(e){var t=e.clock;s&&(g.current.rotation.z=3*t.getElapsedTime())})),Object(i.jsxs)(b.a,{intensity:1,children:[Object(i.jsx)(h.a,{background:!1,files:"UW_1.hdr",path:"/"}),Object(i.jsx)("mesh",{children:Object(i.jsx)(x,{map:u,normalMap:j,roughnessMap:d,metalnessMap:f,currentColor:t,currentTexture:n})}),Object(i.jsx)("mesh",{ref:g,children:Object(i.jsx)(O,{map:u,normalMap:j,roughnessMap:d,metalnessMap:f,currentColor:t,currentTexture:n})})]})},g=function(e){return function(e){Object(r.useEffect)((function(){var t=function(t){"ArrowUp"===t.key&&e(!0)},n=function(t){"ArrowUp"===t.key&&e(!1)};return window.addEventListener("keydown",t,{passive:!0}),window.addEventListener("keyup",n,{passive:!0}),function(){window.removeEventListener("keydown",t),window.removeEventListener("keyup",n)}}),[e])}(e.setUpKeyPressed),null},m=n(1),M=function(){var e=new m.Color(14423100),t=new m.Color(32896),n=new m.Color(4620980),s=["./textures/Metal030_1K_Color.jpg","./textures/Metal030_1K_NormalGL.jpg","./textures/Metal030_1K_Roughness.jpg","./textures/Metal030_1K_Metalness.jpg"],c=["./textures/Metal040_1K_Color.jpg","./textures/Metal040_1K_NormalGL.jpg","./textures/Metal040_1K_Roughness.jpg","./textures/Metal040_1K_Metalness.jpg"],a=["./textures/Metal021_1K_Color.jpg","./textures/Metal021_1K_NormalGL.jpg","./textures/Metal021_1K_Roughness.jpg","./textures/Metal021_1K_Metalness.jpg"],p=Object(r.useState)(s),b=Object(o.a)(p,2),h=b[0],d=b[1],x=Object(r.useState)(t),O=Object(o.a)(x,2),M=O[0],C=O[1],_=Object(r.useState)(!1),v=Object(o.a)(_,2),k=v[0],w=v[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)(j,{handleColorChange:function(r,s){r.preventDefault(),"crimson"===s?C(e):"teal"===s?C(t):"steelblue"===s&&C(n)},handleTextureChange:function(e,t){e.preventDefault(),"smooth"===t?d(s):"rough"===t?d(c):"beatup"===t&&d(a)}}),Object(i.jsxs)(l.a,{dpr:[1,2],camera:{fov:50},children:[Object(i.jsx)("color",{attach:"background",args:["#253B56"]}),Object(i.jsx)(r.Suspense,{fallback:null,children:Object(i.jsx)(f,{currentTexture:h,currentColor:M,upKeyPressed:k})}),Object(i.jsx)(u.a,{enableZoom:!0,enablePan:!0})]}),Object(i.jsx)(g,{setUpKeyPressed:w})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),s(e),c(e),a(e)}))};a.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(M,{})}),document.getElementById("root")),C()}},[[46,1,2]]]);
//# sourceMappingURL=main.70bf494d.chunk.js.map
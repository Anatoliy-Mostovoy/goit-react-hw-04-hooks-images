(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{12:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__VPBD0",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__3sKCK"}},13:function(e,t,a){e.exports={Overlay:"Modal_Overlay__33Ypd",Modal:"Modal_Modal__3ihEg"}},23:function(e,t,a){},24:function(e,t,a){e.exports={App:"App_App__-gifw"}},27:function(e,t,a){e.exports={Loader:"Loader_Loader__xrN1S"}},28:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__1hnjP"}},29:function(e,t,a){e.exports={Button:"Button_Button__HOrbw"}},7:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__3YYEG",SearchForm:"Searchbar_SearchForm__1hX1-",SearchFormButton:"Searchbar_SearchFormButton__3Txlp",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__2x_EN",SearchFormInput:"Searchbar_SearchFormInput__2AFLM"}},74:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(8),o=a.n(c),s=a(23),i=a.n(s),l=a(5),u=a.n(l),m=a(14),b=a(10),j=a(4),h=a(24),d=a.n(h),p=a(25),g=a.n(p),O="21944092-5843deb4113ddddf966c6ecb1",f="https://pixabay.com/api",x=function(){var e=Object(b.a)(u.a.mark((function e(t){var a,n=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.length>1&&void 0!==n[1]?n[1]:1,e.next=3,g.a.get("".concat(f,"/?q=").concat(t,"&page=").concat(a,"&key=").concat(O,"&image_type=photo&orientation=horizontal&per_page=12"));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=a(26),S=a.n(_),v=a(27),I=a.n(v),y=a(0),w=function(){return Object(y.jsx)("div",{className:I.a.Loader,children:Object(y.jsx)(S.a,{type:"Grid",color:"#3f51b5",height:100,width:100,timeout:3e3})})},k=a(7),N=a.n(k),G=function(e){var t=e.onSubmit,a=Object(n.useState)(""),r=Object(j.a)(a,2),c=r[0],o=r[1];return Object(y.jsx)("header",{className:N.a.Searchbar,children:Object(y.jsxs)("form",{className:N.a.SearchForm,onSubmit:function(e){e.preventDefault(),t(c),o("")},children:[Object(y.jsx)("button",{className:N.a.SearchFormButton,type:"submit"}),Object(y.jsx)("label",{children:Object(y.jsx)("input",{className:N.a.SearchFormInput,type:"text",value:c,onChange:function(e){var t=e.target.value;o(t)},placeholder:"Search images and photos"})})]})})},F=a(12),L=a.n(F),B=function(e){var t=e.imgs,a=e.onImgClick;return Object(y.jsx)(y.Fragment,{children:t.map((function(e){return Object(y.jsx)("li",{className:L.a.ImageGalleryItem,children:Object(y.jsx)("img",{src:e.webformatURL,alt:e.tags,className:L.a.ImageGalleryItemImage,onClick:function(){return a(e.largeImageURL)}})},e.id)}))})},E=a(28),C=a.n(E),M=function(e){var t=e.imgs,a=e.onImgClick;return Object(y.jsx)("ul",{className:C.a.ImageGallery,children:Object(y.jsx)(B,{imgs:t,onImgClick:a})})},A=a(13),P=a.n(A),T=document.querySelector("#modal-root"),Y=function(e){var t=e.closeModal,a=e.children;Object(n.useEffect)((function(){return window.addEventListener("keydown",r),function(){window.removeEventListener("keydown",r)}}));var r=function(e){"Escape"===e.code&&t()};return Object(c.createPortal)(Object(y.jsx)("div",{className:P.a.Overlay,onClick:function(e){e.currentTarget===e.target&&t()},children:Object(y.jsx)("div",{className:P.a.Modal,children:a})}),T)},q=a(29),D=a.n(q),H=function(e){var t=e.nextPage;return Object(y.jsx)("button",{className:D.a.Button,type:"button",onClick:t,children:"Load more"})},J=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),o=Object(j.a)(c,2),s=o[0],i=o[1],l=Object(n.useState)(null),h=Object(j.a)(l,2),p=h[0],g=h[1],O=Object(n.useState)(!1),f=Object(j.a)(O,2),_=f[0],S=f[1],v=Object(n.useState)(1),I=Object(j.a)(v,2),k=I[0],N=I[1],F=Object(n.useState)(!1),L=Object(j.a)(F,2),B=L[0],E=L[1],C=Object(n.useState)(""),A=Object(j.a)(C,2),P=A[0],T=A[1];Object(n.useEffect)((function(){""!==a&&q()}),[a]);var q=function(){var e=Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),e.prev=1,e.next=4,x(a,k);case 4:t=e.sent,console.log(t),i([].concat(Object(m.a)(s),Object(m.a)(t.data.hits))),N(k+1),S(!1),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),g(e.t0.response),S(!1);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();console.log(s);return Object(y.jsxs)("div",{className:d.a.App,children:[Object(y.jsx)(G,{onSubmit:function(e){r(e.trim()),N(1),i([])}}),p?Object(y.jsx)("h2",{children:p}):Object(y.jsx)(M,{imgs:s,onImgClick:function(e){E(!0),T(e)}}),_&&Object(y.jsx)(w,{}),s.length>0&&Object(y.jsx)(H,{nextPage:q}),B&&Object(y.jsx)(Y,{closeModal:function(e){E(!1),T("")},children:Object(y.jsx)("img",{src:P,alt:"img"})})]})};o.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(J,{className:i.a})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.81595e43.chunk.js.map
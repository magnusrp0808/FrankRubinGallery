(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{30:function(e,A,t){},90:function(e,A,t){"use strict";t.r(A);var r,n=t(1),c=t(0),a=t(22),s=t.n(a),i=t(23),o=(t(30),t(72)),l=t(42),d=t(73),j=t(9),b=t(11),v=t(14),u=t(8),g=t(93),O=t(69),h=(t(79),t(63)),f=t(64),P=t.n(f),x=t(65),z=t(95),p=t(70);function w(e){var A=Object(c.useState)(0),t=Object(b.a)(A,2),r=t[0],a=t[1],s=e.handleClose,i=e.setPage,o=e.show;return Object(n.jsxs)(z.a,{show:o,onHide:s,centered:!0,children:[Object(n.jsx)(z.a.Header,{closeButton:!0,children:Object(n.jsx)(z.a.Title,{children:"Jump to page"})}),Object(n.jsx)(z.a.Body,{children:Object(n.jsx)(u.a.Control,{type:"number",onChange:function(e){return a(Number(e.target.value))}})}),Object(n.jsxs)(z.a.Footer,{children:[Object(n.jsx)(p.a,{variant:"secondary",onClick:s,children:"Annuller"}),Object(n.jsx)(p.a,{variant:"primary",onClick:function(){r>0&&i(r-1),s()},children:"OK"})]})]})}function B(e){var A=Object(c.useState)(0),t=Object(b.a)(A,2),a=t[0],s=t[1],i=Object(c.useState)(!1),o=Object(b.a)(i,2),l=o[0],d=o[1],j=e.elements,v=e.imagesPrSide,u=a*v;r=j.slice(u,u+v),Object(c.useEffect)((function(e){s(0)}),[j]);var g=r.length<3?r.length:3;return Object(n.jsxs)("div",{children:[Object(n.jsx)(w,{show:l,setPage:s,handleClose:function(){return d(!1)}}),Object(n.jsx)(x.a,{breakpointCols:{default:g,1250:2,820:1},className:"my-masonry-grid",columnClassName:"my-masonry-grid_column",children:r}),Object(n.jsx)(P.a,{forcePage:a,previousLabel:"<<",nextLabel:">>",breakLabel:Object(n.jsx)("div",{className:"page-break-link",role:"button",onClick:function(e){e.stopPropagation(),d(!0)},children:"..."}),pageCount:Math.ceil(j.length/v),onPageChange:function(e){var A=e.selected;s(A)},containerClassName:"pagination",previousLinkClassName:"paginationPrevious",nextClassName:"paginationNext",disabledClassName:"disabled",activeClassName:"page-item active",activeLinkClassName:"page-link",breakLinkClassName:"page-break",pageLinkClassName:"page-link",nextLinkClassName:"page-link",previousClassName:"page-link"})]})}var C=t(31),L=t(32),m=t(33),S=t(36),E=t(43),I=t(44),N={position:"absolute",width:"100%",height:40,cursor:"pointer",zIndex:300},y={position:"absolute",width:"100%",height:14,borderRadius:7,cursor:"pointer",pointerEvents:"none",backgroundColor:"rgb(155,155,155)"},H=(c.Component,{position:"absolute",width:"100%",height:"100%",borderRadius:7,cursor:"pointer"}),X={position:"absolute",width:"100%",height:14,borderRadius:7,pointerEvents:"none",backgroundColor:"rgb(155,155,155)"},D=function(e){var A=e.getRailProps;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",Object(I.a)({style:H},A())),Object(n.jsx)("div",{style:X})]})},Z=function(e){var A=Object(b.a)(e.domain,2),t=A[0],r=A[1],c=e.handle,a=c.id,s=c.value,i=c.percent,o=e.disabled,l=void 0!==o&&o,d=e.getHandleProps;return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",Object(I.a)({style:{left:"".concat(i,"%"),position:"absolute",transform:"translate(-50%, -25%)",WebkitTapHighlightColor:"rgba(0,0,0,0)",zIndex:5,width:28,height:28,cursor:"pointer",backgroundColor:"none"}},d(a))),Object(n.jsx)("div",{role:"slider","aria-valuemin":t,"aria-valuemax":r,"aria-valuenow":s,style:{left:"".concat(i,"%"),position:"absolute",transform:"translate(-50%, -25%)",zIndex:2,width:24,height:24,borderRadius:"50%",boxShadow:"1px 1px 1px 1px rgba(0, 0, 0, 0.3)",backgroundColor:l?"#666":"#9BBFD4"},children:Object(n.jsx)("div",{style:{fontFamily:"Roboto",fontSize:11},children:Object(n.jsx)("p",{style:{textAlign:"center",lineHeight:"24px"},children:s})})})]})},T=function(e){var A=e.source,t=e.target,r=e.getTrackProps,c=e.disabled,a=void 0!==c&&c;return Object(n.jsx)("div",Object(I.a)({style:{position:"absolute",height:14,zIndex:1,backgroundColor:a?"#999":"#607E9E",borderRadius:7,cursor:"pointer",left:"".concat(A.percent,"%"),width:"".concat(t.percent-A.percent,"%")}},r()))},k={position:"relative",width:"100%"},R=function(e){Object(m.a)(t,e);var A=Object(S.a)(t);function t(){var e;Object(C.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=A.call.apply(A,[this].concat(n))).state={values:e.props.yearOptions,reversed:!1},e.onChange=function(A){e.props.setYearRestriction(A),e.setState({values:A})},e.toggleReverse=function(){e.setState((function(e){return{reversed:!e.reversed}}))},e}return Object(L.a)(t,[{key:"render",value:function(){var e=this,A=this.state,t=A.values,r=A.reversed;return Object(n.jsx)("div",{style:{height:"25px",marginBottom:".5rem",marginTop:".5rem",width:"100%"},children:Object(n.jsxs)(E.c,{mode:1,step:1,domain:this.props.yearOptions,reversed:r,rootStyle:k,onUpdate:this.onUpdate,onChange:this.onChange,values:t,children:[Object(n.jsx)(E.b,{children:function(e){var A=e.getRailProps;return Object(n.jsx)(D,{getRailProps:A})}}),Object(n.jsx)(E.a,{children:function(A){var t=A.handles,r=A.getHandleProps;return Object(n.jsx)("div",{className:"slider-handles",children:t.map((function(A){return Object(n.jsx)(Z,{handle:A,domain:e.props.yearOptions,getHandleProps:r},A.id)}))})}}),Object(n.jsx)(E.d,{left:!1,right:!1,children:function(e){var A=e.tracks,t=e.getTrackProps;return Object(n.jsx)("div",{className:"slider-tracks",children:A.map((function(e){var A=e.id,r=e.source,c=e.target;return Object(n.jsx)(T,{source:r,target:c,getTrackProps:t},A)}))})}})]})})}}]),t}(c.Component),W=["Alle","Akvarel","Collage","Linoleumstryk","Litografi","Monotypi","Tegning","Tegning med oliekridt","Tr\xe6snit","Oliebillede","Radering"],q=["","Nej","Ja"],Q=[10,30,50,100];function V(e){return Object(n.jsx)(v.a,{className:"filter-card",children:Object(n.jsxs)(v.a.Body,{children:[Object(n.jsx)(v.a.Title,{children:"S\xf8g"}),Object(n.jsxs)(u.a,{onSubmit:function(e){return e.preventDefault()},children:[Object(n.jsxs)(u.a.Group,{controlId:"filter.title",children:[Object(n.jsx)(u.a.Label,{children:"Titel"}),Object(n.jsx)(u.a.Control,{type:"text",onChange:function(A){return e.setTitle(A.target.value)}})]}),Object(n.jsxs)(u.a.Group,{controlId:"filter.type",children:[Object(n.jsx)(u.a.Label,{children:"Type"}),Object(n.jsxs)(u.a.Control,{as:"select",onChange:function(A){return e.setType(A.target.selectedIndex)},children:[Object(n.jsx)("option",{children:W[0]}),Object(n.jsx)("option",{children:W[1]}),Object(n.jsx)("option",{children:W[2]}),Object(n.jsx)("option",{children:W[3]}),Object(n.jsx)("option",{children:W[4]}),Object(n.jsx)("option",{children:W[5]}),Object(n.jsx)("option",{children:W[6]}),Object(n.jsx)("option",{children:W[7]}),Object(n.jsx)("option",{children:W[8]}),Object(n.jsx)("option",{children:W[9]}),Object(n.jsx)("option",{children:W[10]})]})]}),Object(n.jsxs)(u.a.Group,{controlId:"filter.canBeBorrowed",children:[Object(n.jsx)(u.a.Label,{children:"Kan blive l\xe5nt"}),Object(n.jsxs)(u.a.Control,{as:"select",onChange:function(A){return e.setCanBeBerrowed(A.target.selectedIndex)},children:[Object(n.jsx)("option",{children:q[0]}),Object(n.jsx)("option",{children:q[1]}),Object(n.jsx)("option",{children:q[2]})]})]}),Object(n.jsxs)(u.a.Group,{controlId:"filter.yearSelection",children:[Object(n.jsx)(u.a.Label,{children:"\xc5rstal"}),Object(n.jsx)(R,{setYearRestriction:e.setYearRestriction,yearOptions:e.yearOptions})]}),Object(n.jsxs)(u.a.Group,{controlId:"filter.picturePrSide",children:[Object(n.jsx)(u.a.Label,{children:"Billeder pr. side"}),Object(n.jsxs)(g.a,{children:[Object(n.jsx)(O.a,{children:Object(n.jsxs)(u.a.Control,{as:"select",onChange:function(A){return e.setImagesPrSide(Q[A.target.selectedIndex])},children:[Object(n.jsx)("option",{children:Q[0]}),Object(n.jsx)("option",{children:Q[1]}),Object(n.jsx)("option",{children:Q[2]}),Object(n.jsx)("option",{children:Q[3]})]})}),Object(n.jsx)(O.a,{children:Object(n.jsxs)("p",{className:"text-muted",children:["Total of ",e.totalResults," results"]})})]})]})]})]})})}function G(e){var A=e.picture.title,t=e.picture.shortDesc,r=e.picture.image,c=e.picture.canBeBorrowed;return Object(n.jsx)(h.LazyLoadComponent,{threshold:500,children:Object(n.jsxs)(v.a,{children:[Object(n.jsx)(i.b,{to:"/picture/".concat(e.picture.id),className:"card-link-img",children:Object(n.jsx)(v.a.Img,{variant:"top",src:"".concat("/FrankRubinGallery","/img/").concat(r)})}),Object(n.jsxs)(v.a.Body,{children:[Object(n.jsx)(v.a.Title,{children:A}),Object(n.jsx)(v.a.Text,{children:t})]}),Object(n.jsx)(v.a.Footer,{className:c?"bg-can":"bg-cannot",children:Object(n.jsx)("small",{className:"text-muted",children:c?"Kan blive l\xe5nt":"Kan ikke blive l\xe5nt"})})]})})}function F(e){var A=Object(c.useState)([]),t=Object(b.a)(A,2),r=t[0],a=t[1],s=e.setTotalResults;0===r.length&&fetch("".concat("/FrankRubinGallery","/data/pictures.json")).then((function(e){return e.json()})).then((function(A){a(A);var t=Number(A.reduce((function(e,A){return Number(e.date)<Number(A.date)?e:A})).date),r=Number(A.reduce((function(e,A){return Number(e.date)>Number(A.date)?e:A})).date);e.setYearOptions([t,r])}));var i=r.filter((function(A){var t=A.title.toLowerCase().includes(e.searchTerms.title.toLowerCase()),r=0===e.searchTerms.type||W[e.searchTerms.type]===A.type,n=0===e.searchTerms.canBeBorrowed||Boolean(e.searchTerms.canBeBorrowed-1)===A.canBeBorrowed,c=e.searchTerms.yearRestriction[0]<=Number(A.date),a=-1===e.searchTerms.yearRestriction[0]||e.searchTerms.yearRestriction[1]>=Number(A.date);return t&&r&&n&&c&&a})).map((function(e){return Object(n.jsx)(G,{picture:e},e.id)}));return Object(c.useEffect)((function(e){s(i.length)}),[i.length,s]),0===i.length?Object(n.jsx)("h1",{children:"Ingen billeder blev fundet for de givne kriterier."}):Object(n.jsx)(B,{elements:i,imagesPrSide:e.imagesPrSide})}function K(){var e=Object(c.useState)(""),A=Object(b.a)(e,2),t=A[0],r=A[1],a=Object(c.useState)(0),s=Object(b.a)(a,2),i=s[0],o=s[1],l=Object(c.useState)(0),d=Object(b.a)(l,2),j=d[0],v=d[1],u=Object(c.useState)([-1,-1]),h=Object(b.a)(u,2),f=h[0],P=h[1],x=Object(c.useState)([0,Number.MAX_VALUE]),z=Object(b.a)(x,2),p=z[0],w=z[1],B=Object(c.useState)(Q[0]),C=Object(b.a)(B,2),L=C[0],m=C[1],S=Object(c.useState)(0),E=Object(b.a)(S,2),I=E[0],N=E[1],y={title:t,type:i,canBeBorrowed:j,yearRestriction:f};return Object(n.jsx)("div",{className:"Gallery mx-auto",style:{maxWidth:"60%"},children:Object(n.jsxs)(g.a,{children:[Object(n.jsx)(O.a,{children:Object(n.jsx)(V,{setTitle:r,setType:o,setCanBeBerrowed:v,setImagesPrSide:m,totalResults:I,setYearRestriction:P,yearOptions:p})}),Object(n.jsx)(O.a,{children:Object(n.jsx)(F,{searchTerms:y,setTotalResults:N,setYearOptions:w,imagesPrSide:L})})]})})}var Y=t(94);function U(e){var A=e.picture;return A?Object(n.jsx)(o.a,{className:"mx-auto mt-4",bg:"light",children:Object(n.jsxs)(g.a,{className:"justify-content-md-left",children:[Object(n.jsx)(O.a,{mx:"auto",children:Object(n.jsx)(Y.a,{className:"description-image",src:"".concat("/FrankRubinGallery","/img/").concat(A.image)})}),Object(n.jsxs)(O.a,{mx:"auto",className:"description-image",children:[Object(n.jsx)("h1",{children:A.title}),Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"\xc5r: "}),A.date]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"Type: "}),A.type]}),""!==A.width&&""!==A.height?Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"St\xf8rrelse: "}),"".concat(A.width," x ").concat(A.height," cm")]}):"",Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"Kan l\xe5nes: "}),A.canBeBorrowed?"Ja":"Nej"]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"Beskrivelse: "}),A.longDesc]})]})]})}):Object(n.jsx)(o.a,{className:"mx-auto mt-4",bg:"light",children:Object(n.jsx)("h1",{children:"Error 404: Picture not found"})})}function M(e){var A=Object(c.useState)([]),t=Object(b.a)(A,2),r=t[0],a=t[1];if(0===r.length)return fetch("".concat("/FrankRubinGallery","/data/pictures.json")).then((function(e){return e.json()})).then((function(e){return a(e)})),Object(n.jsx)("div",{});var s=Number(e.match.params.topicId),i=r.find((function(e){return e.id===s}));return Object(n.jsx)("div",{className:"PictureDescription",children:Object(n.jsx)(U,{picture:i})})}function J(e){return Object(n.jsxs)(u.a,{children:[Object(n.jsxs)(u.a.Group,{controlId:"formBasicEmail",children:[Object(n.jsx)(u.a.Label,{children:"Email address"}),Object(n.jsx)(u.a.Control,{type:"email",placeholder:"Enter email"})]}),Object(n.jsxs)(u.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(n.jsx)(u.a.Label,{children:"Message"}),Object(n.jsx)(u.a.Control,{as:"textarea",rows:5,placeholder:"Enter message"})]}),Object(n.jsx)(p.a,{variant:"primary",type:"submit",children:"Send"})]})}function _(e){return Object(n.jsx)(v.a,{id:e.id,className:"mx-auto mt-4",bg:"light",style:{maxWidth:"60%"},children:Object(n.jsxs)(v.a.Body,{children:[Object(n.jsx)(v.a.Title,{children:Object(n.jsx)("b",{children:"Contact"})}),Object(n.jsx)("hr",{}),Object(n.jsx)(J,{})]})})}function $(){return Object(n.jsx)("div",{className:"Contact",children:Object(n.jsx)(_,{})})}function ee(){return Object(n.jsx)("div",{className:"About"})}function Ae(){var e=Object(c.useState)(!1),A=Object(b.a)(e,2),t=A[0],r=A[1],a=function(){window.pageYOffset>10?r(!0):r(!1)};return Object(c.useEffect)((function(){window.addEventListener("scroll",a)}),[]),Object(n.jsx)("div",{children:Object(n.jsx)("div",{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},className:"scroll-to-top"+(t?"":" hidden"),children:Object(n.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAgAElEQVR4nO3dfWxW9f3wcULIYshCZhZiFs1CXIxhMRoy4oJZMDMmkB8xhEXiWEacJkS3sJE5XNhwAUEYYzwpCoIIjJUHyyoPggxW6NrRwQCrZS1SRsEWKAV5ZqVAS7n/uPe77607VUH6/bS9XiSvv6zt+7p6zud7el3XOadbt27dJgAAOSc8AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPABIrFevXpOjG4Bw4QFAYrt376549tlnl0Z3AKHCA4CE9u/fX339X//eeOONTdE9QJjwACCBXr16TT548ODh663+lZSUlHXv3n1idB+QXHgA0M4ef/zx148dO3a89eL/v/9qa2uPDR06dH50J5BUeADQjqZNm1Zw7dq15rYW///919zc3Dxt2rS3o3uBZMIDgHaybt26v2Qt9kePHj1WV1dXn/XfNmzYUBrdDSQRHgDcYvfcc89v9u7duz9rgd+2bdvu//264uLi97K+Zt++fQf79+8/K/pxAO0qPAC4hUaNGrXk9OnTp7MW9tdff31j669fsGDBu1lfe+HChYtjx45dHv14gHYTHgDcIvPmzduQtZifOXPm7Ced9z9q1Kglp06dyjxoyMvLK4x+XEC7CA8AboHCwsK/ZS3gFRUVVX379p3+af9/nz59ppWVle3L+h67du36e+/evadEP0bglgoPAD6Hhx56aM6BAwcOZy3cGzZs2H6j3y8/P78o63vV19efHDly5KLoxwvcMuEBwE16/vnnlzc0NPyz9WLd0tLSMn369DU3+33Hjx+/6tKlS5eyDgTmzp37TvTjBm6J8ADgJixbtuxPWQv08ePH65944okFn/f7Dxw48OW2XlkoLCzcFf34gc8tPAC4AbfddtuLpaWlH7T1Xv3tt9/+0q38eZs3b96Z9bOqq6trHn300bnRzwdw08IDgM9o6NCh848cOXIsa0FeuXLl1vb6ubNnz16X9TMvX758eeLEifnRzwtwU8IDgM/gpZde+kNTU1NT60W4sbGx8YUXXljV3j//iSeeWNDW1QMLCgqKo58f4IaFBwCf4u233y7OWngPHTpUm/Jl+C9+8YuTduzYUZ7VUl5evv+znG4IdBjhAUAb+vTpM+2DDz74MGvBLS4u3hPVtXTp0s1ZTWfOnDk7evTo30U/b8BnEh4AZHjqqafePHny5KmshfaNN97YFN33k5/8ZNm5c+fOZ/UtXrz4j9F9wKcKDwBamTt37jtZC+u5c+fOdaS/sO+7777fVlRUVGW1lpaWvn/bbbe9GN0ItCk8APg3bZ12V1lZ+Y8HHnhgRnRflrVr15Zk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h+g+AP7vH2rV1dU1WQcBPpj9icIDOqS2bkxx5MiRY0OHDp0f3QfAfyosLNyVNbcPHDhweODAgS9H93VA4QEdyu233/7Srl27/p61EZWWln5w2223vRjdCEC2uXPnvpM1vy9dunRp/Pjxq6L7OpjwgA7jiSeeWHD8+PH6rI1n2bJlf4ruA+DTjRw5clFbl2fPz88viu7rQMIDOoTp06evaWlpaWm9sTQ0NPzz+eefXx7dB8Bn17t37yltvZpbVla2z9lb3SZ06wAB4TZs2LC9rfeNHnrooTnRfQDcnLy8vMKs+X7q1KnTo0aNWhLdFyw8IEzfvn2nV1RUVGVtHIWFhX+L7gPg8xs7duzyCxcuXMya9QsWLHg3ui9QeECIZ599dmlbl5OcN2/ehug+AG6d/v37z9q3b9/BrJlfXFz8XnRfkPCA5F5//fWNWRvB6dOnvSQE0IVt2LChNGv+19TUHH3sscfmRfclFh6Q1LZt23Zn/fL37t27/5577vlNdB8A7WvatGlvNzc3N7deB5qbm5umTp1aEN2XUHhAEg8//PDL1dXVH2Ut/uvWrftLdB8A6QwdOnR+bW3tsaw1IYdOFQwPaHfjxo1bcenSpYbWv+Rr1641T5s2LZeO9gD4l+7du08sKSkpa702jBs3bkV0WyLhAe2qX79+M7OO8I4dO3b88ccffz26D4BY/36r95UrV26N7kkoPKDdzZw5c+2/L/47d+4s79Wr1+ToLgA6hmeffXZpUVHR7uiOxMIDkti4cWPp9evXry9fvrwwugWAjicH/zAMD0jmf/7nf16LbgCADiI8AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AJY2tc8AAAIRSURBVABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASOz/AJFS0pLohMMkAAAAAElFTkSuQmCC",width:"40",height:"40",alt:"Go to top"})})})}function te(e){return Object(n.jsx)(l.a,{className:"navbar",sticky:"top",bg:"white",expand:"sm",children:Object(n.jsxs)(o.a,{children:[Object(n.jsx)(i.b,{to:"/",children:Object(n.jsx)(l.a.Brand,{className:"text-uppercase font-weight-bold",children:"Frank Rubin"})}),Object(n.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(n.jsx)(l.a.Collapse,{id:"basic-navbar-nav",children:Object(n.jsxs)(d.a,{children:[Object(n.jsx)(i.b,{to:"/",className:"nav-link text-uppercase font-weight-bold",children:"Galleri"}),Object(n.jsx)(i.b,{to:"/about",className:"nav-link text-uppercase font-weight-bold",children:"Om"}),Object(n.jsx)(i.b,{to:"/contact",className:"nav-link text-uppercase font-weight-bold",children:"Kontakt"})]})})]})})}function re(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(te,{}),Object(n.jsxs)(j.c,{children:[Object(n.jsx)(j.a,{exact:!0,path:"/",component:K}),Object(n.jsx)(j.a,{exact:!0,path:"/about",component:ee}),Object(n.jsx)(j.a,{path:"/contact",component:$}),Object(n.jsx)(j.a,{path:"/picture/:topicId",component:M})]}),Object(n.jsx)(Ae,{})]})}t(89);var ne=document.getElementById("root");s.a.render(Object(n.jsxs)(i.a,{children:[Object(n.jsx)(re,{})," "]}),ne)}},[[90,1,2]]]);
//# sourceMappingURL=main.ed69cd6c.chunk.js.map
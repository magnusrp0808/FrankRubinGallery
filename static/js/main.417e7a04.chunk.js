(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{32:function(A,e,t){},78:function(A,e,t){"use strict";t.r(e);var c,n=t(1),r=t(0),a=t(21),s=t.n(a),i=t(22),l=(t(32),t(59)),v=t(36),j=t(61),o=t(8),d=t(16),g=t(13),u=t(11),b=t(80),P=t(56),z=(t(67),t(53)),f=t(54),O=t.n(f),L=t(60),w=t(82),C=t(57);function x(A){var e=Object(r.useState)(0),t=Object(d.a)(e,2),c=t[0],a=t[1],s=A.handleClose,i=A.setPage,l=A.show;return Object(n.jsxs)(w.a,{show:l,onHide:s,centered:!0,children:[Object(n.jsx)(w.a.Header,{closeButton:!0,children:Object(n.jsx)(w.a.Title,{children:"Jump to page"})}),Object(n.jsx)(w.a.Body,{children:Object(n.jsx)(u.a.Control,{type:"number",onChange:function(A){return a(Number(A.target.value))}})}),Object(n.jsxs)(w.a.Footer,{children:[Object(n.jsx)(C.a,{variant:"secondary",onClick:s,children:"Annuller"}),Object(n.jsx)(C.a,{variant:"primary",onClick:function(){c>0&&i(c-1),s()},children:"OK"})]})]})}function h(A){var e=Object(r.useState)(0),t=Object(d.a)(e,2),a=t[0],s=t[1],i=Object(r.useState)(!1),l=Object(d.a)(i,2),v=l[0],j=l[1],o=A.elements,g=10*a;c=o.slice(g,g+10),Object(r.useEffect)((function(A){s(0)}),o);return Object(n.jsxs)("div",{children:[Object(n.jsx)(x,{show:v,setPage:s,handleClose:function(){return j(!1)}}),Object(n.jsx)(L.a,{breakpointCols:{default:3,1250:2,820:1},className:"my-masonry-grid",columnClassName:"my-masonry-grid_column",children:c}),Object(n.jsx)(O.a,{forcePage:a,previousLabel:"<<",nextLabel:">>",breakLabel:Object(n.jsx)("div",{className:"page-break-link",role:"button",onClick:function(A){A.stopPropagation(),j(!0)},children:"..."}),pageCount:Math.ceil(o.length/10),onPageChange:function(A){var e=A.selected;s(e)},containerClassName:"pagination",previousLinkClassName:"paginationPrevious",nextClassName:"paginationNext",disabledClassName:"disabled",activeClassName:"page-item active",activeLinkClassName:"page-link",breakLinkClassName:"page-break",pageLinkClassName:"page-link",nextLinkClassName:"page-link",previousClassName:"page-link"})]})}var B=["Alle","Akvarel","Collage","Linoleumstryk","Litografi","Monotypi","Tegning","Tegning med oliekridt","Tr\xe6snit","Oliebillede","Radering"];function p(A){return Object(n.jsx)(g.a,{className:"filter-card",children:Object(n.jsxs)(g.a.Body,{children:[Object(n.jsx)(g.a.Title,{children:"S\xf8g"}),Object(n.jsxs)(u.a,{onSubmit:function(A){return A.preventDefault()},children:[Object(n.jsxs)(u.a.Group,{controlId:"filter.title",children:[Object(n.jsx)(u.a.Label,{children:"Titel"}),Object(n.jsx)(u.a.Control,{type:"text",onChange:function(e){return A.setTitle(e.target.value)}})]}),Object(n.jsxs)(u.a.Group,{controlId:"filter.type",children:[Object(n.jsx)(u.a.Label,{children:"Type"}),Object(n.jsxs)(u.a.Control,{as:"select",onChange:function(e){return A.setType(e.target.selectedIndex)},children:[Object(n.jsx)("option",{children:B[0]}),Object(n.jsx)("option",{children:B[1]}),Object(n.jsx)("option",{children:B[2]}),Object(n.jsx)("option",{children:B[3]}),Object(n.jsx)("option",{children:B[4]}),Object(n.jsx)("option",{children:B[5]}),Object(n.jsx)("option",{children:B[6]}),Object(n.jsx)("option",{children:B[7]}),Object(n.jsx)("option",{children:B[8]}),Object(n.jsx)("option",{children:B[9]}),Object(n.jsx)("option",{children:B[10]})]})]})]})]})})}function S(A){var e=A.picture.title,t=A.picture.shortDesc,c=A.picture.image;return Object(n.jsx)(z.LazyLoadComponent,{threshold:500,children:Object(n.jsxs)(g.a,{children:[Object(n.jsx)(i.b,{to:"/picture/".concat(A.picture.id),className:"card-link-img",children:Object(n.jsx)(g.a.Img,{variant:"top",src:"".concat("/FrankRubinGallery","/img/").concat(c)})}),Object(n.jsxs)(g.a.Body,{children:[Object(n.jsx)(g.a.Title,{children:e}),Object(n.jsx)(g.a.Text,{children:t})]}),Object(n.jsx)(g.a.Footer,{children:Object(n.jsx)("small",{className:"text-muted",children:"Last updated 3 mins ago"})})]})})}function m(A){var e=Object(r.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1];0===c.length&&fetch("".concat("/FrankRubinGallery","/data/pictures.json")).then((function(A){return A.json()})).then((function(A){a(A)}));var s=c.filter((function(e){var t=e.title.toLowerCase().includes(A.searchTerms.title.toLowerCase()),c=0===A.searchTerms.type||B[A.searchTerms.type]===e.type;return t&&c})).map((function(A){return Object(n.jsx)(S,{picture:A},A.id)}));return 0==s.length?Object(n.jsx)("h1",{children:"Ingen billeder blev fundet for de givne kriterier."}):Object(n.jsx)(h,{elements:s})}function E(){var A=Object(r.useState)(""),e=Object(d.a)(A,2),t=e[0],c=e[1],a=Object(r.useState)(0),s=Object(d.a)(a,2),i=s[0],l=s[1],v={title:t,type:i};return Object(n.jsx)("div",{className:"Gallery mx-auto",style:{maxWidth:"60%"},children:Object(n.jsxs)(b.a,{children:[Object(n.jsx)(P.a,{children:Object(n.jsx)(p,{setTitle:c,setType:l})}),Object(n.jsx)(P.a,{children:Object(n.jsx)(m,{searchTerms:v})})]})})}var I=t(81);function N(A){var e=A.picture;return e?Object(n.jsx)(l.a,{className:"mx-auto mt-4",bg:"light",children:Object(n.jsxs)(b.a,{className:"justify-content-md-left",children:[Object(n.jsx)(P.a,{mx:"auto",children:Object(n.jsx)(I.a,{className:"description-image",src:"".concat("/FrankRubinGallery","/img/").concat(e.image)})}),Object(n.jsxs)(P.a,{mx:"auto",className:"description-image",children:[Object(n.jsx)("h1",{children:e.title}),Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"Date: "}),e.date]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"Type: "}),e.type]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"Description: "}),e.longDesc]})]})]})}):Object(n.jsx)(l.a,{className:"mx-auto mt-4",bg:"light",children:Object(n.jsx)("h1",{children:"Error 404: Picture not found"})})}function H(A){var e=Object(r.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1];if(0===c.length)return fetch("".concat("/FrankRubinGallery","/data/pictures.json")).then((function(A){return A.json()})).then((function(A){return a(A)})),Object(n.jsx)("div",{});var s=Number(A.match.params.topicId),i=c.find((function(A){return A.id===s}));return Object(n.jsx)("div",{className:"PictureDescription",children:Object(n.jsx)(N,{picture:i})})}function X(A){return Object(n.jsxs)(u.a,{children:[Object(n.jsxs)(u.a.Group,{controlId:"formBasicEmail",children:[Object(n.jsx)(u.a.Label,{children:"Email address"}),Object(n.jsx)(u.a.Control,{type:"email",placeholder:"Enter email"})]}),Object(n.jsxs)(u.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(n.jsx)(u.a.Label,{children:"Message"}),Object(n.jsx)(u.a.Control,{as:"textarea",rows:5,placeholder:"Enter message"})]}),Object(n.jsx)(C.a,{variant:"primary",type:"submit",children:"Send"})]})}function D(A){return Object(n.jsx)(g.a,{id:A.id,className:"mx-auto mt-4",bg:"light",style:{maxWidth:"60%"},children:Object(n.jsxs)(g.a.Body,{children:[Object(n.jsx)(g.a.Title,{children:Object(n.jsx)("b",{children:"Contact"})}),Object(n.jsx)("hr",{}),Object(n.jsx)(X,{})]})})}function y(){return Object(n.jsx)("div",{className:"Contact",children:Object(n.jsx)(D,{})})}function Z(){return Object(n.jsx)("div",{className:"About"})}function W(){var A=Object(r.useState)(!1),e=Object(d.a)(A,2),t=e[0],c=e[1],a=function(){window.pageYOffset>10?c(!0):c(!1)};return Object(r.useEffect)((function(){window.addEventListener("scroll",a)}),[]),Object(n.jsx)("div",{children:Object(n.jsx)("div",{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},className:"scroll-to-top"+(t?"":" hidden"),children:Object(n.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAgAElEQVR4nO3dfWxW9f3wcULIYshCZhZiFs1CXIxhMRoy4oJZMDMmkB8xhEXiWEacJkS3sJE5XNhwAUEYYzwpCoIIjJUHyyoPggxW6NrRwQCrZS1SRsEWKAV5ZqVAS7n/uPe77607VUH6/bS9XiSvv6zt+7p6zud7el3XOadbt27dJgAAOSc8AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPABIrFevXpOjG4Bw4QFAYrt376549tlnl0Z3AKHCA4CE9u/fX339X//eeOONTdE9QJjwACCBXr16TT548ODh663+lZSUlHXv3n1idB+QXHgA0M4ef/zx148dO3a89eL/v/9qa2uPDR06dH50J5BUeADQjqZNm1Zw7dq15rYW///919zc3Dxt2rS3o3uBZMIDgHaybt26v2Qt9kePHj1WV1dXn/XfNmzYUBrdDSQRHgDcYvfcc89v9u7duz9rgd+2bdvu//264uLi97K+Zt++fQf79+8/K/pxAO0qPAC4hUaNGrXk9OnTp7MW9tdff31j669fsGDBu1lfe+HChYtjx45dHv14gHYTHgDcIvPmzduQtZifOXPm7Ced9z9q1Kglp06dyjxoyMvLK4x+XEC7CA8AboHCwsK/ZS3gFRUVVX379p3+af9/nz59ppWVle3L+h67du36e+/evadEP0bglgoPAD6Hhx56aM6BAwcOZy3cGzZs2H6j3y8/P78o63vV19efHDly5KLoxwvcMuEBwE16/vnnlzc0NPyz9WLd0tLSMn369DU3+33Hjx+/6tKlS5eyDgTmzp37TvTjBm6J8ADgJixbtuxPWQv08ePH65944okFn/f7Dxw48OW2XlkoLCzcFf34gc8tPAC4AbfddtuLpaWlH7T1Xv3tt9/+0q38eZs3b96Z9bOqq6trHn300bnRzwdw08IDgM9o6NCh848cOXIsa0FeuXLl1vb6ubNnz16X9TMvX758eeLEifnRzwtwU8IDgM/gpZde+kNTU1NT60W4sbGx8YUXXljV3j//iSeeWNDW1QMLCgqKo58f4IaFBwCf4u233y7OWngPHTpUm/Jl+C9+8YuTduzYUZ7VUl5evv+znG4IdBjhAUAb+vTpM+2DDz74MGvBLS4u3hPVtXTp0s1ZTWfOnDk7evTo30U/b8BnEh4AZHjqqafePHny5KmshfaNN97YFN33k5/8ZNm5c+fOZ/UtXrz4j9F9wKcKDwBamTt37jtZC+u5c+fOdaS/sO+7777fVlRUVGW1lpaWvn/bbbe9GN0ItCk8APg3bZ12V1lZ+Y8HHnhgRnRflrVr15Zk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h+g+AP7vH2rV1dU1WQcBPpj9icIDOqS2bkxx5MiRY0OHDp0f3QfAfyosLNyVNbcPHDhweODAgS9H93VA4QEdyu233/7Srl27/p61EZWWln5w2223vRjdCEC2uXPnvpM1vy9dunRp/Pjxq6L7OpjwgA7jiSeeWHD8+PH6rI1n2bJlf4ruA+DTjRw5clFbl2fPz88viu7rQMIDOoTp06evaWlpaWm9sTQ0NPzz+eefXx7dB8Bn17t37yltvZpbVla2z9lb3SZ06wAB4TZs2LC9rfeNHnrooTnRfQDcnLy8vMKs+X7q1KnTo0aNWhLdFyw8IEzfvn2nV1RUVGVtHIWFhX+L7gPg8xs7duzyCxcuXMya9QsWLHg3ui9QeECIZ599dmlbl5OcN2/ehug+AG6d/v37z9q3b9/BrJlfXFz8XnRfkPCA5F5//fWNWRvB6dOnvSQE0IVt2LChNGv+19TUHH3sscfmRfclFh6Q1LZt23Zn/fL37t27/5577vlNdB8A7WvatGlvNzc3N7deB5qbm5umTp1aEN2XUHhAEg8//PDL1dXVH2Ut/uvWrftLdB8A6QwdOnR+bW3tsaw1IYdOFQwPaHfjxo1bcenSpYbWv+Rr1641T5s2LZeO9gD4l+7du08sKSkpa702jBs3bkV0WyLhAe2qX79+M7OO8I4dO3b88ccffz26D4BY/36r95UrV26N7kkoPKDdzZw5c+2/L/47d+4s79Wr1+ToLgA6hmeffXZpUVHR7uiOxMIDkti4cWPp9evXry9fvrwwugWAjicH/zAMD0jmf/7nf16LbgCADiI8AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AJY2tc8AAAIRSURBVABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASC88AABILzwAAEgvPAAASOz/AJFS0pLohMMkAAAAAElFTkSuQmCC",width:"40",height:"40",alt:"Go to top"})})})}function T(A){return Object(n.jsx)(v.a,{className:"navbar",sticky:"top",bg:"white",expand:"sm",children:Object(n.jsxs)(l.a,{children:[Object(n.jsx)(i.b,{to:"/",children:Object(n.jsx)(v.a.Brand,{className:"text-uppercase font-weight-bold",children:"Frank Rubin"})}),Object(n.jsx)(v.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(n.jsx)(v.a.Collapse,{id:"basic-navbar-nav",children:Object(n.jsxs)(j.a,{children:[Object(n.jsx)(i.b,{to:"/",className:"nav-link text-uppercase font-weight-bold",children:"Gallery"}),Object(n.jsx)(i.b,{to:"/about",className:"nav-link text-uppercase font-weight-bold",children:"About"}),Object(n.jsx)(i.b,{to:"/contact",className:"nav-link text-uppercase font-weight-bold",children:"Contact"})]})})]})})}function k(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(T,{}),Object(n.jsxs)(o.c,{children:[Object(n.jsx)(o.a,{exact:!0,path:"/",component:E}),Object(n.jsx)(o.a,{exact:!0,path:"/about",component:Z}),Object(n.jsx)(o.a,{path:"/contact",component:y}),Object(n.jsx)(o.a,{path:"/picture/:topicId",component:H})]}),Object(n.jsx)(W,{})]})}t(77);var q=document.getElementById("root");s.a.render(Object(n.jsxs)(i.a,{children:[Object(n.jsx)(k,{})," "]}),q)}},[[78,1,2]]]);
//# sourceMappingURL=main.417e7a04.chunk.js.map
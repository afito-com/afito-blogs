(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"3nLz":function(e,t,a){"use strict";a("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("YbXK"),a("eMsz"),a("3nLz");var r=a("5NKs");t.__esModule=!0,t.default=void 0;var i,n=r(a("v06X")),s=r(a("XEEL")),o=r(a("uDP2")),l=r(a("j8BX")),c=r(a("q1tI")),d=r(a("17x9")),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},m=Object.create({}),p=function(e){var t=u(e),a=f(t);return m[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,v=h&&window.IntersectionObserver,y=new WeakMap;function b(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),c.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function E(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function z(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},N=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?z(e,!0):"")+z(e)})).join("")+"<img "+c+s+o+a+r+t+n+i+l+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=c.default.createElement(O,(0,l.default)({src:t},i));return a.length>1?c.default.createElement("picture",null,r(a),n):n},O=c.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,m=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},m,{onLoad:s,onError:d,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));O.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var x=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!g&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||h&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,m=e.placeholderClassName,p=e.fluid,g=e.fixed,h=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,E=e.itemProp,z=e.loading,L=e.draggable,x=!1===this.state.fadeIn||this.state.imgLoaded,V=!0===this.state.fadeIn&&!this.state.imgCached,_=(0,l.default)({opacity:x?1:0,transition:V?"opacity "+v+"ms":"none"},o),C="boolean"==typeof h?"lightgray":h,P={transitionDelay:v+"ms"},k=(0,l.default)({opacity:this.state.imgLoaded?0:1},V&&P,{},o,{},f),R={title:t,alt:this.state.isVisible?"":a,style:k,className:m,itemProp:E};if(p){var j=p,M=j[0];return c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},c.default.createElement(y,{style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),C&&c.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},V&&P)}),M.base64&&c.default.createElement(I,{src:M.base64,spreadProps:R,imageVariants:j,generateSources:w}),M.tracedSVG&&c.default.createElement(I,{src:M.tracedSVG,spreadProps:R,imageVariants:j,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,b(j),c.default.createElement(O,{alt:a,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:_,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:z,draggable:L})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,l.default)({alt:a,title:t,loading:z},M,{imageVariants:j}))}}))}if(g){var T=g,q=T[0],W=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},n);return"inherit"===n.display&&delete W.display,c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},C&&c.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:C,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},V&&P)}),q.base64&&c.default.createElement(I,{src:q.base64,spreadProps:R,imageVariants:T,generateSources:w}),q.tracedSVG&&c.default.createElement(I,{src:q.tracedSVG,spreadProps:R,imageVariants:T,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,b(T),c.default.createElement(O,{alt:a,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:_,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:z,draggable:L})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,l.default)({alt:a,title:t,loading:z},q,{imageVariants:T}))}}))}return null},t}(c.default.Component);x.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var V=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),_=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});x.propTypes={resolutions:V,sizes:_,fixed:d.default.oneOfType([V,d.default.arrayOf(V)]),fluid:d.default.oneOfType([_,d.default.arrayOf(_)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var C=x;t.default=C},yZlL:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),i=a.n(r),n=a("Wbzz"),s=a("9eSz"),o=a.n(s),l=(a("AqHK"),a("4DPX"),a("sc67"),a("E5k/"),{color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0}),c=r.createContext&&r.createContext(l),d=function(){return(d=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var i in t=arguments[a])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},u=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&(a[r[i]]=e[r[i]])}return a};function f(e){return function(t){return r.createElement(m,d({attr:d({},e.attr)},t),function e(t){return t&&t.map((function(t,a){return r.createElement(t.tag,d({key:a},t.attr),e(t.child))}))}(e.child))}}function m(e){var t=function(t){var a,i=e.size||t.size||"1em";t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className);var n=e.attr,s=e.title,o=u(e,["attr","title"]);return r.createElement("svg",d({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,o,{className:a,style:d({color:e.color||t.color},t.style,e.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),s&&r.createElement("title",null,s),e.children)};return void 0!==c?r.createElement(c.Consumer,null,(function(e){return t(e)})):t(l)}var p=function(e){return f({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"}}]})(e)};p.displayName="FaFacebookSquare";var g=function(e){return f({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}}]})(e)};g.displayName="FaInstagram";var h=function(e){return f({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 32v448h448V32H0zm372.2 106.1l-24 23c-2.1 1.6-3.1 4.2-2.7 6.7v169.3c-.4 2.6.6 5.2 2.7 6.7l23.5 23v5.1h-118V367l24.3-23.6c2.4-2.4 2.4-3.1 2.4-6.7V199.8l-67.6 171.6h-9.1L125 199.8v115c-.7 4.8 1 9.7 4.4 13.2l31.6 38.3v5.1H71.2v-5.1l31.6-38.3c3.4-3.5 4.9-8.4 4.1-13.2v-133c.4-3.7-1-7.3-3.8-9.8L75 138.1V133h87.3l67.4 148L289 133.1h83.2v5z"}}]})(e)};h.displayName="FaMedium";var v=function(e){return f({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}}]})(e)};v.displayName="FaTwitter";var y=a("7oih"),b=a("vrFN");a("qGWU");a.d(t,"pageQuery",(function(){return S}));var E=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,r=a.previous,s=a.next;return i.a.createElement(y.a,{location:this.props.location,title:t},i.a.createElement(b.a,{title:e.frontmatter.title,description:e.excerpt,image:e.frontmatter.cover.childImageSharp.fluid.src}),i.a.createElement(o.a,{className:"Post__img container",fluid:e.frontmatter.cover.childImageSharp.fluid,alt:"Cover"}),i.a.createElement("div",{className:"Post container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col--xs--12"},i.a.createElement("h1",{className:"Post__title"},e.frontmatter.title),i.a.createElement("p",null,!!e.frontmatter.author&&i.a.createElement("span",{className:"Post__author"},e.frontmatter.author," "),!!e.frontmatter.date&&i.a.createElement("span",{className:"Post__published"},e.frontmatter.date)),i.a.createElement("div",{className:"Post__social"},!!e.frontmatter.medium&&i.a.createElement("a",{href:e.frontmatter.medium},i.a.createElement(h,{size:"1.5em"})),!!e.frontmatter.twitter&&i.a.createElement("a",{href:e.frontmatter.twitter},i.a.createElement(v,{size:"1.5em"})),!!e.frontmatter.instagram&&i.a.createElement("a",{href:e.frontmatter.instagram},i.a.createElement(g,{size:"1.5em"})),!!e.frontmatter.facebook&&i.a.createElement("a",{href:e.frontmatter.facebook},i.a.createElement(p,{size:"1.5em"}))),i.a.createElement("div",{className:"Content",dangerouslySetInnerHTML:{__html:e.html}}))),i.a.createElement("div",{className:"Post__footer"},i.a.createElement("div",{className:"row"},r&&i.a.createElement(n.Link,{className:"col--xs--4",to:r.fields.slug,rel:"prev"},i.a.createElement(o.a,{className:"Story__img",fluid:r.frontmatter.cover.childImageSharp.fluid,alt:r.fields.slug}),i.a.createElement("h6",null,r.frontmatter.title)),i.a.createElement("div",{className:r?"col--xs--4":"col--xs--8"}),s&&new Date(s.frontmatter.date)<new Date&&i.a.createElement(n.Link,{className:"col--xs--4",to:s.fields.slug,rel:"next",style:{alignItems:"flex-end",textAlign:"right"}},i.a.createElement(o.a,{className:"Story__img",fluid:s.frontmatter.cover.childImageSharp.fluid,alt:s.fields.slug}),i.a.createElement("h6",null,s.frontmatter.title))))))},r}(i.a.Component),S=(t.default=E,"2006493027")}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-b159c11a5577a4201a98.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"9eSz":function(e,t,a){"use strict";var r=a("5NKs");t.__esModule=!0,t.default=void 0;var i,n=r(a("v06X")),s=r(a("XEEL")),l=r(a("uDP2")),o=r(a("j8BX")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},m=Object.create({}),g=function(e){var t=u(e),a=f(t);return m[a]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,y=new WeakMap;function v(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function E(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},N=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+d+s+l+a+r+t+n+i+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=d.default.createElement(z,(0,o.default)({src:t},i));return a.length>1?d.default.createElement("picture",null,r(a),n):n},z=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,o.default)({sizes:a,srcSet:r,src:i},m,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));z.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var x=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!p&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||h&&(p||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,l=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,g=e.fluid,p=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,E=e.itemProp,L=e.loading,I=e.draggable,x=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,P=(0,o.default)({opacity:x?1:0,transition:C?"opacity "+b+"ms":"none"},l),R="boolean"==typeof h?"lightgray":h,_={transitionDelay:b+"ms"},k=(0,o.default)({opacity:this.state.imgLoaded?0:1},C&&_,{},l,{},f),V={title:t,alt:this.state.isVisible?"":a,style:k,className:m,itemProp:E};if(g){var j=g,T=j[0];return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),R&&d.default.createElement(y,{title:t,style:(0,o.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&_)}),T.base64&&d.default.createElement(O,{src:T.base64,spreadProps:V,imageVariants:j,generateSources:w}),T.tracedSVG&&d.default.createElement(O,{src:T.tracedSVG,spreadProps:V,imageVariants:j,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,v(j),d.default.createElement(z,{alt:a,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:L,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,o.default)({alt:a,title:t,loading:L},T,{imageVariants:j}))}}))}if(p){var q=p,W=q[0],M=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},n);return"inherit"===n.display&&delete M.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},R&&d.default.createElement(y,{title:t,style:(0,o.default)({backgroundColor:R,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},C&&_)}),W.base64&&d.default.createElement(O,{src:W.base64,spreadProps:V,imageVariants:q,generateSources:w}),W.tracedSVG&&d.default.createElement(O,{src:W.tracedSVG,spreadProps:V,imageVariants:q,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,v(q),d.default.createElement(z,{alt:a,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:L,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,o.default)({alt:a,title:t,loading:L},W,{imageVariants:q}))}}))}return null},t}(d.default.Component);x.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),P=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});x.propTypes={resolutions:C,sizes:P,fixed:c.default.oneOfType([C,c.default.arrayOf(C)]),fluid:c.default.oneOfType([P,c.default.arrayOf(P)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var R=x;t.default=R},Lnxd:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a("q1tI"),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},n=r.createContext&&r.createContext(i),s=function(){return(s=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var i in t=arguments[a])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},l=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&(a[r[i]]=e[r[i]])}return a};function o(e){return function(t){return r.createElement(d,s({attr:s({},e.attr)},t),function e(t){return t&&t.map((function(t,a){return r.createElement(t.tag,s({key:a},t.attr),e(t.child))}))}(e.child))}}function d(e){var t=function(t){var a,i=e.size||t.size||"1em";t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className);var n=e.attr,o=e.title,d=l(e,["attr","title"]);return r.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,d,{className:a,style:s({color:e.color||t.color},t.style,e.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),o&&r.createElement("title",null,o),e.children)};return void 0!==n?r.createElement(n.Consumer,null,(function(e){return t(e)})):t(i)}},qGWU:function(e,t,a){},yZlL:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return m}));var r=a("9Hrx"),i=a("q1tI"),n=a.n(i),s=a("Wbzz"),l=a("9eSz"),o=a.n(l),d=a("ma3e"),c=a("7oih"),u=a("vrFN"),f=(a("qGWU"),function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,r=a.previous,i=a.next;return n.a.createElement(c.a,{location:this.props.location,title:t},n.a.createElement(u.a,{title:e.frontmatter.title,description:e.excerpt,image:e.frontmatter.cover.childImageSharp.fluid.src}),n.a.createElement(o.a,{className:"Post__img container",fluid:e.frontmatter.cover.childImageSharp.fluid,alt:"Cover"}),n.a.createElement("div",{className:"Post container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col--xs--12"},n.a.createElement("h1",{className:"Post__title"},e.frontmatter.title),n.a.createElement("p",null,!!e.frontmatter.author&&n.a.createElement("span",{className:"Post__author"},e.frontmatter.author," "),!!e.frontmatter.date&&n.a.createElement("span",{className:"Post__published"},e.frontmatter.date)),n.a.createElement("div",{className:"Post__social"},!!e.frontmatter.medium&&n.a.createElement("a",{href:e.frontmatter.medium},n.a.createElement(d.c,{size:"1.5em"})),!!e.frontmatter.twitter&&n.a.createElement("a",{href:e.frontmatter.twitter},n.a.createElement(d.d,{size:"1.5em"})),!!e.frontmatter.instagram&&n.a.createElement("a",{href:e.frontmatter.instagram},n.a.createElement(d.b,{size:"1.5em"})),!!e.frontmatter.facebook&&n.a.createElement("a",{href:e.frontmatter.facebook},n.a.createElement(d.a,{size:"1.5em"}))),n.a.createElement("div",{className:"Content",dangerouslySetInnerHTML:{__html:e.html}}))),n.a.createElement("div",{className:"Post__footer"},n.a.createElement("div",{className:"row"},r&&n.a.createElement(s.Link,{className:"col--xs--4",to:r.fields.slug,rel:"prev"},n.a.createElement(o.a,{className:"Story__img",fluid:r.frontmatter.cover.childImageSharp.fluid,alt:r.fields.slug}),n.a.createElement("h6",null,r.frontmatter.title)),n.a.createElement("div",{className:r?"col--xs--4":"col--xs--8"}),i&&new Date(i.frontmatter.date)<new Date&&n.a.createElement(s.Link,{className:"col--xs--4",to:i.fields.slug,rel:"next",style:{alignItems:"flex-end",textAlign:"right"}},n.a.createElement(o.a,{className:"Story__img",fluid:i.frontmatter.cover.childImageSharp.fluid,alt:i.fields.slug}),n.a.createElement("h6",null,i.frontmatter.title))))))},t}(n.a.Component));t.default=f;var m="4146903803"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-9611f8209ee99a655bf8.js.map
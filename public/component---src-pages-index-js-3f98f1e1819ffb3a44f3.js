(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"9eSz":function(e,t,a){"use strict";var r=a("5NKs");t.__esModule=!0,t.default=void 0;var i,s=r(a("v06X")),n=r(a("XEEL")),l=r(a("uDP2")),o=r(a("j8BX")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},m=Object.create({}),g=function(e){var t=u(e),a=f(t);return m[a]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,y=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,s=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:s}),d.default.createElement("source",{media:i,srcSet:a,sizes:s}))}))}function v(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function E(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,s=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(s?'sizes="'+s+'" ':"")+"/>"}var N=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',n=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+d+n+l+a+r+t+s+i+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},z=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,s=d.default.createElement(O,(0,o.default)({src:t},i));return a.length>1?d.default.createElement("picture",null,r(a),s):s},O=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,s=e.style,n=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,o.default)({sizes:a,srcSet:r,src:i},m,{onLoad:n,onError:c,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))}));O.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var R=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!p&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||h&&(p||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)(a)),a.handleRef=a.handleRef.bind((0,s.default)(a)),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=N(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,s=void 0===i?{}:i,n=e.imgStyle,l=void 0===n?{}:n,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,g=e.fluid,p=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,v=e.itemProp,L=e.loading,N=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,o.default)({opacity:R?1:0,transition:C?"opacity "+b+"ms":"none"},l),k="boolean"==typeof h?"lightgray":h,x={transitionDelay:b+"ms"},T=(0,o.default)({opacity:this.state.imgLoaded?0:1},C&&x,{},l,{},f),j={title:t,alt:this.state.isVisible?"":a,style:T,className:m,itemProp:v};if(g){var P=g,q=P[0];return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),k&&d.default.createElement(y,{title:t,style:(0,o.default)({backgroundColor:k,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&x)}),q.base64&&d.default.createElement(z,{src:q.base64,spreadProps:j,imageVariants:P,generateSources:w}),q.tracedSVG&&d.default.createElement(z,{src:q.tracedSVG,spreadProps:j,imageVariants:P,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,S(P),d.default.createElement(O,{alt:a,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:L,draggable:N})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,o.default)({alt:a,title:t,loading:L},q,{imageVariants:P}))}}))}if(p){var W=p,_=W[0],M=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:_.width,height:_.height},s);return"inherit"===s.display&&delete M.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(_.srcSet)},k&&d.default.createElement(y,{title:t,style:(0,o.default)({backgroundColor:k,width:_.width,opacity:this.state.imgLoaded?0:1,height:_.height},C&&x)}),_.base64&&d.default.createElement(z,{src:_.base64,spreadProps:j,imageVariants:W,generateSources:w}),_.tracedSVG&&d.default.createElement(z,{src:_.tracedSVG,spreadProps:j,imageVariants:W,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,S(W),d.default.createElement(O,{alt:a,title:t,width:_.width,height:_.height,sizes:_.sizes,src:_.src,crossOrigin:this.props.crossOrigin,srcSet:_.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:L,draggable:N})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,o.default)({alt:a,title:t,loading:L},_,{imageVariants:W}))}}))}return null},t}(d.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),V=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});R.propTypes={resolutions:C,sizes:V,fixed:c.default.oneOfType([C,c.default.arrayOf(C)]),fluid:c.default.oneOfType([V,c.default.arrayOf(V)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var k=R;t.default=k},CYbQ:function(e,t,a){},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return m}));var r=a("9Hrx"),i=a("q1tI"),s=a.n(i),n=a("Wbzz"),l=a("7oih"),o=a("vrFN"),d=a("9eSz"),c=a.n(d),u=(a("CYbQ"),a("pxef"),["college housing","student housing","housing","off-campus housing","off-campus","rutgers off-campus housing"]),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges.filter((function(e){return new Date(e.node.frontmatter.date)<new Date}));return s.a.createElement(l.a,{location:this.props.location},s.a.createElement(o.a,{title:"All posts",keywords:u,image:e[0].node.frontmatter.cover.childImageSharp.fluid.src}),s.a.createElement("div",{className:"Homepage container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:""},s.a.createElement("div",{className:"row"},s.a.createElement("h5",{className:"col--xs--12"},"Featured")),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col--xs--12 col--md--8"},s.a.createElement(n.Link,{className:"Story",to:"/"+e[0].node.fields.slug},s.a.createElement(c.a,{className:"Story__img",fluid:e[0].node.frontmatter.cover.childImageSharp.fluid,alt:"Cover"}))),s.a.createElement("div",{className:"col--xs--12 col--md--4"},s.a.createElement(n.Link,{className:"Story",to:"/"+e[0].node.fields.slug},s.a.createElement("h1",{className:"featured-heading"},e[0].node.frontmatter.title)),s.a.createElement("p",null,s.a.createElement("span",{className:"light"},e[0].node.frontmatter.author,s.a.createElement("br",null),new Date(e[0].node.frontmatter.date).toLocaleDateString())),s.a.createElement("p",null,e[0].node.excerpt))),s.a.createElement("div",{className:"spacer"}),s.a.createElement("div",{className:"row"},s.a.createElement("h5",{className:"col--xs--12"},"Latest")),s.a.createElement("div",{className:"row"},e.map((function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return s.a.createElement("div",{className:"col--xs--6 col--sm--6 col--md--4",key:t.fields.slug},s.a.createElement(n.Link,{className:"Story",to:"/"+t.fields.slug},s.a.createElement(c.a,{className:"Story__img",fluid:t.frontmatter.cover.childImageSharp.fluid,alt:"Cover"}),s.a.createElement("h4",null,a)),s.a.createElement("p",null,!!t.frontmatter.author&&s.a.createElement("span",{className:"light"},t.frontmatter.author,s.a.createElement("br",null)),!!t.frontmatter.date&&s.a.createElement("span",{className:"light"},t.frontmatter.date)))})))))))},t}(s.a.Component);t.default=f;var m="3587629652"},pxef:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-3f98f1e1819ffb3a44f3.js.map
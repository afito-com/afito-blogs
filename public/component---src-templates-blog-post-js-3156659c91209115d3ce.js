(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{141:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return p});var n=a(7),r=a.n(n),o=a(0),i=a.n(o),c=a(146),l=a(148),s=a.n(l),d=a(158),m=a(157),u=a(155),f=(a(170),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,n=a.previous,r=a.next;return i.a.createElement(m.a,{location:this.props.location,title:t},i.a.createElement(u.a,{title:e.frontmatter.title,description:e.excerpt,image:e.frontmatter.cover.childImageSharp.fluid.src}),i.a.createElement(s.a,{className:"Post__img container",fluid:e.frontmatter.cover.childImageSharp.fluid,alt:"Cover"}),i.a.createElement("div",{className:"Post container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col--xs--12"},i.a.createElement("h1",{className:"Post__title"},e.frontmatter.title),i.a.createElement("p",null,!!e.frontmatter.author&&i.a.createElement("span",{className:"Post__author"},e.frontmatter.author," "),!!e.frontmatter.date&&i.a.createElement("span",{className:"Post__published"},e.frontmatter.date)),i.a.createElement("div",{className:"Post__social"},!!e.frontmatter.medium&&i.a.createElement("a",{href:e.frontmatter.medium},i.a.createElement(d.d,{size:"1.5em"})),!!e.frontmatter.twitter&&i.a.createElement("a",{href:e.frontmatter.twitter},i.a.createElement(d.e,{size:"1.5em"})),!!e.frontmatter.instagram&&i.a.createElement("a",{href:e.frontmatter.instagram},i.a.createElement(d.b,{size:"1.5em"})),!!e.frontmatter.facebook&&i.a.createElement("a",{href:e.frontmatter.facebook},i.a.createElement(d.a,{size:"1.5em"}))),i.a.createElement("div",{className:"Content",dangerouslySetInnerHTML:{__html:e.html}}))),i.a.createElement("div",{className:"Post__footer"},i.a.createElement("div",{className:"row"},n&&i.a.createElement(c.Link,{className:"col--xs--4",to:n.fields.slug,rel:"prev"},i.a.createElement(s.a,{className:"Story__img",fluid:n.frontmatter.cover.childImageSharp.fluid,alt:n.fields.slug}),i.a.createElement("h6",null,n.frontmatter.title)),i.a.createElement("div",{className:n?"col--xs--4":"col--xs--8"}),r&&i.a.createElement(c.Link,{className:"col--xs--4",to:r.fields.slug,rel:"next",style:{alignItems:"flex-end",textAlign:"right"}},i.a.createElement(s.a,{className:"Story__img",fluid:r.frontmatter.cover.childImageSharp.fluid,alt:r.fields.slug}),i.a.createElement("h6",null,r.frontmatter.title))))))},t}(i.a.Component));t.default=f;var p="2006493027"},146:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return g}),a.d(t,"StaticQueryContext",function(){return u}),a.d(t,"StaticQuery",function(){return f}),a.d(t,"useStaticQuery",function(){return p});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),c=a(145),l=a.n(c);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var s=a(147),d=a.n(s);a.d(t,"PageRenderer",function(){return d.a});var m=a(32);a.d(t,"parsePath",function(){return m.a});var u=r.a.createContext({}),f=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})},p=function(e){r.a.useContext;var t=r.a.useContext(u);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},147:function(e,t,a){var n;e.exports=(n=a(149))&&n.default||n},149:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),c=a(53),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},150:function(e){e.exports={data:{avatar:{childImageSharp:{fluid:{aspectRatio:2.6134800550206325,src:"/static/6fd2047b823de05622c70d26c6e4dbb7/7d378/footerlogo.png",srcSet:"/static/6fd2047b823de05622c70d26c6e4dbb7/77090/footerlogo.png 50w,\n/static/6fd2047b823de05622c70d26c6e4dbb7/60c8a/footerlogo.png 100w,\n/static/6fd2047b823de05622c70d26c6e4dbb7/7d378/footerlogo.png 200w,\n/static/6fd2047b823de05622c70d26c6e4dbb7/73bbd/footerlogo.png 300w,\n/static/6fd2047b823de05622c70d26c6e4dbb7/71509/footerlogo.png 400w,\n/static/6fd2047b823de05622c70d26c6e4dbb7/a2b25/footerlogo.png 600w,\n/static/6fd2047b823de05622c70d26c6e4dbb7/316af/footerlogo.png 1900w",sizes:"(max-width: 200px) 100vw, 200px"}}}}}},151:function(e,t,a){},152:function(e){e.exports={data:{avatar:{childImageSharp:{fluid:{aspectRatio:3.6,src:"/static/a37c71f9212e352e019edeaeb77d497d/7d378/logonew.png",srcSet:"/static/a37c71f9212e352e019edeaeb77d497d/77090/logonew.png 50w,\n/static/a37c71f9212e352e019edeaeb77d497d/60c8a/logonew.png 100w,\n/static/a37c71f9212e352e019edeaeb77d497d/7d378/logonew.png 200w,\n/static/a37c71f9212e352e019edeaeb77d497d/73bbd/logonew.png 300w,\n/static/a37c71f9212e352e019edeaeb77d497d/71509/logonew.png 400w,\n/static/a37c71f9212e352e019edeaeb77d497d/a2b25/logonew.png 600w,\n/static/a37c71f9212e352e019edeaeb77d497d/d956a/logonew.png 3600w",sizes:"(max-width: 200px) 100vw, 200px"}}}}}},153:function(e,t,a){},154:function(e,t,a){},155:function(e,t,a){"use strict";var n=a(156),r=a(0),o=a.n(r),i=a(4),c=a.n(i),l=a(159),s=a.n(l),d=a(146);function m(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,c=e.image,l=e.title;return o.a.createElement(d.StaticQuery,{query:u,render:function(e){var n=t||e.site.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:l},{property:"og:image",content:"https://blog.afito.com/"+c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:n}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:n})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=m;var u="1025518380"},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Afito Blogs",description:"A blog focusing on the state of college housing.",author:"Tom Bonanni"}}}}},157:function(e,t,a){"use strict";var n=a(7),r=a.n(n),o=a(0),i=a.n(o),c=a(150),l=a(146),s=a(148),d=a.n(s),m=a(158),u=(a(151),"2964121355"),f=function(){return i.a.createElement(l.StaticQuery,{query:u,render:function(e){return i.a.createElement("footer",{className:"Footer"},i.a.createElement("div",{className:"container",style:{width:"100%"}},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col--xs--12 col--lg--6"},i.a.createElement(l.Link,{to:"/"},i.a.createElement(d.a,{fluid:e.avatar.childImageSharp.fluid,alt:"Logo",fadeIn:!1,className:"Footer__logo"})),i.a.createElement("h5",{style:{margin:"20px 0 0 0"}},"A better place for students."),i.a.createElement("div",{className:"row",style:{margin:"40px 0"}},i.a.createElement("a",{style:{paddingRight:"16px"},href:"https://www.facebook.com/RentAfito"},i.a.createElement(m.a,{size:"1.5em"})),i.a.createElement("a",{style:{paddingRight:"16px"},href:"https://www.instagram.com/rentafito/"},i.a.createElement(m.b,{size:"1.5em"})),i.a.createElement("a",{style:{paddingRight:"16px"},href:"https://twitter.com/RentAfito"},i.a.createElement(m.e,{size:"1.5em"})),i.a.createElement("a",{style:{paddingRight:"16px"},href:"https://www.linkedin.com/company/afito/"},i.a.createElement(m.c,{size:"1.5em"})))),i.a.createElement("div",{className:"col--xs--6 col--lg--3"},i.a.createElement("h5",null,"Company"),i.a.createElement("a",{href:"https://afito.com/about"},"About"),i.a.createElement("a",{href:"https://blog.afito.com"},"Blog"),i.a.createElement("a",{href:"mailto:support@afito.com"},"Contact")),i.a.createElement("div",{className:"col--xs--6 col--lg--3"},i.a.createElement("h5",null,"Legal"),i.a.createElement("a",{href:"https://afito.com/privacy"},"Privacy Policy"),i.a.createElement("a",{href:"https://afito.com/terms"},"Terms")),i.a.createElement("div",{className:"row",style:{marginTop:"50px"}},i.a.createElement("div",{className:"col--xs--12 col--lg--12"},i.a.createElement("span",null,"© ",(new Date).getFullYear()," Afito"))))))},data:c})},p=a(152),g=(a(153),"1358804479"),h=function(){return i.a.createElement(l.StaticQuery,{query:g,render:function(e){return i.a.createElement("div",{className:"Header"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row",style:{justifyContent:"space-between",alignItems:"center"}},i.a.createElement(l.Link,{to:"/",style:{width:"165px"}},i.a.createElement(d.a,{fluid:e.avatar.childImageSharp.fluid,alt:"Logo",fadeIn:!1})),i.a.createElement("a",{href:"https://afito.com"},"Find a property"))))},data:p})},E=(a(154),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return i.a.createElement("div",null,i.a.createElement(h,null),i.a.createElement("div",{className:"Layout"},e),i.a.createElement(f,null))},t}(i.a.Component));t.a=E},170:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-3156659c91209115d3ce.js.map
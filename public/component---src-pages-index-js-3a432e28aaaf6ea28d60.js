(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{161:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return f});var n=a(8),r=a.n(n),c=a(0),o=a.n(c),l=a(162),s=a(170),i=a(168),d=a(164),m=a.n(d),u=(a(185),a(186),["college housing","student housing","housing","off-campus housing","off-campus","rutgers off-campus housing"]),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return o.a.createElement(s.a,{location:this.props.location},o.a.createElement(i.a,{title:"All posts",keywords:u,image:e[0].node.frontmatter.cover.childImageSharp.fluid.src}),o.a.createElement("div",{className:"Homepage container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:""},o.a.createElement("div",{className:"row"},o.a.createElement("h5",{className:"col--xs--12"},"Featured")),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col--xs--12 col--md--8"},o.a.createElement(l.a,{className:"Story",to:"/"+e[0].node.fields.slug},o.a.createElement(m.a,{className:"Story__img",fluid:e[0].node.frontmatter.cover.childImageSharp.fluid,alt:"Cover"}))),o.a.createElement("div",{className:"col--xs--12 col--md--4"},o.a.createElement(l.a,{className:"Story",to:"/"+e[0].node.fields.slug},o.a.createElement("h1",{className:"featured-heading"},e[0].node.frontmatter.title)),o.a.createElement("p",null,o.a.createElement("span",{className:"light"},e[0].node.frontmatter.author,o.a.createElement("br",null),new Date(e[0].node.frontmatter.date).toLocaleDateString())),o.a.createElement("p",null,e[0].node.excerpt))),o.a.createElement("div",{className:"spacer"}),o.a.createElement("div",{className:"row"},o.a.createElement("h5",{className:"col--xs--12"},"Latest")),o.a.createElement("div",{className:"row"},e.map(function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return o.a.createElement("div",{className:"col--xs--6 col--sm--6 col--md--4",key:t.fields.slug},o.a.createElement(l.a,{className:"Story",to:"/"+t.fields.slug},o.a.createElement(m.a,{className:"Story__img",fluid:t.frontmatter.cover.childImageSharp.fluid,alt:"Cover"}),o.a.createElement("h4",null,a)),o.a.createElement("p",null,!!t.frontmatter.author&&o.a.createElement("span",{className:"light"},t.frontmatter.author,o.a.createElement("br",null)),!!t.frontmatter.date&&o.a.createElement("span",{className:"light"},t.frontmatter.date)))}))))))},t}(o.a.Component);t.default=p;var f="1459998652"},162:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),c=a(5),o=a.n(c),l=a(39),s=a.n(l);a.d(t,"a",function(){return s.a});a(163);var i=r.a.createContext({});function d(e){var t=e.staticQueryData,a=e.data,n=e.query,c=e.render,o=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,o&&c(o),!o&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var m=function(e){var t=e.data,a=e.query,n=e.render,c=e.children;return r.a.createElement(i.Consumer,null,function(e){return r.a.createElement(d,{data:t,query:a,render:n||c,staticQueryData:e})})};m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},163:function(e,t,a){var n;e.exports=(n=a(165))&&n.default||n},165:function(e,t,a){"use strict";a.r(t);a(40);var n=a(0),r=a.n(n),c=a(5),o=a.n(c),l=a(64),s=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},166:function(e){e.exports={data:{avatar:{childImageSharp:{fluid:{aspectRatio:2.6134800550206325,src:"/static/6fd2047b823de05622c70d26c6e4dbb7/7d378/footerlogo.png",srcSet:"/static/6fd2047b823de05622c70d26c6e4dbb7/77090/footerlogo.png 50w,\n/static/6fd2047b823de05622c70d26c6e4dbb7/60c8a/footerlogo.png 100w,\n/static/6fd2047b823de05622c70d26c6e4dbb7/7d378/footerlogo.png 200w,\n/static/6fd2047b823de05622c70d26c6e4dbb7/73bbd/footerlogo.png 300w,\n/static/6fd2047b823de05622c70d26c6e4dbb7/71509/footerlogo.png 400w,\n/static/6fd2047b823de05622c70d26c6e4dbb7/a2b25/footerlogo.png 600w,\n/static/6fd2047b823de05622c70d26c6e4dbb7/316af/footerlogo.png 1900w",sizes:"(max-width: 200px) 100vw, 200px"}}}}}},167:function(e){e.exports={data:{avatar:{childImageSharp:{fluid:{aspectRatio:3.6,src:"/static/a37c71f9212e352e019edeaeb77d497d/7d378/logonew.png",srcSet:"/static/a37c71f9212e352e019edeaeb77d497d/77090/logonew.png 50w,\n/static/a37c71f9212e352e019edeaeb77d497d/60c8a/logonew.png 100w,\n/static/a37c71f9212e352e019edeaeb77d497d/7d378/logonew.png 200w,\n/static/a37c71f9212e352e019edeaeb77d497d/73bbd/logonew.png 300w,\n/static/a37c71f9212e352e019edeaeb77d497d/71509/logonew.png 400w,\n/static/a37c71f9212e352e019edeaeb77d497d/a2b25/logonew.png 600w,\n/static/a37c71f9212e352e019edeaeb77d497d/d956a/logonew.png 3600w",sizes:"(max-width: 200px) 100vw, 200px"}}}}}},168:function(e,t,a){"use strict";var n=a(169),r=a(0),c=a.n(r),o=a(5),l=a.n(o),s=a(175),i=a.n(s),d=a(162);function m(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,l=e.image,s=e.title;return c.a.createElement(d.b,{query:u,render:function(e){var n=t||e.site.siteMetadata.description;return c.a.createElement(i.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:s},{property:"og:image",content:"https://blog.afito.com/"+l},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=m;var u="1025518380"},169:function(e){e.exports={data:{site:{siteMetadata:{title:"Afito Blogs",description:"A blog focusing on the state of college housing.",author:"Tom Bonanni"}}}}},170:function(e,t,a){"use strict";var n=a(8),r=a.n(n),c=a(0),o=a.n(c),l=a(166),s=a(162),i=a(164),d=a.n(i),m=a(171),u=(a(172),"2964121355"),p=function(){return o.a.createElement(s.b,{query:u,render:function(e){return o.a.createElement("footer",{className:"Footer"},o.a.createElement("div",{className:"container",style:{width:"100%"}},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col--xs--12 col--lg--6"},o.a.createElement(s.a,{to:"/"},o.a.createElement(d.a,{fluid:e.avatar.childImageSharp.fluid,alt:"Logo",fadeIn:!1,className:"Footer__logo"})),o.a.createElement("h5",{style:{margin:"20px 0 0 0"}},"A better place for students."),o.a.createElement("div",{className:"row",style:{margin:"40px 0"}},o.a.createElement("a",{style:{paddingRight:"16px"},href:"https://www.facebook.com/RentAfito"},o.a.createElement(m.a,{size:"1.5em"})),o.a.createElement("a",{style:{paddingRight:"16px"},href:"https://www.instagram.com/rent_afito/"},o.a.createElement(m.b,{size:"1.5em"})),o.a.createElement("a",{style:{paddingRight:"16px"},href:"https://twitter.com/RentAfito"},o.a.createElement(m.e,{size:"1.5em"})),o.a.createElement("a",{style:{paddingRight:"16px"},href:"https://www.linkedin.com/company/afito/"},o.a.createElement(m.c,{size:"1.5em"})))),o.a.createElement("div",{className:"col--xs--6 col--lg--3"},o.a.createElement("h5",null,"Company"),o.a.createElement("a",{href:"https://afito.com/about"},"About"),o.a.createElement("a",{href:"https://blog.afito.com"},"Blog"),o.a.createElement("a",{href:"mailto:support@afito.com"},"Contact")),o.a.createElement("div",{className:"col--xs--6 col--lg--3"},o.a.createElement("h5",null,"Legal"),o.a.createElement("a",{href:"https://afito.com/privacy"},"Privacy Policy"),o.a.createElement("a",{href:"https://afito.com/terms"},"Terms")),o.a.createElement("div",{className:"row",style:{marginTop:"50px"}},o.a.createElement("div",{className:"col--xs--12 col--lg--12"},o.a.createElement("span",null,"© ",(new Date).getFullYear()," Afito"))))))},data:l})},f=a(167),g=(a(173),"1358804479"),h=function(){return o.a.createElement(s.b,{query:g,render:function(e){return o.a.createElement("div",{className:"Header"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row",style:{justifyContent:"space-between",alignItems:"center"}},o.a.createElement(s.a,{to:"/",style:{width:"165px"}},o.a.createElement(d.a,{fluid:e.avatar.childImageSharp.fluid,alt:"Logo",fadeIn:!1})),o.a.createElement("a",{href:"/"},"Find a property"))))},data:f})},E=(a(174),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement("div",null,o.a.createElement(h,null),o.a.createElement("div",{className:"Layout"},e),o.a.createElement(p,null))},t}(o.a.Component));t.a=E}}]);
//# sourceMappingURL=component---src-pages-index-js-3a432e28aaaf6ea28d60.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"51K9":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Aksharaa\'s Stories","description":"Welcome to my magical work of stories. I hope you enjoy the same","author":"Aksharaasri A"}}}}')},eWDE:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return c}));a("a1Th"),a("Btvt");var r=a("q1tI"),n=a.n(r),o=a("Wbzz"),s=a("Bl7J"),i=a("vrFN");var l=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges,r=this.props.pageContext,l=r.currentPage,c=r.numPages,m=1===l,p=l===c,u=l-1==1?"/":(l-1).toString(),d=(l+1).toString();return n.a.createElement(s.a,null,n.a.createElement(i.a,{title:t,keywords:["story","children","moral","moralstories"]}),a.map((function(e){var t=e.node;return n.a.createElement("article",{className:"post",key:t.fields.slug},t.frontmatter.img&&t.frontmatter.img.childImageSharp&&t.frontmatter.img.childImageSharp.fluid&&n.a.createElement(o.Link,{to:t.fields.slug,className:"post-thumbnail",style:{backgroundImage:"url("+t.frontmatter.img.childImageSharp.fluid.src+")"}}),n.a.createElement("div",{className:"post-content"},n.a.createElement("h2",{className:"post-title"},n.a.createElement(o.Link,{to:t.fields.slug},t.frontmatter.title)),n.a.createElement("p",null,t.frontmatter.description),n.a.createElement("span",{className:"post-date"},t.frontmatter.date,"  — "),n.a.createElement("span",{className:"post-words"},t.timeToRead," minute read")))})),n.a.createElement("div",{className:"container"},n.a.createElement("nav",{className:"pagination",role:"pagination"},n.a.createElement("ul",null,!m&&n.a.createElement("p",null,n.a.createElement(o.Link,{to:u,rel:"prev",className:"newer-posts"},"← Previous Page")),n.a.createElement("p",null,n.a.createElement("span",{className:"page-number"},"Page ",l," of ",c)),!p&&n.a.createElement("p",null,n.a.createElement(o.Link,{to:d,rel:"next",className:"older-posts"},"Next Page →"))))))},r}(n.a.Component);t.default=l;var c="4288005773"},vrFN:function(e,t,a){"use strict";var r=a("51K9"),n=a("q1tI"),o=a.n(n),s=a("TJpk"),i=a.n(s);function l(e){var t=e.description,a=e.lang,n=e.meta,s=e.title,l=r.data.site,c=t||l.siteMetadata.description;return o.a.createElement(i.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:s},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:c}].concat(n)})}l.defaultProps={lang:"en",meta:[],description:""},t.a=l}}]);
//# sourceMappingURL=component---src-templates-blog-list-js-53010b7f36524e2026ef.js.map
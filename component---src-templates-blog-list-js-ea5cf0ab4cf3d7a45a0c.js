"use strict";(self.webpackChunkflexible_gatsby=self.webpackChunkflexible_gatsby||[]).push([[544],{9357:function(e,t,a){var n=a(7294),r=a(4593),l=a(1883);function s(e){let{description:t,lang:a,meta:s,title:i}=e;const{site:o}=(0,l.useStaticQuery)("63159454"),c=t||o.siteMetadata.description;return n.createElement(r.Z,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:i},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:c}].concat(s)})}s.defaultProps={lang:"en",meta:[],description:""},t.Z=s},5769:function(e,t,a){a.r(t);var n=a(4578),r=a(7294),l=a(1883),s=a(5433),i=a(9357);let o=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.Z)(t,e),t.prototype.render=function(){const{data:e}=this.props,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges,{currentPage:n,numPages:o}=this.props.pageContext,c=1===n,m=n===o,p=n-1==1?"/":(n-1).toString(),u=(n+1).toString();return r.createElement(s.Z,null,r.createElement(i.Z,{title:t,keywords:["story","children","moral","moralstories"]}),a.map((e=>{let{node:t}=e;return r.createElement("article",{className:"post",key:t.fields.slug},t.frontmatter.img&&t.frontmatter.img.childImageSharp&&t.frontmatter.img.childImageSharp.fluid&&r.createElement(l.Link,{to:t.fields.slug,className:"post-thumbnail",style:{backgroundImage:"url("+t.frontmatter.img.childImageSharp.fluid.src+")"}}),r.createElement("div",{className:"post-content"},r.createElement("h2",{className:"post-title"},r.createElement(l.Link,{to:t.fields.slug},t.frontmatter.title)),r.createElement("p",null,t.frontmatter.description),r.createElement("span",{className:"post-date"},t.frontmatter.date,"  — "),r.createElement("span",{className:"post-words"},t.timeToRead," minute read")))})),r.createElement("div",{className:"container"},r.createElement("nav",{className:"pagination",role:"pagination"},r.createElement("ul",null,!c&&r.createElement("p",null,r.createElement(l.Link,{to:p,rel:"prev",className:"newer-posts"},"← Previous Page")),r.createElement("p",null,r.createElement("span",{className:"page-number"},"Page ",n," of ",o)),!m&&r.createElement("p",null,r.createElement(l.Link,{to:u,rel:"next",className:"older-posts"},"Next Page →"))))))},t}(r.Component);t.default=o}}]);
//# sourceMappingURL=component---src-templates-blog-list-js-ea5cf0ab4cf3d7a45a0c.js.map
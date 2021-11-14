"use strict";(self.webpackChunkrankr=self.webpackChunkrankr||[]).push([[962],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return u}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(r),u=a,g=m["".concat(c,".").concat(u)]||m[u]||d[u]||i;return r?n.createElement(g,o(o({ref:t},l),{},{components:r})):n.createElement(g,o({ref:t},l))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5675:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],s={id:"getting-started",title:"Getting Started",sidebar_position:2},c="Getting Started",p={unversionedId:"introduction/getting-started",id:"introduction/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Rankr is a simple multi-criteria decision analysis (MCDA) library written in JavaScript. There are currently only two built-in criteria strategies available and the option to roll a custom solution.",source:"@site/docs/introduction/getting-started.md",sourceDirName:"introduction",slug:"/introduction/getting-started",permalink:"/rankr/docs/next/introduction/getting-started",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/introduction/getting-started.md",tags:[],version:"current",lastUpdatedBy:"Westin Schepper",lastUpdatedAt:1634185686,formattedLastUpdatedAt:"10/14/2021",sidebarPosition:2,frontMatter:{id:"getting-started",title:"Getting Started",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Quick Start",permalink:"/rankr/docs/next/introduction/quick-start"},next:{title:"Advanced Usage",permalink:"/rankr/docs/next/introduction/advanced-usage"}},l=[{value:"\u270b Before we continue...",id:"-before-we-continue",children:[]},{value:"What does it do?",id:"what-does-it-do",children:[]},{value:"Try it yourself",id:"try-it-yourself",children:[{value:"Install",id:"install",children:[]},{value:"Import",id:"import",children:[]},{value:"Use",id:"use",children:[]}]}],d={toc:l};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"Rankr is a simple multi-criteria decision analysis (MCDA) library written in JavaScript. There are currently only two built-in criteria strategies available and the option to roll a custom solution."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Please keep in mind this project is still in initial development as defined by ",(0,i.kt)("a",{parentName:"p",href:"https://semver.org/#spec-item-4"},"semver 2.0.0 spec item 4"),":"),(0,i.kt)("blockquote",{parentName:"div"},(0,i.kt)("p",{parentName:"blockquote"},"Major version zero (0.y.z) is for initial development. Anything MAY change at any time. The public API SHOULD NOT be considered stable.")))),(0,i.kt)("h2",{id:"-before-we-continue"},"\u270b"," Before we continue..."),(0,i.kt)("p",null,"If you are more of a jump-right-in type of person, head over to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/introduction/quick-start"},"Quick Start guide"),"."),(0,i.kt)("h2",{id:"what-does-it-do"},"What does it do?"),(0,i.kt)("p",null,"There are thousands of cars available and hundreds of different features to consider\u2014 price, color, heated seats, gas mileage, safety, horsepower, torque, year, etc. The list is endless. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"How do you find the perfect car for you?"))),(0,i.kt)("p",null,"This is where Rankr comes in. You provide your list of cars and what your priorities are, we find the best matches based on those priorities."),(0,i.kt)("p",null,"Let's look at an example. I'm buying a car and the things I care about are:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Low price"),(0,i.kt)("li",{parentName:"ol"},"High Gas mileage (mpg)"),(0,i.kt)("li",{parentName:"ol"},"High Safety rating")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const cars = [\n  { make: 'Ford', model: 'Raptor', price: 45000, safetyRating: 5, mpg: 21 },\n  { make: 'Audi', model: 'S3', price: 50000, safetyRating: 9, mpg: 29 },\n  { make: 'BMW', model: 'M3', price: 60000, safetyRating: 6, mpg: 24 },\n  { make: 'Audi', model: 'Q8RS', price: 70000, safetyRating: 10, mpg: 22 },\n  { make: 'Mercedes', model: 'AMG', price: 110000, safetyRating: 3, mpg: 18 }\n]\n\n// The criterias (low price, high gas mileage, high safety rating)\nconst criterias = [\n  { key: 'price', strategy: 'decreasing' },\n  { key: 'mpg', strategy: 'increasing' },\n  { key: 'safetyRating', strategy: 'increasing' },\n]\n\nRankr(cars, criterias)\n// [\n//   { score: 0.9267399267399267, record: { make: \"Audi\", model: \"S3\", price: 50000, safetyRating: 9, mpg: 29 },\n//   { score: 0.6596736596736597, record: { make: \"Audi\", model: \"Q8RS\", price: 70000, safetyRating: 10, mpg: 22 },\n//   { score: 0.5810855810855811, record: { make: \"BMW\", model: \"M3\", price: 60000, safetyRating: 6, mpg: 24 },\n//   { score: 0.5194805194805194, record: { make: \"Ford\", model: \"Raptor\", price: 45000, safetyRating: 5, mpg: 21 },\n//   { score: 0, record: { make: \"Mercedes\", model: \"AMG\", price: 110000, safetyRating: 3, mpg: 18 } }\n// ]\n")),(0,i.kt)("p",null,"According to Rankr, the best option out of our list of cars is the Audi S3."),(0,i.kt)("h2",{id:"try-it-yourself"},"Try it yourself"),(0,i.kt)("h3",{id:"install"},"Install"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Using ",(0,i.kt)("a",{parentName:"strong",href:"https://yarnpkg.com/en/package/rankr"},(0,i.kt)("inlineCode",{parentName:"a"},"yarn")),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add rankr\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Using ",(0,i.kt)("a",{parentName:"strong",href:"https://www.npmjs.com/package/rankr"},(0,i.kt)("inlineCode",{parentName:"a"},"npm")),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install rankr\n")),(0,i.kt)("h3",{id:"import"},"Import"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"CommonJS")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const Rankr = require('rankr');\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ES Module")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import Rankr from 'rankr'\n")),(0,i.kt)("h3",{id:"use"},"Use"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Prompt:")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"I'm looking for new car. low price, high gas mileage, and a high safety rating are important to me."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// This is your data\nconst cars = [\n  { make: 'Ford', model: 'Raptor', price: 45000, safetyRating: 5, mpg: 21 },\n  { make: 'Audi', model: 'S3', price: 50000, safetyRating: 9, mpg: 29 },\n  { make: 'BMW', model: 'M3', price: 60000, safetyRating: 6, mpg: 24 },\n  { make: 'Audi', model: 'Q8RS', price: 70000, safetyRating: 10, mpg: 22 },\n  { make: 'Mercedes', model: 'AMG', price: 110000, safetyRating: 3, mpg: 18 }\n]\n\n// The criterias (low price, high gas mileage, high safety rating)\nconst criterias = [\n  { key: 'price', strategy: 'decreasing' },\n  { key: 'mpg', strategy: 'increasing' },\n  { key: 'safetyRating', strategy: 'increasing' },\n]\n\nRankr(cars, criterias)\n// [\n//   { score: 0.9267399267399267, record: { make: \"Audi\", model: \"S3\", price: 50000, safetyRating: 9, mpg: 29 },\n//   { score: 0.6596736596736597, record: { make: \"Audi\", model: \"Q8RS\", price: 70000, safetyRating: 10, mpg: 22 },\n//   { score: 0.5810855810855811, record: { make: \"BMW\", model: \"M3\", price: 60000, safetyRating: 6, mpg: 24 },\n//   { score: 0.5194805194805194, record: { make: \"Ford\", model: \"Raptor\", price: 45000, safetyRating: 5, mpg: 21 },\n//   { score: 0, record: { make: \"Mercedes\", model: \"AMG\", price: 110000, safetyRating: 3, mpg: 18 } }\n// ]\n")))}m.isMDXComponent=!0}}]);
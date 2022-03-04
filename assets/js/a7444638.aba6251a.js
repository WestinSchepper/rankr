"use strict";(self.webpackChunkrankr=self.webpackChunkrankr||[]).push([[261],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3873:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294),a=n(6010),i="tableOfContentsInline_3fWc";function o(e){var t=e.toc,n=e.isChild;return t.length?r.createElement("ul",{className:n?"":"table-of-contents"},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(o,{isChild:!0,toc:e.children}))}))):null}var l=function(e){var t=e.toc;return r.createElement("div",{className:(0,a.Z)(i)},r.createElement(o,{toc:t}))}},4202:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=n(3873),l=["components"],s={sidebar_position:2},c="Criteria",d={unversionedId:"api-reference/criteria",id:"api-reference/criteria",isDocsHomePage:!1,title:"Criteria",description:"Criterias are where you define which properties to include in your ranking algorithm and how they should be ranked.",source:"@site/docs/api-reference/criteria.md",sourceDirName:"api-reference",slug:"/api-reference/criteria",permalink:"/rankr/docs/next/api-reference/criteria",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api-reference/criteria.md",tags:[],version:"current",lastUpdatedBy:"Westin Schepper",lastUpdatedAt:1646359081,formattedLastUpdatedAt:"3/3/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Config",permalink:"/rankr/docs/next/api-reference/config"}},u=[{value:"Options",id:"options",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Defaults",id:"defaults",children:[]},{value:"Reference",id:"reference",children:[{value:"<code>key</code> [string]",id:"key-string",children:[]},{value:"<code>strategy</code> [string | function]",id:"strategy-string--function",children:[]},{value:"<code>min</code> [number]",id:"min-number",children:[]},{value:"<code>max</code> [number]",id:"max-number",children:[]},{value:"<code>distance</code> [number]",id:"distance-number",children:[]},{value:"<code>weight</code> [number]",id:"weight-number",children:[]},{value:"<code>transform</code> [function]",id:"transform-function",children:[]}]}],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"criteria"},"Criteria"),(0,i.kt)("p",null,"Criterias are where you define which properties to include in your ranking algorithm and how they should be ranked."),(0,i.kt)("p",null,"criterias are incredibly flexible and allow you to calculate ranks any way you want. We tried to keep this as minimal as possible to allow you the freedom and flexibility to make criterias work best for you, while also providing some common out-of-the-box solutions."),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)(o.Z,{toc:u[u.length-1].children,mdxType:"TOCInline"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const criteria = {\n  // key: string\n  // [optional] if you provide a strategy function\n  // this acts as the criteria name and the property used to rank your records. Can be a path for nested attributes.\n  key: 'price',\n\n  // strategy: 'increasing' | 'decreasing' | function(record, criteria) => criteriaRank\n  // [required]\n  // the strategy for ranking. Always provide a built strategy or a function.\n  strategy: 'increasing',\n\n  // min: number\n  // [optional] If not provided, we will find this for you.\n  // this is the minimum value for this criteria.\n  min: 10,\n\n  // max: number\n  // [optional] If not provided, we will find this for you.\n  // this is the maximum value for this criteria.\n  max: 25,\n\n  // distance: number\n  // [optional] If not provided, we will find this for you.\n  // this should be `max - min` and used to calculate ranks.\n  distance: 15,\n\n  // weight: number[0...1]\n  // [optional] If not provided, we will find this for you.\n  // Must be between 0 and 1. If not provided, all criterias will be weighted evenly.\n  weight: 0.35,\n\n  // transform: function(record) => number\n  // [optional]\n  // When ranking an unsupported data type, use this to convert it to a number.\n  transform: (record) => new Date(record.date).valueOf()\n}\n")),(0,i.kt)("h2",{id:"defaults"},"Defaults"),(0,i.kt)("p",null,"Currently criterias have no default options."),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("h3",{id:"key-string"},(0,i.kt)("inlineCode",{parentName:"h3"},"key")," ","[","string]"),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," option to define the target property for a criteria. The key should correspond to a property in the records you provide. You can also pass in an object path for nested attributes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// String path for nested attributes\nconst criteria = {\n  key: 'path.to.object[5].value'\n}\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"When using the ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," option, keep in mind: Rankr only has built-in support for ",(0,i.kt)("inlineCode",{parentName:"p"},"numbers")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"booleans"),". If you need to rank anything else, take a look at the ",(0,i.kt)("a",{parentName:"p",href:"criteria#transform-function"},(0,i.kt)("inlineCode",{parentName:"a"},"transform"))," option."))),(0,i.kt)("h3",{id:"strategy-string--function"},(0,i.kt)("inlineCode",{parentName:"h3"},"strategy")," ","[","string | function]"),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")),(0,i.kt)("p",null,"Think of a ",(0,i.kt)("inlineCode",{parentName:"p"},"strategy")," as a formula to calculate the rank for that criteria. Rankr comes with two built in strategies out of the box, ",(0,i.kt)("inlineCode",{parentName:"p"},"increasing")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"decreasing"),". These should meet most of your needs but if it doesn't you can always use a custom function."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"values"),(0,i.kt)("th",{parentName:"tr",align:null},"description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'increasing'")),(0,i.kt)("td",{parentName:"tr",align:null},"Rank higher values higher (as the value increases, the rank increases)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'decreasing'")),(0,i.kt)("td",{parentName:"tr",align:null},"Rank lower values higher (as the value decreases, the rank increases)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"fn(record, criteria): number")),(0,i.kt)("td",{parentName:"tr",align:null},"When you need a custom formula. You should return a decimal between ",(0,i.kt)("inlineCode",{parentName:"td"},"0")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"criteria.weight"),".")))),(0,i.kt)("h4",{id:"strategy-functions"},"Strategy functions"),(0,i.kt)("p",null,"Though this is not enforced, custom strategy functions should return a number between ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"criteria.weight")," value, unless if you are okay with ranks that exceed ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),". This was not built with multipliers in mind, so use at your own risk."),(0,i.kt)("p",null,"Lets look at an example of a strategy function. In this scenario, we want to rank people based on their age group instead of their age relative to all other ages."),(0,i.kt)("p",null,"Persons 50 and older receive the whole rank, persons aged 25 to 49 receive half, and persons less than 25 receive nothing."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"{8-16}","{8-16}":!0},'const people = [\n  { name: "John", age: 65 },\n  { name: "Bill", age: 44 },\n  { name: "Jill", age: 32 },\n  { name: "Ron", age: 2 }\n]\n\nconst rankByAgeGroup = (record, criteria) => {\n  if (record.age >= 50) {\n    return criteria.weight\n  } else if (record.age >= 25) {\n    return criteria.weight / 2\n  } else {\n    return 0\n  }\n}\n\nconst customCriterias = [\n  { strategy: rankByAgeGroup }\n]\n\nconst builtInCriterias = [\n  { key: \'age\', strategy: \'increasing\' }\n]\n\nRankr(people, customCriterias)\n// [\n//   { score: 1, record: { name: "John", age: 65 } },\n//   { score: 0.5, record: { name: "Bill", age: 44 } },\n//   { score: 0.5, record: { name: "Jill", age: 32 } },\n//   { score: 0, record: { name: "Ron", age: 2 } }\n// ]\n\nRankr(people, builtInCriterias)\n// [\n//   { score: 1, record: { name: "John", age: 65 } },\n//   { score: 0.67, record: { name: "Bill", age: 44 } },\n//   { score: 0.48, record: { name: "Jill", age: 32 } },\n//   { score: 0, record: { name: "Ron", age: 2 } }\n// ]\n')),(0,i.kt)("p",null,"As you can see, custom strategy functions are very flexible and expose the entire record and the entire criteria for your convenience."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Remember: custom strategy functions should return a number between 0 and the ",(0,i.kt)("inlineCode",{parentName:"p"},"criteria.weight")," value for the best results."))),(0,i.kt)("h3",{id:"min-number"},(0,i.kt)("inlineCode",{parentName:"h3"},"min")," ","[","number]"),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")),(0,i.kt)("p",null,"This represents the minimum possible value the criteria will have. If this is not provided Rankr will resolve it for you."),(0,i.kt)("h3",{id:"max-number"},(0,i.kt)("inlineCode",{parentName:"h3"},"max")," ","[","number]"),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")),(0,i.kt)("p",null,"This represents the maximum possible value the criteria will have. If this is not provided Rankr will resolve it for you."),(0,i.kt)("h3",{id:"distance-number"},(0,i.kt)("inlineCode",{parentName:"h3"},"distance")," ","[","number]"),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")),(0,i.kt)("p",null,"This represents the difference between ",(0,i.kt)("inlineCode",{parentName:"p"},"min")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"max")," for the criteria. If this is not provided Rankr will resolve it for you."),(0,i.kt)("h3",{id:"weight-number"},(0,i.kt)("inlineCode",{parentName:"h3"},"weight")," ","[","number]"),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")),(0,i.kt)("p",null,"This represents the weight for the criteria. If this is not provided Rankr will resolve it for you."),(0,i.kt)("p",null,"The sum of all of your weights should equal ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,i.kt)("p",null,"If you need to use a custom weight, you are not required to provide weights for all criterias. We will balance the rest of weights evenly. If you provide three criterias and one is weighted with ",(0,i.kt)("inlineCode",{parentName:"p"},"0.5"),", Rankr will resolve the other two to ",(0,i.kt)("inlineCode",{parentName:"p"},"0.25"),". "),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const criterias = [\n  { key: 'age', strategy: 'increasing', weight: 0.5 },\n  { key: 'height', strategy: 'increasing' }, // Rankr resolves this to `0.25`\n  { key: 'weight', strategy: 'increasing' }, // Rankr resolves this to `0.25`\n]\n")),(0,i.kt)("h3",{id:"transform-function"},(0,i.kt)("inlineCode",{parentName:"h3"},"transform")," ","[","function]"),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"transform")," option allows you to rank data types that are not supported by Rankr out of the box. The function provides you with the record, and you should return a number than can be used to automatically determine the ",(0,i.kt)("inlineCode",{parentName:"p"},"min"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"max"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"distance"),", and also parse the value for ranking."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"values"),(0,i.kt)("th",{parentName:"tr",align:null},"description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"fn(record): number")),(0,i.kt)("td",{parentName:"tr",align:null},"Use this to convert unsupported data types to a supported data type.")))),(0,i.kt)("p",null,"Lets take a look at an example. We have a list of movies and the times they're playing at the cinema. We want to go earlier in the day because the price of tickets increase at 12:00."),(0,i.kt)("p",null,"We can use a transformer to convert the ",(0,i.kt)("inlineCode",{parentName:"p"},"showtime")," property from a string date, to a number based date."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"{10-12}","{10-12}":!0},"const movies = [\n  { name: 'Shrek 3D', price: 12, showtime: '2021-10-12T13:30:00.000Z' },\n  { name: 'Star Wars', price: 10, showtime: '2021-10-12T13:45:00.000Z' },\n  { name: 'Shrek 2D', price: 10, showtime: '2021-10-12T15:15:00.000Z' },\n  { name: 'Shrek 3D', price: 17, showtime: '2021-10-12T16:15:00.000Z' },\n  { name: 'Harry Potter', price: 15, showtime: '2021-10-12T16:40:00.000Z' },\n  { name: 'Star Wars', price: 15, showtime: '2021-10-12T17:10:00.000Z' },\n]\n\nconst dateTransformer = (record) => {\n  return new Date(record.showtime).valueOf()\n}\n\nconst criterias = [\n  { key: 'price', strategy: 'decreasing' },\n  { key: 'showtime', strategy: 'decreasing', transform: dateTransformer },\n]\n\nRankr(movies, criterias)\n// [\n//   { score: 0.97, record: { name: \"Star Wars\", price: 10, showtime: \"2021-10-12T13:45:00.000Z\" } },\n//   { score: 0.86, record: { name: \"Shrek 3D\", price: 12, showtime: \"2021-10-12T13:30:00.000Z\" } },\n//   { score: 0.76, record: { name: \"Shrek 2D\", price: 10, showtime: \"2021-10-12T15:15:00.000Z\" } },\n//   { score: 0.21, record: { name: \"Harry Potter\", price: 15, showtime: \"2021-10-12T16:40:00.000Z\" } },\n//   { score: 0.14, record: { name: \"Star Wars\", price: 15, showtime: \"2021-10-12T17:10:00.000Z\" } },\n//   { score: 0.13, record: { name: \"Shrek 3D\", price: 17, showtime: \"2021-10-12T16:15:00.000Z\" } }\n// ]\n")))}m.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);
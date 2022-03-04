"use strict";(self.webpackChunkrankr=self.webpackChunkrankr||[]).push([[434],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return l}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),d=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=d(e.components);return n.createElement(c.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(t),l=a,g=u["".concat(c,".").concat(l)]||u[l]||m[l]||o;return t?n.createElement(g,i(i({ref:r},p),{},{components:t})):n.createElement(g,i({ref:r},p))}));function l(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},395:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],s={id:"advanced-usage",title:"Advanced Usage",sidebar_position:3},c="Advanced Usage",d={unversionedId:"introduction/advanced-usage",id:"version-0.2.0/introduction/advanced-usage",isDocsHomePage:!1,title:"Advanced Usage",description:"Strategies",source:"@site/versioned_docs/version-0.2.0/introduction/advanced-usage.md",sourceDirName:"introduction",slug:"/introduction/advanced-usage",permalink:"/rankr/docs/introduction/advanced-usage",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/versioned_docs/version-0.2.0/introduction/advanced-usage.md",tags:[],version:"0.2.0",lastUpdatedBy:"Westin Schepper",lastUpdatedAt:1646359363,formattedLastUpdatedAt:"3/3/2022",sidebarPosition:3,frontMatter:{id:"advanced-usage",title:"Advanced Usage",sidebar_position:3},sidebar:"version-0.2.0/tutorialSidebar",previous:{title:"Getting Started",permalink:"/rankr/docs/introduction/getting-started"},next:{title:"Strategy Concepts",permalink:"/rankr/docs/introduction/strategy-concepts"}},p=[{value:"Strategies",id:"strategies",children:[]},{value:"Transformers",id:"transformers",children:[]},{value:"Weights",id:"weights",children:[]}],m={toc:p};function u(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"advanced-usage"},"Advanced Usage"),(0,o.kt)("h2",{id:"strategies"},"Strategies"),(0,o.kt)("p",null,"Sometimes you have a more specific use-case that isn't supported by Rankr built-in strategies like tiered ranking or prioritizing a specific record."),(0,o.kt)("p",null,"Continuing the same theme found on the ",(0,o.kt)("a",{parentName:"p",href:"/docs/introduction/getting-started"},"Getting Started")," page, let's reflect back on the example of car shopping and build off of that:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const cars = [\n  { make: 'Ford', model: 'Raptor', price: 45000, safetyRating: 5, mpg: 21 },\n  { make: 'Audi', model: 'S3', price: 50000, safetyRating: 9, mpg: 29 },\n  { make: 'BMW', model: 'M3', price: 60000, safetyRating: 6, mpg: 24 },\n  { make: 'Audi', model: 'Q8RS', price: 70000, safetyRating: 10, mpg: 22 },\n  { make: 'Mercedes', model: 'AMG', price: 110000, safetyRating: 3, mpg: 18 }\n]\n\n// The criterias (low price, high gas mileage, high safety rating)\nconst criterias = [\n  { key: 'price', strategy: 'decreasing' },\n  { key: 'mpg', strategy: 'increasing' },\n  { key: 'safetyRating', strategy: 'increasing' },\n]\n\nRankr(cars, criterias)\n// [\n//   { score: 0.9267399267399267, record: { make: \"Audi\", model: \"S3\", price: 50000, safetyRating: 9, mpg: 29 },\n//   { score: 0.6596736596736597, record: { make: \"Audi\", model: \"Q8RS\", price: 70000, safetyRating: 10, mpg: 22 },\n//   { score: 0.5810855810855811, record: { make: \"BMW\", model: \"M3\", price: 60000, safetyRating: 6, mpg: 24 },\n//   { score: 0.5194805194805194, record: { make: \"Ford\", model: \"Raptor\", price: 45000, safetyRating: 5, mpg: 21 },\n//   { score: 0, record: { make: \"Mercedes\", model: \"AMG\", price: 110000, safetyRating: 3, mpg: 18 } }\n// ]\n")),(0,o.kt)("p",null,"Now, what if you really love Ford vehicles and you want to prioritize them in your ranking? This is where custom strategy functions come into play."),(0,o.kt)("p",null,"The Ford is ranked in the fourth position. Let's go ahead and add a custom strategy function and see what this changes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"{9-15,18,27}","{9-15,18,27}":!0},"const cars = [\n  { make: 'Ford', model: 'Raptor', price: 45000, safetyRating: 5, mpg: 21 },\n  { make: 'Audi', model: 'S3', price: 50000, safetyRating: 9, mpg: 29 },\n  { make: 'BMW', model: 'M3', price: 60000, safetyRating: 6, mpg: 24 },\n  { make: 'Audi', model: 'Q8RS', price: 70000, safetyRating: 10, mpg: 22 },\n  { make: 'Mercedes', model: 'AMG', price: 110000, safetyRating: 3, mpg: 18 }\n]\n\nconst makeStrategy = (car, criteria) => {\n  if (car.make === 'Ford') {\n    return criteria.weight\n  } else {\n    return 0\n  }\n}\n\nconst criterias = [\n  { key: 'make', strategy: makeStrategy },\n  { key: 'price', strategy: 'decreasing' },\n  { key: 'mpg', strategy: 'increasing' },\n  { key: 'safetyRating', strategy: 'increasing' },\n]\n\nRankr(cars, criterias)\n// [\n//   { score: 0.695054945054945, record: { make: \"Audi\", model: \"S3\", price: 50000, safetyRating: 9, mpg: 29 } },\n//   { score: 0.6396103896103896, record: { make: \"Ford\", model: \"Raptor\", price: 45000, safetyRating: 5, mpg: 21 } },\n//   { score: 0.49475524475524474, record: { make: \"Audi\", model: \"Q8RS\", price: 70000, safetyRating: 10, mpg: 22 } },\n//   { score: 0.4358141858141858, record: { make: \"BMW\", model: \"M3\", price: 60000, safetyRating: 6, mpg: 24 } },\n//   { score: 0, record: { make: \"Mercedes\", model: \"AMG\", price: 110000, safetyRating: 3, mpg: 18 } }\n// ]\n")),(0,o.kt)("p",null,"If you compare the first example to this one, you can see the Ford Raptor moved from the fourth highest, to the second highest."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For more details about strategies, read the API Reference for criteria strategies ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/criteria#strategy-string--function"},"here"),"."))),(0,o.kt)("h2",{id:"transformers"},"Transformers"),(0,o.kt)("p",null,"Like the movie, ",(0,o.kt)("em",{parentName:"p"},"but cooler.")),(0,o.kt)("p",null,"Transformers are used when you need to convert an unsupported value type to a ",(0,o.kt)("a",{parentName:"p",href:"/docs/introduction/supported-types"},"supported value type")," to be ranked."),(0,o.kt)("p",null,"We're going to set the stage with a new scenario: You need to buy plane tickets for a funeral. You need to fly out as soon as possible, but you don't want to spend too much."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const flights = [\n  { from: 'LAX', to: 'JFK', price: 275, departure: '2021-10-12T13:30:00.000Z' },\n  { from: 'LAX', to: 'JFK', price: 250, departure: '2021-10-12T13:45:00.000Z' },\n  { from: 'LAX', to: 'JFK', price: 210, departure: '2021-10-12T15:15:00.000Z' },\n  { from: 'LAX', to: 'JFK', price: 330, departure: '2021-10-12T16:10:00.000Z' },\n  { from: 'LAX', to: 'JFK', price: 320, departure: '2021-10-12T16:40:00.000Z' },\n  { from: 'LAX', to: 'JFK', price: 310, departure: '2021-10-12T17:10:00.000Z' },\n]\n\nconst dateTransformer = (record) => {\n  return new Date(record.departure).valueOf()\n}\n\nconst criterias = [\n  { key: 'price', strategy: 'decreasing' },\n  { key: 'departure', strategy: 'decreasing', transform: dateTransformer },\n]\n\nRankr(flights, criterias)\n// [\n//   { score: 0.7992424242424242, record: { from: \"LAX\", to: \"JFK\", price: 250, departure: \"2021-10-12T13:45:00.000Z\" } },\n//   { score: 0.7613636363636364, record: { from: \"LAX\", to: \"JFK\", price: 210, departure: \"2021-10-12T15:15:00.000Z\" } },\n//   { score: 0.7291666666666666, record: { from: \"LAX\", to: \"JFK\", price: 275, departure: \"2021-10-12T13:30:00.000Z\" } },\n//   { score: 0.13636363636363635, record: { from: \"LAX\", to: \"JFK\", price: 330, departure: \"2021-10-12T16:10:00.000Z\" } },\n//   { score: 0.10984848484848485, record: { from: \"LAX\", to: \"JFK\", price: 320, departure: \"2021-10-12T16:40:00.000Z\" } },\n//   { score: 0.08333333333333333, record: { from: \"LAX\", to: \"JFK\", price: 310, departure: \"2021-10-12T17:10:00.000Z\" } },\n// ]\n")),(0,o.kt)("p",null,"Great, we found the best flight to attend our funeral and not overpay."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For more details about transformers, read the API Reference for criteria transformers ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/criteria#transformer-function"},"here"),"."))),(0,o.kt)("h2",{id:"weights"},"Weights"),(0,o.kt)("p",null,"Use weights when you want to rebalance the priority of your criterias."),(0,o.kt)("p",null,"Currently Rankr will always auto resolve criteria weights evenly for you. So if you have two criterias, each will by default hold a weight of 50% each."),(0,o.kt)("p",null,"If you want to prioritize a criteria over another, you can pass in a pre-defined weight using the ",(0,o.kt)("inlineCode",{parentName:"p"},"weight")," option in the form of a decimal between ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"{15}","{15}":!0},"const flights = [\n  { from: 'LAX', to: 'JFK', price: 275, departure: '2021-10-12T13:30:00.000Z' },\n  { from: 'LAX', to: 'JFK', price: 250, departure: '2021-10-12T13:45:00.000Z' },\n  { from: 'LAX', to: 'JFK', price: 210, departure: '2021-10-12T15:15:00.000Z' },\n  { from: 'LAX', to: 'JFK', price: 330, departure: '2021-10-12T16:10:00.000Z' },\n  { from: 'LAX', to: 'JFK', price: 320, departure: '2021-10-12T16:40:00.000Z' },\n  { from: 'LAX', to: 'JFK', price: 310, departure: '2021-10-12T17:10:00.000Z' },\n]\n\nconst dateTransformer = (record) => {\n  return new Date(record.departure).valueOf()\n}\n\nconst criterias = [\n  { key: 'price', strategy: 'decreasing', weight: 0.7 },\n  { key: 'departure', strategy: 'decreasing', transform: dateTransformer },\n]\n\nRankr(flights, criterias)\n// [\n//   { score: 0.8568181818181818, record: { from: \"LAX\", to: \"JFK\", price: 210, departure: \"2021-10-12T15:15:00.000Z\" } },\n//   { score: 0.7462121212121212, record: { from: \"LAX\", to: \"JFK\", price: 250, departure: \"2021-10-12T13:45:00.000Z\" } },\n//   { score: 0.6208333333333333, record: { from: \"LAX\", to: \"JFK\", price: 275, departure: \"2021-10-12T13:30:00.000Z\" } },\n//   { score: 0.11666666666666667, record: { from: \"LAX\", to: \"JFK\", price: 310, departure: \"2021-10-12T17:10:00.000Z\" } },\n//   { score: 0.09924242424242424, record: { from: \"LAX\", to: \"JFK\", price: 320, departure: \"2021-10-12T16:40:00.000Z\" } },\n//   { score: 0.08181818181818182, record: { from: \"LAX\", to: \"JFK\", price: 330, departure: \"2021-10-12T16:10:00.000Z\" } },\n// ]\n")),(0,o.kt)("p",null,"Notice we didn't need pass in a weight for the ",(0,o.kt)("inlineCode",{parentName:"p"},"departure")," criteria. This is because weights are completely optional\u2014 If you only provide a weight for some of your criterias, we will evenly distribute the rest for you."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For more details about weights, read the API Reference for criteria weights ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/criteria#weight-number"},"here"),"."))))}u.isMDXComponent=!0}}]);
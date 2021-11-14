# Rankr

Rankr is a simple multi-criteria decision analysis (MCDA) library written in JavaScript.

![npm](https://img.shields.io/npm/v/rankr)
![license](https://img.shields.io/github/license/westinschepper/rankr)

&#x26A0; Warning
Please keep in mind this project is still in initial development as defined by [semver 2.0.0 spec item 4](https://semver.org/#spec-item-4):

>Major version zero (0.y.z) is for initial development. Anything MAY change at any time. The public API SHOULD NOT be considered stable.

## Documentation
The Rankr docs are located at [https://westinschepper.com/rankr](https://westinschepper.com/rankr):

### Introduction
- [Quick Start](https://westinschepper.com/rankr/docs/introduction/quick-start)
- [Getting Started](https://westinschepper.com/rankr/docs/introduction/getting-started)
- [Advanced Usage](https://westinschepper.com/rankr/docs/introduction/advanced-usage)
- [Strategy Concepts](https://westinschepper.com/rankr/docs/introduction/strategy-concepts)
- [Supported Types](https://westinschepper.com/rankr/docs/introduction/supported-types)

### API Reference
- [Config](https://westinschepper.com/rankr/docs/api-reference/config)
- [Criteria](https://westinschepper.com/rankr/docs/api-reference/criteria)

## Quick Start
Install with [npm](https://www.npmjs.com/package/rankr) or [yarn](https://yarnpkg.com/en/package/rankr):
```bash
# npm
npm install rankr
```
```
# yarn
yarn add rankr
```

Use with [Node.js](https://nodejs.org/en/), [Browserify](https://browserify.org/), or [webpack](https://webpack.github.io/):

```javascript
import Rankr from 'rankr'
```
```javascript
const Rankr = require('rankr');
```
## Usage
>*I'm looking for new car. low price, high gas mileage, and a high safety rating are important to me.*

```javascript
// This is your data
const cars = [
  { make: 'Ford', model: 'Raptor', price: 45000, safetyRating: 5, mpg: 21 },
  { make: 'Audi', model: 'S3', price: 50000, safetyRating: 9, mpg: 29 },
  { make: 'BMW', model: 'M3', price: 60000, safetyRating: 6, mpg: 24 },
  { make: 'Audi', model: 'Q8RS', price: 70000, safetyRating: 10, mpg: 22 },
  { make: 'Mercedes', model: 'AMG', price: 110000, safetyRating: 3, mpg: 18 }
]

// The criterias (low price, high gas mileage, high safety rating)
const criterias = [
  { key: 'price', strategy: 'decreasing' },
  { key: 'mpg', strategy: 'increasing' },
  { key: 'safetyRating', strategy: 'increasing' },
]

Rankr(cars, criterias)
// [
//   { score: 0.9267399267399267, record: { make: "Audi", model: "S3", price: 50000, safetyRating: 9, mpg: 29 },
//   { score: 0.6596736596736597, record: { make: "Audi", model: "Q8RS", price: 70000, safetyRating: 10, mpg: 22 },
//   { score: 0.5810855810855811, record: { make: "BMW", model: "M3", price: 60000, safetyRating: 6, mpg: 24 },
//   { score: 0.5194805194805194, record: { make: "Ford", model: "Raptor", price: 45000, safetyRating: 5, mpg: 21 },
//   { score: 0, record: { make: "Mercedes", model: "AMG", price: 110000, safetyRating: 3, mpg: 18 } }
// ]
```

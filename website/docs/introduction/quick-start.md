---
id: quick-start
title: Quick Start
sidebar_position: 2
---

# Quick Start

Start using Rankr in just three easy steps.

## 1. Install

**Using [`yarn`](https://yarnpkg.com/en/package/rankr):**
```bash
yarn add rankr
```

**Using [`npm`](https://www.npmjs.com/package/rankr):**
```bash
npm install rankr
```

## 2. Import

**CommonJS**
```javascript
const Rankr = require('rankr');
```

**ES Module**
```javascript
import Rankr from 'rankr'
```

## 3. Use

**Prompt:**
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

rankr(cars, criterias)
// [
//   { score: 0.9267399267399267, record: { make: "Audi", model: "S3", price: 50000, safetyRating: 9, mpg: 29 } ,
//   { score: 0.6596736596736597, record: { make: "Audi", model: "Q8RS", price: 70000, safetyRating: 10, mpg: 22 } ,
//   { score: 0.5810855810855811, record: { make: "BMW", model: "M3", price: 60000, safetyRating: 6, mpg: 24 } ,
//   { score: 0.5194805194805194, record: { make: "Ford", model: "Raptor", price: 45000, safetyRating: 5, mpg: 21 } ,
//   { score: 0, record: { make: "Mercedes", model: "AMG", price: 110000, safetyRating: 3, mpg: 18 } }
// ]
```

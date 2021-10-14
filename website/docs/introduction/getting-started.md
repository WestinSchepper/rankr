---
id: getting-started
title: Getting Started
sidebar_position: 2
---

# Getting Started
Rankr is a simple multi-criteria decision analysis (MCDA) library written in JavaScript. There are currently only two built-in criteria strategies available and the option to roll a custom solution.

:::caution
Please keep in mind this project is still in initial development as defined by [semver 2.0.0 spec item 4](https://semver.org/#spec-item-4):

>Major version zero (0.y.z) is for initial development. Anything MAY change at any time. The public API SHOULD NOT be considered stable.
:::

## &#x270B; Before we continue...
If you are more of a jump-right-in type of person, head over to the [Quick Start guide](/docs/introduction/quick-start).


## What does it do?
There are thousands of cars available and hundreds of different features to consider— price, color, heated seats, gas mileage, safety, horsepower, torque, year, etc. The list is endless. 

***How do you find the perfect car for you?***

This is where Rankr comes in. You provide your list of cars and what your priorities are, we find the best matches based on those priorities.

Let's look at an example. I'm buying a car and the things I care about are:

1. Low price
2. High Gas mileage (mpg)
3. High Safety rating

```javascript
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

According to Rankr, the best option out of our list of cars is the Audi S3.

## Try it yourself
### Install

**Using [`yarn`](https://yarnpkg.com/en/package/rankr):**
```bash
yarn add rankr
```

**Using [`npm`](https://www.npmjs.com/package/rankr):**
```bash
npm install rankr
```

### Import

**CommonJS**
```javascript
const Rankr = require('rankr');
```

**ES Module**
```javascript
import Rankr from 'rankr'
```

### Use

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

Rankr(cars, criterias)
// [
//   { score: 0.9267399267399267, record: { make: "Audi", model: "S3", price: 50000, safetyRating: 9, mpg: 29 },
//   { score: 0.6596736596736597, record: { make: "Audi", model: "Q8RS", price: 70000, safetyRating: 10, mpg: 22 },
//   { score: 0.5810855810855811, record: { make: "BMW", model: "M3", price: 60000, safetyRating: 6, mpg: 24 },
//   { score: 0.5194805194805194, record: { make: "Ford", model: "Raptor", price: 45000, safetyRating: 5, mpg: 21 },
//   { score: 0, record: { make: "Mercedes", model: "AMG", price: 110000, safetyRating: 3, mpg: 18 } }
// ]
```

---
id: advanced-usage
title: Advanced Usage
sidebar_position: 3
---

# Advanced Usage
## Strategies
Sometimes you have a more specific use-case that isn't supported by Rankr built-in strategies like tiered ranking or prioritizing a specific record.

Continuing the same theme found on the [Getting Started](/docs/introduction/getting-started) page, let's reflect back on the example of car shopping and build off of that:

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
Now, what if you really love Ford vehicles and you want to prioritize them in your ranking? This is where custom strategy functions come into play.

The Ford is ranked in the fourth position. Let's go ahead and add a custom strategy function and see what this changes:

```javascript {9-15,18,27}
const cars = [
  { make: 'Ford', model: 'Raptor', price: 45000, safetyRating: 5, mpg: 21 },
  { make: 'Audi', model: 'S3', price: 50000, safetyRating: 9, mpg: 29 },
  { make: 'BMW', model: 'M3', price: 60000, safetyRating: 6, mpg: 24 },
  { make: 'Audi', model: 'Q8RS', price: 70000, safetyRating: 10, mpg: 22 },
  { make: 'Mercedes', model: 'AMG', price: 110000, safetyRating: 3, mpg: 18 }
]

const makeStrategy = (car, criteria) => {
  if (car.make === 'Ford') {
    return criteria.weight
  } else {
    return 0
  }
}

const criterias = [
  { key: 'make', strategy: makeStrategy },
  { key: 'price', strategy: 'decreasing' },
  { key: 'mpg', strategy: 'increasing' },
  { key: 'safetyRating', strategy: 'increasing' },
]

Rankr(cars, criterias)
// [
//   { score: 0.695054945054945, record: { make: "Audi", model: "S3", price: 50000, safetyRating: 9, mpg: 29 } },
//   { score: 0.6396103896103896, record: { make: "Ford", model: "Raptor", price: 45000, safetyRating: 5, mpg: 21 } },
//   { score: 0.49475524475524474, record: { make: "Audi", model: "Q8RS", price: 70000, safetyRating: 10, mpg: 22 } },
//   { score: 0.4358141858141858, record: { make: "BMW", model: "M3", price: 60000, safetyRating: 6, mpg: 24 } },
//   { score: 0, record: { make: "Mercedes", model: "AMG", price: 110000, safetyRating: 3, mpg: 18 } }
// ]
```

If you compare the first example to this one, you can see the Ford Raptor moved from the fourth highest, to the second highest.

:::info
For more details about strategies, read the API Reference for criteria strategies [here](/docs/api-reference/criteria#strategy-string--function).
:::

## Transformers
Like the movie, *but cooler.*

Transformers are used when you need to convert an [unsupported value type](/docs/introduction/unsupported-types) to be ranked.

We're going to set the stage with a new scenario: You need to buy plane tickets for a funeral. You need to fly out as soon as possible, but you don't want to spend too much.

```javascript
const flights = [
  { from: 'LAX', to: 'JFK', price: 275, departure: '2021-10-12T13:30:00.000Z' },
  { from: 'LAX', to: 'JFK', price: 250, departure: '2021-10-12T13:45:00.000Z' },
  { from: 'LAX', to: 'JFK', price: 210, departure: '2021-10-12T15:15:00.000Z' },
  { from: 'LAX', to: 'JFK', price: 330, departure: '2021-10-12T16:10:00.000Z' },
  { from: 'LAX', to: 'JFK', price: 320, departure: '2021-10-12T16:40:00.000Z' },
  { from: 'LAX', to: 'JFK', price: 310, departure: '2021-10-12T17:10:00.000Z' },
]

const dateTransformer = (record) => {
  return new Date(record.departure).valueOf()
}

const criterias = [
  { key: 'price', strategy: 'decreasing' },
  { key: 'departure', strategy: 'decreasing', transform: dateTransformer },
]

Rankr(flights, criterias)
// [
//   { score: 0.7992424242424242, record: { from: "LAX", to: "JFK", price: 250, departure: "2021-10-12T13:45:00.000Z" } },
//   { score: 0.7613636363636364, record: { from: "LAX", to: "JFK", price: 210, departure: "2021-10-12T15:15:00.000Z" } },
//   { score: 0.7291666666666666, record: { from: "LAX", to: "JFK", price: 275, departure: "2021-10-12T13:30:00.000Z" } },
//   { score: 0.13636363636363635, record: { from: "LAX", to: "JFK", price: 330, departure: "2021-10-12T16:10:00.000Z" } },
//   { score: 0.10984848484848485, record: { from: "LAX", to: "JFK", price: 320, departure: "2021-10-12T16:40:00.000Z" } },
//   { score: 0.08333333333333333, record: { from: "LAX", to: "JFK", price: 310, departure: "2021-10-12T17:10:00.000Z" } },
// ]
```
Great, we found the best flight to attend our funeral and not overpay.

:::info
For more details about transformers, read the API Reference for criteria transformers [here](/docs/api-reference/criteria#transformer-function).
:::

## Weights
Use weights when you want to rebalance the priority of your criterias.

Currently Rankr will always auto resolve criteria weights evenly for you. So if you have two criterias, each will by default hold a weight of 50% each.

If you want to prioritize a criteria over another, you can pass in a pre-defined weight using the `weight` option in the form of a decimal between `0` and `1`:

```javascript {15}
const flights = [
  { from: 'LAX', to: 'JFK', price: 275, departure: '2021-10-12T13:30:00.000Z' },
  { from: 'LAX', to: 'JFK', price: 250, departure: '2021-10-12T13:45:00.000Z' },
  { from: 'LAX', to: 'JFK', price: 210, departure: '2021-10-12T15:15:00.000Z' },
  { from: 'LAX', to: 'JFK', price: 330, departure: '2021-10-12T16:10:00.000Z' },
  { from: 'LAX', to: 'JFK', price: 320, departure: '2021-10-12T16:40:00.000Z' },
  { from: 'LAX', to: 'JFK', price: 310, departure: '2021-10-12T17:10:00.000Z' },
]

const dateTransformer = (record) => {
  return new Date(record.departure).valueOf()
}

const criterias = [
  { key: 'price', strategy: 'decreasing', weight: 0.6 },
  { key: 'departure', strategy: 'decreasing', transform: dateTransformer },
]

Rankr(flights, criterias)
// [
//   { score: 0.7992424242424242, record: { from: "LAX", to: "JFK", price: 250, departure: "2021-10-12T13:45:00.000Z" } },
//   { score: 0.7613636363636364, record: { from: "LAX", to: "JFK", price: 210, departure: "2021-10-12T15:15:00.000Z" } },
//   { score: 0.7291666666666666, record: { from: "LAX", to: "JFK", price: 275, departure: "2021-10-12T13:30:00.000Z" } },
//   { score: 0.13636363636363635, record: { from: "LAX", to: "JFK", price: 330, departure: "2021-10-12T16:10:00.000Z" } },
//   { score: 0.10984848484848485, record: { from: "LAX", to: "JFK", price: 320, departure: "2021-10-12T16:40:00.000Z" } },
//   { score: 0.08333333333333333, record: { from: "LAX", to: "JFK", price: 310, departure: "2021-10-12T17:10:00.000Z" } }, 
// ]
```

Notice we didn't need pass in a weight for the `departure` criteria. This is because weights are completely optional— If you only provide a weight for some of your criterias, we will evenly distribute the rest for you.

:::info
For more details about weights, read the API Reference for criteria weights [here](/docs/api-reference/criteria#weight-number).
:::

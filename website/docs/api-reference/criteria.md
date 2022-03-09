---
sidebar_position: 2
---

# Criteria
Criterias are where you define which properties to include in your ranking algorithm and how they should be ranked.

criterias are incredibly flexible and allow you to calculate ranks any way you want. We tried to keep this as minimal as possible to allow you the freedom and flexibility to make criterias work best for you, while also providing some common out-of-the-box solutions.

## Options
import TOCInline from "@theme/TOCInline"

<TOCInline toc={toc[toc.length - 1].children}/>

## Overview
```javascript
const criteria = {
  // key: string
  // [optional] if you provide a strategy function
  // this acts as the criteria name and the property used to rank your records. Can be a path for nested attributes.
  key: 'price',

  // strategy: 'increasing' | 'decreasing' | function(record, criteria) => criteriaRank
  // [required]
  // the strategy for ranking. Always provide a built strategy or a function.
  strategy: 'increasing',

  // min: number
  // [optional] If not provided, we will find this for you.
  // this is the minimum value for this criteria.
  min: 10,

  // max: number
  // [optional] If not provided, we will find this for you.
  // this is the maximum value for this criteria.
  max: 25,

  // distance: number
  // [optional] If not provided, we will find this for you.
  // this should be `max - min` and used to calculate ranks.
  distance: 15,

  // weight: number[0...1]
  // [optional] If not provided, we will find this for you.
  // Must be between 0 and 1. If not provided, all criterias will be weighted evenly.
  weight: 0.35,

  // transform: function(record, criteria) => number
  // [optional]
  // When ranking an unsupported data type, use this to convert it to a number.
  transform: (record, criteria) => new Date(record[criteria.key]).valueOf()
}
```

## Defaults
Currently criterias have no default options.

## Reference
### `key` \[string]

Default: `undefined`

Use the `key` option to define the target property for a criteria. The key should correspond to a property in the records you provide. You can also pass in an object path for nested attributes.

```javascript
// String path for nested attributes
const criteria = {
  key: 'path.to.object[5].value'
}
```

:::info
When using the `key` option, keep in mind: Rankr only has built-in support for `numbers` and `booleans`. If you need to rank anything else, take a look at the [`transform`](criteria#transform-function) option.
:::


### `strategy` \[string | function]

Default: `undefined`

Think of a `strategy` as a formula to calculate the rank for that criteria. Rankr comes with two built in strategies out of the box, `increasing` and `decreasing`. These should meet most of your needs but if it doesn't you can always use a custom function.

| values                                | description                                                                  |
| ------------------------------------- | ---------------------------------------------------------------------------- |
| `'increasing'`                        | Rank higher values higher (as the value increases, the rank increases)       |
| `'decreasing'`                        | Rank lower values higher (as the value decreases, the rank increases)        |
| `fn(record, criteria): number` | When you need a custom formula. You should return a decimal between `0` and `criteria.weight`. |

#### Strategy functions
Though this is not enforced, custom strategy functions should return a number between `0` and the `criteria.weight` value, unless if you are okay with ranks that exceed `1`. This was not built with multipliers in mind, so use at your own risk.

Lets look at an example of a strategy function. In this scenario, we want to rank people based on their age group instead of their age relative to all other ages.

Persons 50 and older receive the whole rank, persons aged 25 to 49 receive half, and persons less than 25 receive nothing.

```javascript {8-16}
const people = [
  { name: "John", age: 65 },
  { name: "Bill", age: 44 },
  { name: "Jill", age: 32 },
  { name: "Ron", age: 2 }
]

const rankByAgeGroup = (record, criteria) => {
  if (record.age >= 50) {
    return criteria.weight
  } else if (record.age >= 25) {
    return criteria.weight / 2
  } else {
    return 0
  }
}

const customCriterias = [
  { strategy: rankByAgeGroup }
]

const builtInCriterias = [
  { key: 'age', strategy: 'increasing' }
]

Rankr(people, customCriterias)
// [
//   { score: 1, record: { name: "John", age: 65 } },
//   { score: 0.5, record: { name: "Bill", age: 44 } },
//   { score: 0.5, record: { name: "Jill", age: 32 } },
//   { score: 0, record: { name: "Ron", age: 2 } }
// ]

Rankr(people, builtInCriterias)
// [
//   { score: 1, record: { name: "John", age: 65 } },
//   { score: 0.67, record: { name: "Bill", age: 44 } },
//   { score: 0.48, record: { name: "Jill", age: 32 } },
//   { score: 0, record: { name: "Ron", age: 2 } }
// ]
```

As you can see, custom strategy functions are very flexible and expose the entire record and the entire criteria for your convenience.

:::info
Remember: custom strategy functions should return a number between 0 and the `criteria.weight` value for the best results.
:::

### `min` \[number]

Default: `undefined`

This represents the minimum possible value the criteria will have. If this is not provided Rankr will resolve it for you.

### `max` \[number]

Default: `undefined`

This represents the maximum possible value the criteria will have. If this is not provided Rankr will resolve it for you.

### `distance` \[number]

Default: `undefined`

This represents the difference between `min` and `max` for the criteria. If this is not provided Rankr will resolve it for you.

### `weight` \[number]

Default: `undefined`

This represents the weight for the criteria. If this is not provided Rankr will resolve it for you.

The sum of all of your weights should equal `1`.

If you need to use a custom weight, you are not required to provide weights for all criterias. We will balance the rest of weights evenly. If you provide three criterias and one is weighted with `0.5`, Rankr will resolve the other two to `0.25`. 

For example:

```javascript
const criterias = [
  { key: 'age', strategy: 'increasing', weight: 0.5 },
  { key: 'height', strategy: 'increasing' }, // Rankr resolves this to `0.25`
  { key: 'weight', strategy: 'increasing' }, // Rankr resolves this to `0.25`
]
```

### `transform` \[function]

Default: `undefined`

The `transform` option allows you to rank data types that are not supported by Rankr out of the box. The function provides you with the record and the criteria and must return a number.

There are also some built-in transformers we expose to you for convenience. Find out more in the [Built-in Transformers](/docs/api-reference/built-in-transformers) section of the documentation.

| values                         | description                                                          |
|--------------------------------|----------------------------------------------------------------------|
| `fn(record, criteria): number` | Use this to convert unsupported data types to a supported data type. |

Lets take a look at an example. We have a list of movies and the times they're playing at the cinema. We want to go earlier in the day because the price of tickets increase at 12:00.

We can use a transformer to convert the `showtime` property from a string date, to a number based date.

```javascript {10-12}
const movies = [
  { name: 'Shrek 3D', price: 12, showtime: '2021-10-12T13:30:00.000Z' },
  { name: 'Star Wars', price: 10, showtime: '2021-10-12T13:45:00.000Z' },
  { name: 'Shrek 2D', price: 10, showtime: '2021-10-12T15:15:00.000Z' },
  { name: 'Shrek 3D', price: 17, showtime: '2021-10-12T16:15:00.000Z' },
  { name: 'Harry Potter', price: 15, showtime: '2021-10-12T16:40:00.000Z' },
  { name: 'Star Wars', price: 15, showtime: '2021-10-12T17:10:00.000Z' },
]

const dateTransformer = (record, criteria) => {
  return new Date(record[criteria.key]).valueOf()
}

const criterias = [
  { key: 'price', strategy: 'decreasing' },
  { key: 'showtime', strategy: 'decreasing', transform: dateTransformer },
]

Rankr(movies, criterias)
// [
//   { score: 0.97, record: { name: "Star Wars", price: 10, showtime: "2021-10-12T13:45:00.000Z" } },
//   { score: 0.86, record: { name: "Shrek 3D", price: 12, showtime: "2021-10-12T13:30:00.000Z" } },
//   { score: 0.76, record: { name: "Shrek 2D", price: 10, showtime: "2021-10-12T15:15:00.000Z" } },
//   { score: 0.21, record: { name: "Harry Potter", price: 15, showtime: "2021-10-12T16:40:00.000Z" } },
//   { score: 0.14, record: { name: "Star Wars", price: 15, showtime: "2021-10-12T17:10:00.000Z" } },
//   { score: 0.13, record: { name: "Shrek 3D", price: 17, showtime: "2021-10-12T16:15:00.000Z" } }
// ]
```

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
  // this acts as the criteria name and the property used to rank your records.
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

  // transform: function(record) => number
  // [optional]
  // When ranking an unsupported data type, use this to convert it to a number.
  transform: (record) => new Date(record.date).valueOf()
}
```

## Defaults
Currently criterias have no default options.

## Reference
### `key` \[string]

Default: `undefined`

Use the `key` option to define the target property for this criteria. This should correspond to a property in the records you provide.

Note: Currently this only supports properties at a depth of one. If you need to rank based on a multi-depth property, use the [`transform`](criteria#transform-function) option.

| values   | description                                                         |
| -------- | ------------------------------------------------------------------- |
| `'desc'` | returns records in descending order (highest score to lowest score) |
| `'asc'`  | returns records in ascending order (lowest score to highest score)  |
| `null`   | returns records in the same order they were provided.               |

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

```javascript
const people = [
  { "name": "John", "age": 65 },
  { "name": "Bill", "age": 44 },
  { "name": "Jill", "age": 32 },
  { "name": "Ron", "age": 2 }
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

rankr(people, customCriterias)
// [
//   { "score": 1, "record": { "name": "John", "age": 65 } },
//   { "score": 0.5, "record": { "name": "Bill", "age": 44 } },
//   { "score": 0.5, "record": { "name": "Jill", "age": 32 } },
//   { "score": 0, "record": { "name": "Ron", "age": 2 } }
// ]

rankr(people, builtInCriterias)
// [
//   { "score": 1, "record": { "name": "John", "age": 65 } },
//   { "score": 0.67, "record": { "name": "Bill", "age": 44 } },
//   { "score": 0.48, "record": { "name": "Jill", "age": 32 } },
//   { "score": 0, "record": { "name": "Ron", "age": 2 } }
// ]
```

As you can see, custom strategy functions are very flexible and expose the entire record and the entire criteria for your convenience.

### `min` \[number]

Default: `undefined`

This represents the minimum possible value the criteria will have. If this is not provided we will figure out this value for you.

### `max` \[number]

Default: `undefined`

This represents the maximum possible value the criteria will have. If this is not provided we will figure out this value for you.

### `distance` \[number]

Default: `undefined`

This represents the difference between `min` and `max` for the criteria. If this is not provided we will figure out this value for you.

### `weight` \[number]

Default: `undefined`

This represents the weight for the criteria. If this is not provided we will figure out this value for you.

All of your weights should not exceed `1`, so if you are providing custom weights for all criterias ensure they sum to `1` or less.

If you need to use a custom weight, you are not required to provide weights for all criterias. We will balance the rest of weights evenly. For example:

```javascript
const criterias = [
  { key: 'age', strategy: 'increasing', weight: 0.5 },
  { key: 'height', strategy: 'increasing', }, // this will have a weight of `0.25`
  { key: 'weight', strategy: 'increasing', }, // this will have a weight of `0.25`
]
```

### `transform` \[function]

Default: `undefined`

This represents the difference between `min` and `max` for the criteria. If this is not provided we will figure out this value for you.

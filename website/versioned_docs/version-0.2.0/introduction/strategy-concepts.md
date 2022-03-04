---
id: strategy-concepts
title: Strategy Concepts
sidebar_position: 4
---

# Strategy Concepts

## Increasing
The increasing strategy rescales the criteria values using [min-max normalization](https://en.wikipedia.org/wiki/Feature_scaling#Rescaling_(min-max_normalization)) to determine its score, then multiplies it by it's weight. This typically returns a value between `0` and `1`.

>As the input increases, the score increases.

$$
score = weight(\frac{x_i-min(x)}{max(x)-min(x)})
$$

$max(x)$ - represents the maximum value found for the specified critera in your data set.

$min(x)$ - represents the maximum value found for the specified critera in your data set.

Example:

```javascript
const min = 50
const max = 60
const xi = 53
const weight = 0.5
const score = weight * (xi - min) / (max - min)

console.log(score) // 0.15
```

## Decreasing
The decreasing strategy rescales the criteria values using ***reversed*** [min-max normalization](https://en.wikipedia.org/wiki/Feature_scaling#Rescaling_(min-max_normalization)) to determine its score, then multiplies it by it's weight. This typically returns a value between `0` and `1`.

>As the input decreases, the score increases.

$$
score = weight(\frac{max(x)-x_i}{max(x)-min(x)})
$$

$max(x)$ - represents the maximum value found for the specified critera in your data set.

$min(x)$ - represents the maximum value found for the specified critera in your data set.

Example:

```javascript
const min = 50
const max = 60
const xi = 53
const weight = 0.5
const score = weight * (max - xi) / (max - min)

console.log(score) // 0.35
```

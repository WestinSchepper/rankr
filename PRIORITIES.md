# Rankr

## Priorities
1. Ability to have relative ranking of multiple number based criterias.
2. Option to choose increasing model or decreasing model.

## Features
List of all features to be done eventually.

### multiple criteria ranking
Ability to have ranking based on multiple criterias.

### multiple critera ranking strategies
Ability to rank using increasing, decreasing, binary, constant, timeseries, custom.

## Custom weighting
Ability to pass in custom weights in the criteria configuration.

```javascript
// All weights should sum to 1.0
const criterias = {
  a: { weight: 0.3 },
  b: { weight: 0.3 },
  c: { weight: 0.4 },
}
```

## Smart weighting
Ability to auto weight criterias that do not have a custom weight defined.

```javascript
// All weights should sum to 1.0
const criterias = {
  a: { weight: 0.3 },
  b: { weight: 0.35 }, // auto-weighted
  c: { weight: 0.35 }, // auto-weighted
}
```

## Support for nested criterias
Ability to have nested criteries.

## Multiple formats
Ability to provided array index based ranking and object/key based ranking.

## Brain dump
### Ranking algorithm
Thoughts regarding ranking algorithms and different scoring models based on different scenarios.

**Supported types:** numbers, booleans, strings, dates, functions

**Criteria types:** increasing, decreasing, binary, constant, timeseries, custom

### Criteria types explained
**Increasing:** as the input increases, the output increases. (Higher criteria value equals higher score)

**Decreasing**: as the input increases, the output decreases. (Higher criteria value equals lower score)

**Constant**: as the input increases, the output is the same. (Always the same score) this is inherent by not including the criteria in the criteria set.

**Binary**: as the input varies, the output is always a or b. (Always returns criteria score or zero)

**Custom**: as the input varies, the output varies. (Custom predicate)

### Simple multiple criteria ranking algorithm.
The general approach here is to divide each criteria value by the max value in that criteria and multiply it by the criteria weight. Then sum all of the criteria scores to get a final score. The formula to get a simple criteria weight is one divided by the number of criteria’s. This approach works so well because it gives you a zero to one range of possible scores, easily allowing you to convert it to a percentage making the math involved incredibly simple.

```
Criteria Weight(CW) = 1 ÷ size(Criteria’s)
Max Criteria Value(MCV) = max(Criteria’s)
Criteria(C)
Criteria Value(CV)
Criteria Weight(CW)
Customer Criteria Weight(CCW)
Criteria Score(CS) =
    Increasing: (CV ÷ max(CV)) x CW
    Decreasing: (min(CV) ÷ CV)) x CW
    Constant: CW | Custom Weight
    Binary: cond(C) ? CW | CCW : 0
    Custom: predicate(C) CW | CCW
Final Score = sum(CS)
```

This becomes a little more complicated since in some circumstances we want criteria scores to increase, as criteria values decrease. The formula for this scenario is the same as above, except you subtract the CS from one before multiplying by the CW.

### Example
We want to rank cars based on two preferences: low cost (decreasing), high mpg (increasing).

### Data set
Car 1: $100k, 25mpg
Car 2 $80k, 17mpg
Car 3: $60k, 22mpg
Car 4: $40k, 12mpg
Car 5: $20k, 18mpg

### Derived data from data set
Max price: $100k
Max mpg: 25
Criteria weight: 0.5 (1 ÷ 2)

### Logic
Car 1:
Price score: (1 - (100 ÷ 100)) * 0.5 = 0
Mpg score: (25 ÷ 25) * 0.5 = 0.5
Score: 0.5

Car 2:
Price score: (1 - (80 ÷ 100)) * 0.5 = 0.1
Mpg score: (17 ÷ 25) * 0.5 = 0.34
Score: 0.44

Car 3:
Price score: (1 - (60 ÷ 100)) * 0.5 = 0.2
Mpg score: (22 ÷ 25) * 0.5 = 0.44
Score: 0.64

Car 4:
Price score: (1 - (40 ÷ 100)) * 0.5 = 0.3
Mpg score: (12 ÷ 25) * 0.5 = 0.24
Score: 0.54

Car 5:
Price score: (1 - (20 ÷ 100)) * 0.5 = 0.4
Mpg score: (18 ÷ 25) * 0.5 = 0.36
Score: 0.76

### Output
Car 5, car 3, car 4, car 1, car 2

## TODO's
### Criteria
#### Types
1. numbers ✅
2. booleans ✅
3. strings
4. dates

#### Properties
1. key: string ✅
2. strategy: string<'increasing'> ✅
3. strategy: string<'decreasing'> ✅
4. ~~strategy: string<'binary'>~~ boolean support solves this
5. ~~strategy: string<'passing'> (apply criteria weight if truthy) ✅~~ boolean support solves this
6. ~~strategy: string<'failing'> (apply criteria weight if falsy) ✅~~ boolean support solves this
7. strategy: string<'timeSeries'>
8. strategy: function<(record, criteria): criteraScore> ✅
9. weight?: decimal<0..1> ✅
10. min?: number ✅
11. max?: number ✅

### Config
#### Properties
1. sort?: string<'asc'> ✅
2. sort?: string<'desc'> ✅
3. timeSeries?: boolean
4. start?: date
5. end?: date

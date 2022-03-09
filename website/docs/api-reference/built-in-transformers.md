---
sidebar_position: 3
---

# Built-in Transformers
Rankr exposes a few built-in transformers for convenience. When using built-in transformers, you must provide a key in your criteria.

If you need a custom solution not captured here, check the [`transform`](/docs/api-reference/criteria#transform-function) documentation in the API Reference.

## Reference
### `dateTransformer`
The date transformer converts date strings to unix timestamps for accurate scoring.

```javascript
import Rankr, { dateTransformer } from 'rankr'

const movies = [
  { id: 1, name: 'Airbud', releaseDate: 'Wed, 15 Mar 2006 05:00:00 GMT' },
  { id: 2, name: 'Transformers', releaseDate: 'Sat Aug 11 2012 00:00:00 GMT-0400 (Eastern Daylight Time)' },
  { id: 3, name: 'Shrek 3D', releaseDate: '2010-06-21T05:00:00.000Z' },
]

const criterias = [
  { key: 'releaseDate', strategy: 'increasing', transform: dateTransformer }
]

Rankr(movies, criterias)
[
  { score: 1, record: { id: 2, name: "Transformers", releaseDate: "Sat Aug 11 2012 00:00:00 GMT-0400 (Eastern Daylight Time)" } },
  { score: 0.66596657351868, record: { id: 3, name: "Shrek 3D", releaseDate: "2010-06-21T05:00:00.000Z" } },
  { score: 0, record: { id: 1, name: "Airbud", releaseDate: "Wed, 15 Mar 2006 05:00:00 GMT" } }
]
```

### `booleanTransformer`
The boolean transformer converts booleans to integers. Rankr automatically detects and convert booleans using this same method. There is no need to provide this transformer for booleans.

### `numberTransformer`
The number transformer converts numbers to integers. Rankr automatically detects and convert numbers using this same method. There is no need to provide this transformer for numbers.

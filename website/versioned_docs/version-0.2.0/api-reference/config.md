---
sidebar_position: 1
---

# Config
The config object is completely optional and currently only provides a property to control sorting.

## Options
import TOCInline from "@theme/TOCInline"

<TOCInline toc={toc[toc.length - 1].children}/>

## Overview
```javascript
const config = {
  sort: 'desc' // 'asc' | 'desc' | null, default: 'desc'
}
```

## Defaults
This is an example of the default config options if no config object is provided.

```javascript
const defaultConfig = {
  sort: 'desc'
}
```

## Reference
### `sort` \[string | null]

Default: `'desc'`

The sort option allows you to specify the order your records are returned in. If want to handle this yourself outside of Rankr, pass in `null`.

| values   | description                                                         |
|----------|---------------------------------------------------------------------|
| `'desc'` | returns records in descending order (highest score to lowest score) |
| `'asc'`  | returns records in ascending order (lowest score to highest score)  |
| `null`   | returns records in the same order they were provided.               |

import cars from './data.js'
import Rankr from './src/index.js'

/**
 * Criteria:
 *   key: string
 *   strategy?: string<'increasing' | 'decreasing'> | function = 'increasing'
 *   weight?: decimal = calculated
 *   min?: number = calculated
 *   max?: number = calculated
 */
const criterias = [
  { strategy: (record, criteria) => record.make.length === 4 ? criteria.weight : 0 },
  { key: 'price', strategy: 'decreasing' },
  { key: 'rating', strategy: 'increasing' },
  { key: 'mpg', strategy: 'increasing' },
  { key: 'available', strategy: 'increasing' },
  {
    key: 'releaseDate',
    strategy: 'increasing',
    transform: (record) => new Date(record.releaseDate).valueOf(),
    weight: 0.16666666666666666,
    min: 1167624000000,
    max: 1609473600000,
    distance: 441849600000
  },
]

/**
 * Config:
 *   sort?: string<'asc' | 'desc'> = 'desc'
 */
const config = {
  sort: 'desc'
}

let rankr = Rankr(cars, criterias, config)

console.table(rankr.result().map(({ score, record }) => ({ score, record: record.model })))

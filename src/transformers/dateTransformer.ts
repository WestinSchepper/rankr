import { Record, Criteria } from '../types'
import get from 'lodash.get'

function dateTransformer(record: Record, criteria: Criteria): number {
  const date = new Date(get(record, criteria.key)).valueOf()
  
  if (isNaN(date)) {
    return 0
  } else {
    return date
  }
}

export default dateTransformer

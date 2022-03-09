import { Record, Criteria } from '../types'
import get from 'lodash.get'

function numberTransformer(record: Record, criteria: Criteria): number {
  return get(record, criteria.key)
}

export default numberTransformer

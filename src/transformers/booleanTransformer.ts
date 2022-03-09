import { Record, Criteria, Transformer } from '../types'
import get from 'lodash.get'

function booleanTransformer(record: Record, criteria: Criteria): number {
  return get(record, criteria.key) === true ? 1 : 0
}

export default booleanTransformer

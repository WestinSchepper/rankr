import booleanTransformer from '../transformers/booleanTransformer'
import numberTransformer from '../transformers/numberTransformer'
import { Record, Criteria } from '../types'
import isFunction from './isFunction'
import isBoolean from './isBoolean'
import isNumber from './isNumber'
import get from 'lodash.get'

function parseRecordCriteriaValue(record: Record, criteria: Criteria): number {
  if (isFunction(criteria.transform)) {
    return criteria.transform(record, criteria)
  }

  const recordValue = get(record, criteria.key)

  if (isNumber(recordValue)) {
    return numberTransformer(record, criteria)
  }

  if (isBoolean(recordValue)) {
    return booleanTransformer(record, criteria)
  }
}

export default parseRecordCriteriaValue

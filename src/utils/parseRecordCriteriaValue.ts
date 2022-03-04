import isBoolean from './isBoolean'
import isFunction from './isFunction'
import isNumber from './isNumber'
import get from 'lodash.get'
import { Record, Criteria } from '../types'

function parseRecordCriteriaValue(record: Record, criteria: Criteria): number {
  const { key, transform } = criteria

  if (isFunction(transform)) {
    return transform(record)
  }

  if (isNumber(get(record, key))) {
    return get(record, key)
  }

  if (isBoolean(get(record, key))) {
    return get(record, key) === true ? 1 : 0
  }
}

export default parseRecordCriteriaValue

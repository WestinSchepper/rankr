import isBoolean from './isBoolean'
import isFunction from './isFunction'
import isNumber from './isNumber'
import { Record, Criteria } from '../types'

function parseRecordCriteriaValue(record: Record, criteria: Criteria): number {
  const { key, transform } = criteria

  if (isFunction(transform)) {
    return transform(record)
  }

  if (isNumber(record[key])) {
    return record[key]
  }

  if (isBoolean(record[key])) {
    return record[key] === true ? 1 : 0
  }
}

export default parseRecordCriteriaValue

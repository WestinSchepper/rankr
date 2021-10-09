import isBoolean from './isBoolean.js'
import isFunction from './isFunction.js'
import isNumber from './isNumber.js'

function parseRecordCriteraValue(record, criteria) {
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

export default parseRecordCriteraValue

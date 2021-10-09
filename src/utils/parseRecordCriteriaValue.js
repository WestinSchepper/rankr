import isFunction from './isFunction.js'

function parseRecordCriteraValue(record, criteria) {
  const { key, type, transform } = criteria

  if (isFunction(transform)) {
    return transform(record)
  }

  if (type === 'number') {
    return record[key]
  }

  if (type === 'boolean') {
    return record[key] === true ? 1 : 0
  }
}

export default parseRecordCriteraValue

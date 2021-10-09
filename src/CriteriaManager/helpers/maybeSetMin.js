import isUndefined from "../../utils/isUndefined.js"
import parseRecordCriteriaValue from "../../utils/parseRecordCriteriaValue.js"

function maybeSetMin(criteria, record) {
  const recordCriteriaValue = parseRecordCriteriaValue(record, criteria)

  if (isUndefined(criteria.min) || recordCriteriaValue < criteria.min) {
    criteria.min = recordCriteriaValue
  }
}

export default maybeSetMin

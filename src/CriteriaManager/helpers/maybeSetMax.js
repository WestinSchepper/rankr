import isUndefined from "../../utils/isUndefined.js"
import parseRecordCriteriaValue from "../../utils/parseRecordCriteriaValue.js"

function maybeSetMax(criteria, record) {
  const recordCriteriaValue = parseRecordCriteriaValue(record, criteria)

  if (isUndefined(criteria.max) || recordCriteriaValue > criteria.max) {
    criteria.max = recordCriteriaValue
  }
}

export default maybeSetMax

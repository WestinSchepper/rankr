import isFunction from '../../utils/isFunction.js'
import isUndefined from '../../utils/isUndefined.js'
import parseRecordCriteriaValue from '../../utils/parseRecordCriteriaValue.js'

function resolveMinMaxDistance(records, criteria) {
  for (let record of records) {
    let recordCriteriaValue = parseRecordCriteriaValue(record, criteria)

    if (isUndefined(criteria.max) || recordCriteriaValue > criteria.max) {
      criteria.max = recordCriteriaValue
    }

    if (isUndefined(criteria.min) || recordCriteriaValue < criteria.min) {
      criteria.min = recordCriteriaValue
    }
  }

  const distance = criteria.max - criteria.min

  if (!isNaN(distance)) {
    criteria.distance = distance
  }

  console.log(criteria);
}

export default resolveMinMaxDistance

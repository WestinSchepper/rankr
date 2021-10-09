import isBoolean from '../../utils/isBoolean.js'
import isNumber from '../../utils/isNumber.js'
import isFunction from '../../utils/isFunction.js'

import prepareNumber from './prepareNumber.js'
import prepareBoolean from './prepareBoolean.js'
import prepareFunction from './prepareFunction.js'
import resolveWeight from './resolveWeight.js'
import resolveMinMaxDistance from './resolveMinMaxDistance.js'

function configureCriterias(records, criterias) {
  for (let criteria of criterias) {
    const firstRecordCriteriaValue = records[0][criteria.key]

    if (isNumber(firstRecordCriteriaValue)) {
      prepareNumber(criteria, firstRecordCriteriaValue)
    }

    if (isBoolean(firstRecordCriteriaValue)) {
      prepareBoolean(criteria)
    }

    if (isFunction(criteria.strategy)) {
      prepareFunction(criteria)
    }

    resolveWeight(criterias, criteria)
    resolveMinMaxDistance(records, criteria)
  }

  return criterias
}

export default configureCriterias

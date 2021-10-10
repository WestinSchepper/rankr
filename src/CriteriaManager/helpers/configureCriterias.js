import allValuesProvided from './allValuesProvided.js'
import maybeSetDistance from './maybeSetDistance.js'
import resolveWeights from './resolveWeights.js'
import maybeSetMin from './maybeSetMin.js'
import maybeSetMax from './maybeSetMax.js'

function configureCriterias(records, criterias) {
  resolveWeights(criterias)

  for (let criteria of criterias) {
    if (allValuesProvided(criteria)) continue

    for (let record of records) {
      maybeSetMin(criteria, record)
      maybeSetMax(criteria, record)
    }

    maybeSetDistance(criteria)
  }
}

export default configureCriterias

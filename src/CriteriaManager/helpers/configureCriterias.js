import maybeSetWeight from './maybeSetWeight.js'
import maybeSetMin from './maybeSetMin.js'
import maybeSetMax from './maybeSetMax.js'
import maybeSetDistance from './maybeSetDistance.js'
import allValuesProvided from './allValuesProvided.js'

function configureCriterias(records, criterias) {
  for (let criteria of criterias) {
    if (allValuesProvided(criteria)) continue

    maybeSetWeight(criteria, criterias.length)

    for (let record of records) {
      maybeSetMin(criteria, record)
      maybeSetMax(criteria, record)
    }

    maybeSetDistance(criteria)
  }
}

export default configureCriterias

import allValuesProvided from './allValuesProvided'
import maybeSetDistance from './maybeSetDistance'
import resolveWeights from './resolveWeights'
import maybeSetMin from './maybeSetMin'
import maybeSetMax from './maybeSetMax'
import { Criteria, Record } from '../../types'

function configureCriterias(records: Record[], criterias: Criteria[]): void {
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

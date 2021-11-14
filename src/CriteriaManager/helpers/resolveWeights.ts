import Big from 'big.js'
import { Criteria } from '../../types'

function resolveWeights(criterias: Criteria[]): void {
  const unresolvedCriterias: Criteria[] = []
  let remainder = Big(1)

  for (let criteria of criterias) {
    if (criteria.weight) {
      remainder = remainder.minus(criteria.weight)
    } else {
      unresolvedCriterias.push(criteria)
    }
  }

  const distributedWeight = remainder.div(unresolvedCriterias.length).toNumber()

  for (let criteria of unresolvedCriterias) {
    criteria.weight = distributedWeight
    remainder = remainder.minus(criteria.weight)
  }
}

export default resolveWeights

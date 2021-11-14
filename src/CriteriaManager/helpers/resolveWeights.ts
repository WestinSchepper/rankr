import { Criteria } from '../../types'

function resolveWeights(criterias: Criteria[]): void {
  const unresolvedCriterias: Criteria[] = []
  let remainder = 1

  for (let criteria of criterias) {
    if (criteria.weight) {
      remainder = remainder - criteria.weight
    } else {
      unresolvedCriterias.push(criteria)
    }
  }

  const distributedWeight = remainder / unresolvedCriterias.length

  for (let criteria of unresolvedCriterias) {
    criteria.weight = distributedWeight
    remainder = remainder - criteria.weight
  }
}

export default resolveWeights

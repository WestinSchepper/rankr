import { Criteria } from '../../types'

function scoreIncreasing(criteria: Criteria, recordValue: number): number {
  const { min, distance, weight } = criteria
  const criteriaScore = recordValue - ((min / distance) * weight)

  return criteriaScore
}

export default scoreIncreasing

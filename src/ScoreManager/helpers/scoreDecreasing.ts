import { Criteria } from '../../types'

function scoreDecreasing(criteria: Criteria, recordValue: number): number {
  const { max, distance, weight } = criteria
  const criteriaScore = max - ((recordValue / distance) * weight)
  
  return criteriaScore
}

export default scoreDecreasing

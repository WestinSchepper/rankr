import Big from 'big.js'
import { Criteria } from '../../types'

function scoreIncreasing(criteria: Criteria, recordValue: number): number {
  const { min, distance, weight } = criteria
  const criteriaScore = Big(recordValue).minus(min).div(distance).times(weight)

  return criteriaScore.toNumber()
}

export default scoreIncreasing

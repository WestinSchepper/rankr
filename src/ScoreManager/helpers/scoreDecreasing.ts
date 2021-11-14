import Big from 'big.js'
import { Criteria } from '../../types'

function scoreDecreasing(criteria: Criteria, recordValue: number): number {
  const { max, distance, weight } = criteria
  const criteriaScore = Big(max).minus(recordValue).div(distance).times(weight)
  
  return criteriaScore.toNumber()
}

export default scoreDecreasing

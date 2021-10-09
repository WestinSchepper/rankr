import Big from 'big.js'

function scoreDecreasing(criteria, recordValue) {
  const { max, distance, weight } = criteria
  const criteriaScore = Big(max).minus(recordValue).div(distance).times(weight)
  
  return criteriaScore.toNumber()
}

export default scoreDecreasing

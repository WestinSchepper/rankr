import Big from 'big.js'

function scoreIncreasing(criteria, recordValue) {
  const { min, distance, weight } = criteria
  const criteriaScore = Big(recordValue).minus(min).div(distance).times(weight)

  return criteriaScore.toNumber()
}

export default scoreIncreasing

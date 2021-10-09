import Big from 'big.js'

function maybeSetWeight(criteria, criteriaCount) {
  criteria.weight = criteria.weight ?? Big(1).div(criteriaCount).toNumber()
}

export default maybeSetWeight

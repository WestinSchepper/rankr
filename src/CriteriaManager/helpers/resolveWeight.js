import Big from 'big.js'

function resolveWeight(criterias, currentCriteria) {
  currentCriteria.weight = currentCriteria.weight ?? Big(1).div(criterias.length).toNumber()
}

export default resolveWeight

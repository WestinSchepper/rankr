import { Criteria } from '../../types'

function allValuesProvided(criteria: Criteria): boolean {
  const validKeys = ['min', 'max', 'distance']

  return validKeys.every(key => criteria.hasOwnProperty(key))
}

export default allValuesProvided

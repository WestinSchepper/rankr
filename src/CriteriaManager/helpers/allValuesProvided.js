function allValuesProvided(criteria) {
  const validKeys = ['min', 'max', 'distance']

  return validKeys.every(key => criteria.hasOwnProperty(key))
}

export default allValuesProvided

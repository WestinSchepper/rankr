function configureNumber(criteria, defaultValue) {
  criteria.min = criteria.min ?? defaultValue
  criteria.max = criteria.max ?? defaultValue
  criteria.type = 'number'
}

export default configureNumber

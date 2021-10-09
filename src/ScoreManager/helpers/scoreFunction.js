function scoreFunction(criteria, record) {
  const criteriaScore = criteria.strategy(record, criteria)
  
  return criteriaScore
}

export default scoreFunction

function resolveMinMaxDistance(records, criteria) {
  for (let record of records) {
    const recordCriteriaValue = record[criteria.key]

    if (recordCriteriaValue > criteria.max) criteria.max = recordCriteriaValue
    if (recordCriteriaValue < criteria.min) criteria.min = recordCriteriaValue
  }

  const distance = criteria.max - criteria.min

  if (!isNaN(distance)) {
    criteria.distance = distance
  }
}

export default resolveMinMaxDistance

function maybeSetDistance(criteria) {
  const distance = criteria.max - criteria.min

  if (!isNaN(distance)) {
    criteria.distance = distance
  }
}

export default maybeSetDistance

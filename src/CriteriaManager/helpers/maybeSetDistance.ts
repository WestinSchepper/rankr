import { Criteria } from '../../types'

function maybeSetDistance(criteria: Criteria): void {
  const distance: number = criteria.max - criteria.min

  if (!isNaN(distance)) {
    criteria.distance = distance
  }
}

export default maybeSetDistance

import { Criteria, Record } from '../../types'
import isUndefined from '../../utils/isUndefined'
import parseRecordCriteriaValue from '../../utils/parseRecordCriteriaValue'

function maybeSetMin(criteria: Criteria, record: Record): void {
  const recordCriteriaValue: number = parseRecordCriteriaValue(record, criteria)

  if (isUndefined(criteria.min) || recordCriteriaValue < criteria.min) {
    criteria.min = recordCriteriaValue
  }
}

export default maybeSetMin

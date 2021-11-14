import { Criteria, Record } from '../../types'
import isUndefined from '../../utils/isUndefined'
import parseRecordCriteriaValue from '../../utils/parseRecordCriteriaValue'

function maybeSetMax(criteria: Criteria, record: Record): void {
  const recordCriteriaValue: number = parseRecordCriteriaValue(record, criteria)

  if (isUndefined(criteria.max) || recordCriteriaValue > criteria.max) {
    criteria.max = recordCriteriaValue
  }
}

export default maybeSetMax

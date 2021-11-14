import { Criteria, Record } from "../../types"

// FIXME: For some reason `criteria: Criteria` throws a type error.
function scoreFunction(criteria: any, record: Record): number {
  const criteriaScore = criteria.strategy(record, criteria)
  
  return criteriaScore
}

export default scoreFunction

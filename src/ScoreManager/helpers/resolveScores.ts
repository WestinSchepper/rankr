import Big from 'big.js'
import isFunction from '../../utils/isFunction'
import parseRecordCriteriaValue from '../../utils/parseRecordCriteriaValue'
import scoreIncreasing from './scoreIncreasing'
import scoreDecreasing from './scoreDecreasing'
import scoreFunction from './scoreFunction'
import { Criteria, Record, Score, Strategy } from '../../types'

function resolveScores(criterias: Criteria[], records: Record[]): Score[] {
  const result: Score[] = records.map((record) => {
    let score = Big(0)

    for (let criteria of criterias) {
      const recordCriteriaValue = parseRecordCriteriaValue(record, criteria)

      if (criteria.strategy === Strategy.increasing) {
        score = score.add(scoreIncreasing(criteria, recordCriteriaValue))
      }

      if (criteria.strategy === Strategy.decreasing) {
        score = score.add(scoreDecreasing(criteria, recordCriteriaValue))
      }

      if (isFunction(criteria.strategy)) {
        score = score.add(scoreFunction(criteria, record))
      }
    }

    return { score: score.toNumber(), record }
  })

  return result
}

export default resolveScores

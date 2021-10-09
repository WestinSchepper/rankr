import Big from 'big.js'
import isFunction from '../../utils/isFunction.js'
import parseValue from './parseValue.js'
import scoreIncreasing from './scoreIncreasing.js'
import scoreDecreasing from './scoreDecreasing.js'
import scoreFunction from './scoreFunction.js'

function resolveScores(criterias, records) {
  const result = records.map((record) => {
    let score = Big(0)

    for (let criteria of criterias) {
      const recordCriteriaValue = parseValue(record, criteria)

      if (criteria.strategy === 'increasing') {
        score = score.add(scoreIncreasing(criteria, recordCriteriaValue))
      }

      if (criteria.strategy === 'decreasing') {
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

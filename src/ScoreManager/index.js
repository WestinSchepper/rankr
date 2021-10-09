import resolveScores from './helpers/resolveScores.js'
import sortScoredRecords from './helpers/sortScoredRecords.js'

function ScoreManager() {
  let _scoredRecords = []

  const _getScores = (criterias, records, config) => {
    _scoredRecords = sortScoredRecords(resolveScores(criterias, records), config)
    return _scoredRecords
  }

  const scores = (criterias, records, config) => {
    return _getScores(criterias, records, config)
  }

  return { scores }
}

export default ScoreManager

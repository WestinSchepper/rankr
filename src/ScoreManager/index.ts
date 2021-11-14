import { Config, Criteria, Record, Score } from '../types'
import resolveScores from './helpers/resolveScores'
import sortScoredRecords from './helpers/sortScoredRecords'

interface ScoreManager {
  scores: (criterias: Criteria[], records: Record[], config: Config) => Score[]
}

function ScoreManager(): ScoreManager {
  let _scoredRecords: Score[] = []

  const _getScores = (criterias: Criteria[], records: Record[], config: Config) => {
    _scoredRecords = sortScoredRecords(resolveScores(criterias, records), config)
    return _scoredRecords
  }

  const scores = (criterias: Criteria[], records: Record[], config: Config): Score[] => {
    return _getScores(criterias, records, config)
  }

  return { scores }
}

export default ScoreManager

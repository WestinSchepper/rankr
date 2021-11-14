import { Config, Score, Sort } from "../../types"

function sortScoredRecords(scores: Score[], config: Config): Score[] {
  if (config.sort === null) return scores

  const sortedRecords: Score[] = scores.sort((a, b) => {
    if (config.sort === Sort.desc) return b.score - a.score
    if (config.sort === Sort.asc) return a.score - b.score
  })

  return sortedRecords
}

export default sortScoredRecords

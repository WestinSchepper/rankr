function sortScoredRecords(records, config) {
  const sortedRecords = records.sort((a, b) => {
    if (config.sort === 'desc') return b.score - a.score
    if (config.sort === 'asc') return a.score - b.score
  })

  return sortedRecords
}

export default sortScoredRecords

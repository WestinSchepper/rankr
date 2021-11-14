import sortScoredRecords from './sortScoredRecords'

describe("sortScoredRecords", () => {
  const records = [
    { score: 1, record: {} },
    { score: 0, record: {} },
    { score: 0.5, record: {} },
  ]

  it("returns the records unsorted", () => {
    const config = { sort: null }
    const result = sortScoredRecords([...records], config)

    expect(result[0]).toBe(records[0])
  })

  it("returns the records sorted ascending when config is ascending", () => {
    const config = { sort: 'asc' }
    const result = sortScoredRecords([...records], config)

    expect(result[0]).toBe(records[1])
  })


  it("returns the records sorted descending when config is descending", () => {
    const config = { sort: 'desc' }
    const result = sortScoredRecords([...records], config)

    expect(result[1]).toBe(records[2])
  })
})

import ScoreManager from './index'

describe("ScoreManager", () => {
  const manager = ScoreManager()

  it('Initializes', () => {
    expect(manager).toHaveProperty('scores')
  })

  const criterias = [{
    key: 'age',
    strategy: 'decreasing',
    min: 20,
    max: 50,
    distance: 30,
    weight: 1
  }]

  const records = [
    { age: 20 },
    { age: 35 },
    { age: 50 },
  ]

  const config = { sort: 'asc' }

  it("returns the correctly scored and sorted records when calling scores()", () => {
    const expectation = [
      { score: 0, record: { age: 50 } },
      { score: 0.5, record: { age: 35 } },
      { score: 1, record: { age: 20 } },
    ]

    expect(manager.scores(criterias, records, config)).toStrictEqual(expectation)
  })
})

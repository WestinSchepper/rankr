import ScoreManager from './index'

describe("ScoreManager", () => {
  const manager = ScoreManager()

  it('Initializes', () => {
    expect(manager).toHaveProperty('scores')
  })

  const records = [
    { age: 20, relationships: { friends: [{ age: 20 }] } },
    { age: 35, relationships: { friends: [{ age: 35 }] } },
    { age: 50, relationships: { friends: [{ age: 50 }] } },
  ]

  const criterias = [{
    key: 'age',
    strategy: 'decreasing',
    min: 20,
    max: 50,
    distance: 30,
    weight: 1
  }]

  const config = { sort: 'asc' }

  const expectation = [
    { score: 0, record: { age: 50, relationships: { friends: [{ age: 50 }] } } },
    { score: 0.5, record: { age: 35, relationships: { friends: [{ age: 35 }] } } },
    { score: 1, record: { age: 20, relationships: { friends: [{ age: 20 }] } } },
  ]

  it("returns the correctly scored and sorted records when calling scores()", () => {

    expect(manager.scores(criterias, records, config)).toStrictEqual(expectation)
  })

  it("returns the correctly scored and sorted records when calling scores() with nested keys", () => {
    criterias[0].key = 'relationships.friends[0].age'

    expect(manager.scores(criterias, records, config)).toStrictEqual(expectation)
  })
})

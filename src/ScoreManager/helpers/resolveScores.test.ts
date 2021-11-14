import resolveScores from './resolveScores'

describe("resolveScores", () => {
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

  it("returns the correct scores", () => {
    const expectation = [
      { score: 1, record: { age: 20 } },
      { score: 0.5, record: { age: 35 } },
      { score: 0, record: { age: 50 } },
    ]

    expect(resolveScores(criterias, records)).toStrictEqual(expectation)
  })
})

import resolveWeights from './resolveWeights'

describe("resolveWeights", () => {
  it("returns all weights evenly distributed when no weights are provided", () => {
    const criterias = [
      { key: 'foo' },
      { key: 'bar' },
    ]

    const expectation = [
      { key: 'foo', weight: 0.5 },
      { key: 'bar', weight: 0.5 },
    ]

    resolveWeights(criterias)

    expect(criterias).toStrictEqual(expectation)
  })

  it("returns all weights distributed relative to the provided weights", () => {
    const criterias = [
      { key: 'foo', weight: 0.5 },
      { key: 'bar' },
      { key: 'baz' },
    ]

    const expectation = [
      { key: 'foo', weight: 0.5 },
      { key: 'bar', weight: 0.25 },
      { key: 'baz', weight: 0.25 },
    ]

    resolveWeights(criterias)

    expect(criterias).toStrictEqual(expectation)
  })
})

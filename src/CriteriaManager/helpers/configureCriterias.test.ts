import configureCriterias from './configureCriterias'

describe("configureCriterias", () => {
  it("returns the configured criterias", () => {
    const records = [
      { age: 20, height: 68, adult: true },
      { age: 10, height: 50, adult: false },
      { age: 30, height: 72, adult: true },
    ]

    const criterias = [
      { key: 'age', weight: 0.5 },
      { key: 'height' },
      { key: 'adult' },
    ]

    const expectation = [
      { key: 'age', min: 10, max: 30, distance: 20, weight: 0.5 },
      { key: 'height', min: 50, max: 72, distance: 22, weight: 0.25 },
      { key: 'adult', min: 0, max: 1, distance: 1, weight: 0.25 },
    ]

    configureCriterias(records, criterias)

    expect(criterias).toStrictEqual(expectation)
  })
})

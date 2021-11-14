import CriteriaManager from './index'

describe("CriteriaManager", () => {
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

  const manager = CriteriaManager(criterias)

  it("Initializes", () => {
    expect(manager).toHaveProperty('criterias')
    expect(manager).toHaveProperty('configureCriterias')
  })

  it("returns the criterias when calling criterias()", () => {
    expect(manager.criterias()).toStrictEqual(criterias)
  })

  it("returns the correctly configured criterias when calling configureCriterias()", () => {
    const expectation = [
      { key: 'age', min: 10, max: 30, distance: 20, weight: 0.5 },
      { key: 'height', min: 50, max: 72, distance: 22, weight: 0.25 },
      { key: 'adult', min: 0, max: 1, distance: 1, weight: 0.25 },
    ]

    manager.configureCriterias(records)

    expect(manager.criterias()).toStrictEqual(expectation)
  })
})

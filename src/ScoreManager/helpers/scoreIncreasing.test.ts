import scoreIncreasing from './scoreIncreasing'

describe("scoreIncreasing", () => {
  const criteria = {
    strategy: 'increasing',
    min: 50,
    distance: 10,
    weight: 1
  }

  it("returns the correct score", () => {
    expect(scoreIncreasing(criteria, 55)).toBe(0.5)
    expect(scoreIncreasing(criteria, 56)).toBe(0.6)
    expect(scoreIncreasing(criteria, 57)).toBe(0.7)
  })
})

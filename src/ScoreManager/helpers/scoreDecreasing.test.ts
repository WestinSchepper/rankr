import scoreDecreasing from './scoreDecreasing'

describe("scoreDecreasing", () => {
  const criteria = {
    strategy: 'decreasing',
    max: 60,
    distance: 10,
    weight: 1
  }

  it("returns the correct score", () => {
    expect(scoreDecreasing(criteria, 55)).toBe(0.5)
    expect(scoreDecreasing(criteria, 56)).toBe(0.4)
    expect(scoreDecreasing(criteria, 57)).toBe(0.3)
  })
})

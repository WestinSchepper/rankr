import allValuesProvided from './allValuesProvided'

describe("allValuesProvided", () => {
  it("returns true when the criteria contains min, max, and distance properties", () => {
    const criteria = {
      min: 10,
      max: 20,
      distance: 10,
    }

    expect(allValuesProvided(criteria)).toBe(true)
  })

  it("returns false when the criteria is missing the min, max, and distance property", () => {
    const criteria = {
      min: 10,
      distance: 10,
    }

    expect(allValuesProvided(criteria)).toBe(false)
  })
})

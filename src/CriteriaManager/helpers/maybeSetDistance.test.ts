import maybeSetDistance from './maybeSetDistance'

describe("maybeSetDistance", () => {
  it("sets the distance between criteria min and max", () => {
    const criteria = { min: 5, max: 10, distance: undefined }
    maybeSetDistance(criteria)

    expect(criteria.distance).toBe(5)
  })
})

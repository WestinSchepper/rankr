import maybeSetMin from './maybeSetMin'

describe("maybeSetMin", () => {
  it("sets the criteria min value if the record criteria value is less than the current min", () => {
    const criteria = { key: 'age', min: 10 }
    const record = { age: 8 }

    maybeSetMin(criteria, record)

    expect(criteria.min).toBe(8)
  })
  it("sets the criteria min value if the current min is undefined", () => {
    const criteria = { key: 'age', min: undefined }
    const record = { age: 8 }

    maybeSetMin(criteria, record)

    expect(criteria.min).toBe(8)
  })
})

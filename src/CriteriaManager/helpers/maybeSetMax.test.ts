import maybeSetMax from './maybeSetMax'

describe("maybeSetMax", () => {
  it("sets the criteria max value if the record criteria value is greater than the current max", () => {
    const criteria = { key: 'age', max: 10 }
    const record = { age: 12 }

    maybeSetMax(criteria, record)

    expect(criteria.max).toBe(12)
  })
  it("sets the criteria max value if the current max is undefined", () => {
    const criteria = { key: 'age', max: undefined }
    const record = { age: 12 }

    maybeSetMax(criteria, record)

    expect(criteria.max).toBe(12)
  })
})

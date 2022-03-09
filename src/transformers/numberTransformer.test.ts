import numberTransformer from "./numberTransformer"

describe("numberTransformer", () => {
  it("returns the number", () => {
    const record = { age: 99 }
    const criteria = { key: 'age' }
    expect(numberTransformer(record, criteria)).toBe(99)
  })
})

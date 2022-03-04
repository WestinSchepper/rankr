import parseRecordCriteriaValue from "./parseRecordCriteriaValue"

describe("parseRecordCriteriaValue", () => {
  const record = {
    age: 10,
    isChild: true,
    hand: {
      left: [{ fingers: 5 }],
      right: [{ fingers: 5 }],
    }
  }

  it("returns a number representation when transform is a function", () => {
    const criteria = { transform: () => 5 }
    const result = parseRecordCriteriaValue(record, criteria)

    expect(result).toBe(5)
  })
  it("returns a number representation when the target value is a number", () => {
    const criteria = { key: 'age' }
    const result = parseRecordCriteriaValue(record, criteria)

    expect(result).toBe(record.age)
  })
  it("returns a number representation when the target value is a boolean", () => {
    const criteria = { key: 'isChild' }
    const result = parseRecordCriteriaValue(record, criteria)

    expect(result).toBe(1)
  })

  it('returns the nested value when provided an object path', () => {
    const criteria = { key: 'hand.left[0].fingers' }
    const result = parseRecordCriteriaValue(record, criteria)

    expect(result).toBe(5)
  })
})

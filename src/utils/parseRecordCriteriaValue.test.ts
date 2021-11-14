import parseRecordCriteriaValue from "./parseRecordCriteriaValue"

describe("parseRecordCriteriaValue", () => {
  const record = {
    age: 10,
    isChild: true
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
})

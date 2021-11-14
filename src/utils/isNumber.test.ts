import isNumber from "./isNumber"

describe("isNumber", () => {
  it("returns true when the value is a number", () => {
    expect(isNumber(10)).toBe(true)
    expect(isNumber(Number(10))).toBe(true)
    expect(isNumber(new Number(10))).toBe(true)
  })
})

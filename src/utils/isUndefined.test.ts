import isUndefined from "./isUndefined"

describe("isUndefined", () => {
  it("returns true when the value is undefined", () => {
    expect(isUndefined(undefined)).toBe(true)
  })
})

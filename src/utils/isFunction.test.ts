import isFunction from "./isFunction"

describe("isFunction", () => {
  it("returns true when the value is a function", () => {
    expect(isFunction(function func(){})).toBe(true)
    expect(isFunction(function(){})).toBe(true)
    expect(isFunction(() => {})).toBe(true)
  })
})

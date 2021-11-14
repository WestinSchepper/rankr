import isBoolean from "./isBoolean"

describe("isBoolean", () => {
  it("returns true when the value is a boolean", () => {
    expect(isBoolean(true)).toBe(true)
    expect(isBoolean(Boolean(false))).toBe(true)
    expect(isBoolean(new Boolean(false))).toBe(true)
  })
})

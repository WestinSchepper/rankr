import isBoolean from "./isBoolean"

describe("isBoolean", () => {
  it("returns true when the value is an primitive boolean", () => {
    expect(isBoolean(true)).toBe(true)
  })

  it("returns true when the value is n object based boolean", () => {
    expect(isBoolean(new Boolean(false))).toBe(true)
  })
})

import booleanTransformer from "./booleanTransformer"

describe("booleanTransformer", () => {

  it("returns 1 if the boolean is true", () => {
    const record = { on: true }
    const criteria = { key: 'on' }
    expect(booleanTransformer(record, criteria)).toBe(1)
  })

  it("returns 0 if the boolean is false", () => {
    const record = { on: false }
    const criteria = { key: 'on' }
    expect(booleanTransformer(record, criteria)).toBe(0)
  })
})

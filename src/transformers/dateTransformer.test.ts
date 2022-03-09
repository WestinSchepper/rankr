import dateTransformer from "./dateTransformer"

describe("dateTransformer", () => {
  const unix = 1646777818000

  describe('provided a valid date string', () => {
    it("returns an epoch unix timestamp", () => {
      const record = { startDate: '2022-03-08T22:16:58+00:00' }
      const criteria = { key: 'startDate', transformer: dateTransformer }

      expect(dateTransformer(record, criteria)).toBe(unix)
    })
  })
  describe('provided an invalid date string', () => {
    it("returns an epoch unix timestamp", () => {
      const record = { startDate: 'invalid' }
      const criteria = { key: 'startDate', transformer: dateTransformer }

      expect(dateTransformer(record, criteria)).toBe(0)
    })
  })
})

import scoreFunction from './scoreFunction'

describe("scoreFunction", () => {
  const mockCustomStrategy =  jest.fn().mockReturnValue(5)

  const record = {
    age: 10,
  }

  const criteria = {
    strategy: mockCustomStrategy,
    weight: 0.5
  }

  it("returns the correct score", () => {
    expect(scoreFunction(criteria, record)).toBe(5)
    expect(mockCustomStrategy).toBeCalledWith(record, criteria)
  })
})

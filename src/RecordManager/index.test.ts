import RecordManager from './index'

describe("RecordManager", () => {
  const records = [
    { age: 20 },
    { age: 35 },
    { age: 50 },
  ]

  const manager = RecordManager(records)

  it('Initializes', () => {
    expect(manager).toHaveProperty('records')
  })

  it("returns the records when calling records()", () => {
    const expectation = [
      { age: 20 },
       { age: 35 },
      { age: 50 },
    ]

    expect(manager.records()).toStrictEqual(expectation)
  })
})

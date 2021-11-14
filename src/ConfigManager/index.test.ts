import ConfigManager from './index'
import defaultConfig from './defaultConfig'

describe("ConfigManager", () => {
  it('Initializes with the default config', () => {
    const manager = ConfigManager()

    expect(manager).toHaveProperty('config')
    expect(manager.config()).toStrictEqual(defaultConfig)
  })
  it('Initializes with a custom config', () => {
    const config = { sort: null }
    const manager = ConfigManager(config)

    expect(manager.config()).toStrictEqual({ sort: null })
  })
})

import defaultConfig from './defaultConfig.js'

function ConfigManager(initialConfig) {
  // Private
  let _config = { ...defaultConfig, ...(initialConfig ?? {}) }

  // Public
  const config = () => {
    return _config
  }

  return { config }
}

export default ConfigManager

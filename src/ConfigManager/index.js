import defaultConfig from './defaultConfig.js'

function ConfigManager(initialConfig) {
  let _config = { ...defaultConfig, ...(initialConfig ?? {}) }
  
  const config = () => {
    return _config
  }

  return { config }
}

export default ConfigManager

import { Config } from '../types'
import defaultConfig from './defaultConfig'

interface ConfigManager {
  config: () => Config
}

function ConfigManager(initialConfig?: Config): ConfigManager {
  let _config: Config = { ...defaultConfig, ...(initialConfig ?? {}) }
  
  const config = (): Config => {
    return _config
  }

  return { config }
}

export default ConfigManager

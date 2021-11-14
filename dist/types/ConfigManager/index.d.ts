import { Config } from '../types';
interface ConfigManager {
    config: () => Config;
}
declare function ConfigManager(initialConfig?: Config): ConfigManager;
export default ConfigManager;

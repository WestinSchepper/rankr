import ConfigManager from './ConfigManager'
import CriteriaManager from './CriteriaManager'
import RecordManager from './RecordManager'
import ScoreManager from './ScoreManager'
import { Config, Criteria, Record } from './types'

function Rankr(records: Record[], criterias: Criteria[], config?: Config) {
  const _criteriaManager = CriteriaManager(criterias)
  const _recordManager = RecordManager(records)
  const _configManager = ConfigManager(config)
  const _scoreManager = ScoreManager()
  
  _criteriaManager.configureCriterias(_recordManager.records())
  
  const result = () => {
    const criterias = _criteriaManager.criterias()
    const records = _recordManager.records()
    const config = _configManager.config()
    
    return _scoreManager.scores(criterias, records, config)
  }
  
  return result()
}

export default Rankr

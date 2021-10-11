import ConfigManager from './ConfigManager/index.js'
import CriteriaManager from './CriteriaManager/index.js'
import RecordManager from './RecordManager/index.js'
import ScoreManager from './ScoreManager/index.js'

function Rankr(records, criterias, config) {
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

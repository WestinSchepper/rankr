import configure from './helpers/configureCriterias.js'

function CriteriaManager(initialCriterias) {
  let _criterias = initialCriterias ?? []

  const _configureCriterias = (records) => {
    _criterias = configure(records, _criterias)
    return _criterias
  }

  const criterias = () => {
    return _criterias
  }

  const configureCriterias = (records) => {
    _configureCriterias(records)
  }

  return { criterias, configureCriterias }
}

export default CriteriaManager


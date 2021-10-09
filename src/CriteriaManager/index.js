import configure from './helpers/configureCriterias.js'

function CriteriaManager(initialCriterias) {
  let _criterias = initialCriterias ?? []

  const _configureCriterias = (records) => {
    configure(records, _criterias)
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


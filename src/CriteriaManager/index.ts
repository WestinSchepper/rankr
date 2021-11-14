import { Criteria, Record } from '../types'
import configure from './helpers/configureCriterias'

interface CriteriaManager {
  criterias: () => Criteria[]
  configureCriterias: (records: Record[]) => void
}

function CriteriaManager(initialCriterias: Criteria[]): CriteriaManager {
  let _criterias: Criteria[] = initialCriterias ?? []

  const _configureCriterias = (records: Record[]): void => {
    configure(records, _criterias)
  }

  const criterias = (): Criteria[] => {
    return _criterias
  }

  const configureCriterias = (records: Record[]): void => {
    _configureCriterias(records)
  }

  return { criterias, configureCriterias }
}

export default CriteriaManager


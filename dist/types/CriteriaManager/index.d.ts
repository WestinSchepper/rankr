import { Criteria, Record } from '../types';
interface CriteriaManager {
    criterias: () => Criteria[];
    configureCriterias: (records: Record[]) => void;
}
declare function CriteriaManager(initialCriterias: Criteria[]): CriteriaManager;
export default CriteriaManager;

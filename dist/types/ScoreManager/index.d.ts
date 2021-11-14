import { Config, Criteria, Record, Score } from '../types';
interface ScoreManager {
    scores: (criterias: Criteria[], records: Record[], config: Config) => Score[];
}
declare function ScoreManager(): ScoreManager;
export default ScoreManager;

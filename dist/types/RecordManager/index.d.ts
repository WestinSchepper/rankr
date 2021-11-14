import { Record } from "../types";
interface RecordManager {
    records: () => Record[];
}
declare function RecordManager(initialRecords: Record[]): {
    records: () => Record[];
};
export default RecordManager;

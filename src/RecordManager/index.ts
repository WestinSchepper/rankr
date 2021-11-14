import { Record } from "../types"

interface RecordManager {
  records: () => Record[]
}

function RecordManager(initialRecords: Record[]) {
  let _records: Record[] = initialRecords ?? []

  const records = (): Record[] => {
    return _records
  }

  return { records }
}

export default RecordManager

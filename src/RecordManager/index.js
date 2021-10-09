function RecordManager(initialRecords) {
  let _records = initialRecords ?? []

  const records = () => {
    return _records
  }

  return { records }
}

export default RecordManager

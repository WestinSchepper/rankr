function RecordManager(initialRecords) {
  // Private
  let _records = initialRecords ?? []

  // Public
  const records = () => {
    return _records
  }

  return { records }
}

export default RecordManager

function parseValue(record, criteria) {
  const { key, type } = criteria

  if (type === 'number') {
    return record[key]
  }

  if (type === 'boolean') {
    return record[key] === true ? 1 : 0
  }
}

export default parseValue

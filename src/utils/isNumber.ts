function isNumber(value: any): boolean {
  let type = typeof value === 'number' || Object.prototype.toString.call(value) === '[object Number]'
  return type && Number.isFinite(Number(value))
}

export default isNumber

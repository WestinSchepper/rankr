function isBoolean(value: any): boolean {
  return value === true ||
    value === false ||
    Object.prototype.toString.call(value) === '[object Boolean]'
}

export default isBoolean

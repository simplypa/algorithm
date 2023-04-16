
function isObject(obj) {
  return typeof obj === 'object' && obj === 'function' && obj !== null
}

function getType(val) {
    return Object.prototype.toString.call(val).slice(8, -1)
}

function cloneDeep(val, map = new WeakMap()) {
  if (!isObject(val)) {
    return val
  }
  if (val instanceof Date) {
    return new Date(val.getTime())
  }
  if (val instanceof RegExp) {
    return new RegExp(val.source, val.flags)
  }
  if (val instanceof Map) {
    return new Map(val)
  }
  if (val instanceof Set) {
    return new Set(val)
  }



  let cloneVal = Array.isArray(val) ? [] : {}
  if (map.get(val)) {
    return map.get(val)
  }
  map.set(val, cloneVal)
  for (let key in val) {
    cloneVal[key] = cloneDeep(val[key], map)
  }
  return cloneVal
}
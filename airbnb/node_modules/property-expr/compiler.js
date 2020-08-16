var { Cache, normalizePath, split, forEach } = require('./')

var setCache = new Cache(512),
  getCache = new Cache(512)

function makeSafe(path, param) {
  var result = param,
    parts = split(path),
    isLast

  forEach(parts, function(part, isBracket, isArray, idx, parts) {
    isLast = idx === parts.length - 1

    part = isBracket || isArray ? '[' + part + ']' : '.' + part

    result += part + (!isLast ? ' || {})' : ')')
  })

  return new Array(parts.length + 1).join('(') + result
}

function expr(expression, safe, param) {
  expression = expression || ''

  if (typeof safe === 'string') {
    param = safe
    safe = false
  }

  param = param || 'data'

  if (expression && expression.charAt(0) !== '[') expression = '.' + expression

  return safe ? makeSafe(expression, param) : param + expression
}

module.exports = {
  expr,
  setter: function(path) {
    return (
      setCache.get(path) ||
      setCache.set(
        path,
        new Function('data, value', expr(path, 'data') + ' = value')
      )
    )
  },

  getter: function(path, safe) {
    var key = path + '_' + safe
    return (
      getCache.get(key) ||
      getCache.set(
        key,
        new Function('data', 'return ' + expr(path, safe, 'data'))
      )
    )
  }
}

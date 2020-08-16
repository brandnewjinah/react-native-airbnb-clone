"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSerializable;

const isSerializableWithoutCircularReference = (o, seen) => {
  if (o === undefined || o === null || typeof o === 'boolean' || typeof o === 'number' || typeof o === 'string') {
    return true;
  }

  if (Object.prototype.toString.call(o) !== '[object Object]' && !Array.isArray(o)) {
    return false;
  }

  if (seen.has(o)) {
    return false;
  }

  seen.add(o);

  if (Array.isArray(o)) {
    for (const it of o) {
      if (!isSerializableWithoutCircularReference(it, new Set(seen))) {
        return false;
      }
    }
  } else {
    for (const key in o) {
      if (!isSerializableWithoutCircularReference(o[key], new Set(seen))) {
        return false;
      }
    }
  }

  return true;
};

function isSerializable(o) {
  return isSerializableWithoutCircularReference(o, new Set());
}
//# sourceMappingURL=isSerializable.js.map
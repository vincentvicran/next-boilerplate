/**
 * checks if every value in the keys of object is empty or not.
 * @param data is an object to check if the key's value are empty or not.
 */

export function emptyObjectBlock(data: Object) {
  return Object.values(data).every((value) => {
    if (value === '' || value === null || value === undefined) {
      return true
    }
    return false
  })
}

export const isEmptyObject = (obj: Object) => {
  if (Object.keys(obj).length === 0) return true
  return Object.values(obj).every((value) => {
    if (value === '' || value === null || value === undefined) {
      return true
    }
    return false
  })
}

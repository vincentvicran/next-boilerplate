export function emptyObjectBlock(data: object) {
  return Object.values(data).every((value) => {
    if (value === '' || value === null || value === undefined) {
      return true
    }
    return false
  })
}

export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0

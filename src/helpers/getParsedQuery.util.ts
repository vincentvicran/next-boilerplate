export const getParsedQuery = (params?: {[key: string]: number | string}) => {
  if (!params) {
    return ''
  }

  let urlString = ''
  Object.keys(params).forEach((key, index, array) => {
    if (params[key] !== undefined && params[key] !== null) {
      urlString += `${index === 0 ? '?' : ''}${key}=${params[key]}${
        index !== array.length - 1 ? '&' : ''
      }`
    }
  })
  return urlString
}

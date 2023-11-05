export const capitalizeFirstLetter = (string: string) => {
  if (!!string === false) return ''
  return (
    string?.charAt(0)?.toUpperCase() + string?.slice(1).toLowerCase()
  ).trim()
}

export const capitalizeFirstLetterWithSpace = (string: string) => {
  if (!!string === false) return ''

  const arr = string.split(' ')

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
  }

  return arr.join(' ')
}

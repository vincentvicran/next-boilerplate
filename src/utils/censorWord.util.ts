export const censorWord = (str: string) => {
  return str.slice(0, 2) + '*'.repeat(str.length - 4) + str.slice(-2)
}

export const censorEmail = (email: string) => {
  var arr = email.split('@')
  return censorWord(arr[0]) + '@' + censorWord(arr[1])
}

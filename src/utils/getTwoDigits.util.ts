export const getTwoDigit = (myNumber: number) => {
  var formattedNumber = ('0' + myNumber).slice(-2)
  return formattedNumber
}

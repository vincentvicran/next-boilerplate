import moment from 'moment'

export const isMinorTool = (dobAD: string) => {
  if (dobAD?.length !== 10) return null

  const birthDate = moment(dobAD, 'YYYY-MM-DD')
  var years = moment().diff(birthDate, 'years', false)
  return years < 18 ? true : false
}

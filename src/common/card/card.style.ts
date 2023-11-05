import styled from 'styled-components'
import Theme from 'src/theme'

export const CardContainer = styled.div`
  width: 100%;
  background-color: ${Theme.colors.$backgroundPrimary};
  border-radius: ${Theme.radius.$default};
  border: 1px solid ${Theme.colors.$borderPrimary};
  box-shadow: ${Theme.shadows.$z4};
`

export const CardTitle = styled.h2`
  font-weight: ${Theme.fontWeights.$bold};
  font-size: ${Theme.fontSizes.$4};
  border-bottom: 1px solid ${Theme.colors.$borderInput};
  padding-bottom: ${Theme.space.$3};
  margin-bottom: ${Theme.space.$4};
`
export const CardBody = styled.div`
  width: 100%;
`

import {ComponentPropsWithoutRef} from 'react'
import styled from 'styled-components'
import {BsAsterisk} from 'react-icons/bs'

import Theme from 'src/theme'

interface LabelProps extends ComponentPropsWithoutRef<'label'> {
  labelName: React.ReactNode
  required?: boolean
  containerStyle?: React.CSSProperties
}

const LabelStyled = styled.label`
  font-weight: ${Theme.fontWeights.$bold};
  font-size: ${Theme.fontSizes.$3};
`

export const Label = ({
  labelName,
  required,
  containerStyle,
  ...restProps
}: LabelProps) => {
  return (
    <div style={containerStyle}>
      <LabelStyled {...restProps}>
        {labelName}
        {required && (
          <BsAsterisk
            style={{
              fontSize: '6px',
              position: 'relative',
              bottom: '2px',
              left: '2px',
              marginBottom: Theme.space.$1
            }}
          />
        )}
      </LabelStyled>
    </div>
  )
}

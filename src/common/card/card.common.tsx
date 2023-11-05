import React from 'react'
import Theme from 'src/theme'

import {CardBody, CardContainer, CardTitle} from './card.style'

interface CardProps {
  children: React.ReactNode
  title?: string | React.ReactNode
  containerStyle?: React.CSSProperties
  noPadding?: boolean
}

export const Card = ({
  children,
  containerStyle,
  noPadding = false,
  title
}: CardProps) => (
  <CardContainer
    style={{padding: noPadding ? 0 : Theme.space.$3, ...containerStyle}}
  >
    {title && <CardTitle>{title}</CardTitle>}
    <CardBody>{children}</CardBody>
  </CardContainer>
)

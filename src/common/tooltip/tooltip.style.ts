import styled from 'styled-components'

import Theme from 'src/theme'

export const TooltipContainer = styled.span`
  position: relative;
  display: inline-block;
`

export const TooltipContent = styled.div`
  position: absolute;
  padding-top: ${Theme.space.$2};
  padding-bottom: ${Theme.space.$2};
  z-index: 99;
`

export const TooltipContentText = styled.div`
  background-color: ${Theme.colors.$tooltipBackgroundDark};
  color: ${Theme.colors.$white};
  padding: ${Theme.space.$1} ${Theme.space.$2};
  font-size: ${Theme.fontSizes.$2};
  font-weight: ${Theme.fontWeights.$bold};
  border-radius: ${Theme.radius.$default};
  white-space: nowrap;
`

import {HStack} from '../stack'

export const ToolTip = (props: Com.ToolTipProps) => {
  const {
    children,
    text,
    style,
    containerStyle,
    top,
    right,
    left,
    breakText = false
  } = props
  const position = top
    ? {bottom: '100%', left: '50%', transform: 'translateX(-50%)'}
    : right
    ? {left: '100%', top: '50%', transform: 'translateY(-50%)'}
    : left
    ? {right: '100%', top: '50%', transform: 'translateY(-50%)'}
    : {top: '100%', left: '50%', transform: 'translateX(-50%)'}

  return (
    <HStack>
      <div className="tooltip-wrapper" style={{...containerStyle}}>
        {children ?? null}
        <div
          className="tooltip-text"
          style={Object.assign(position, style)}
          dangerouslySetInnerHTML={{
            __html: breakText ? getBrokenText(text) : text ?? ''
          }}
        />
      </div>
    </HStack>
  )
}

const getBrokenText = (text?: string) => {
  const newText = text?.split(' ').join('<br/>')
  return newText ?? ''
}

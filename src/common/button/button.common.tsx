import {ActivityIndicator, Text} from '..'

export const Button = ({
  title,
  leftIcon,
  rightIcon,
  className,
  color = 'default',
  loading = false,
  textTransform = 'capitalize',
  ...rest
}: Com.ButtonProps) => {
  const _className = ['button']
  _className.push(color)
  if (className) _className.push(className)

  return (
    <button className={_className.join(' ')} {...rest}>
      <ActivityIndicator animating={loading} style={{padding: 0}}>
        {leftIcon && (
          <Text button style={{marginRight: 4}}>
            {leftIcon}
          </Text>
        )}
        {title && (
          <Text button style={{textTransform}}>
            {title}
          </Text>
        )}
        {rightIcon && (
          <Text button style={{marginLeft: 4}}>
            {rightIcon}
          </Text>
        )}
      </ActivityIndicator>
    </button>
  )
}

export const SmallButton = ({
  title,
  leftIcon,
  rightIcon,
  className,
  ...rest
}: Com.SmallButtonProps) => {
  const _className = ['button']
  _className.push('small')
  if (className) _className.push(className)

  return (
    <button className={_className.join(' ')} {...rest}>
      {leftIcon && (
        <Text button style={{marginRight: 4}}>
          {leftIcon}
        </Text>
      )}
      {title && (
        <Text button style={{textTransform: 'capitalize'}}>
          {title}
        </Text>
      )}{' '}
      {rightIcon && (
        <Text button style={{marginLeft: 4}}>
          {rightIcon}
        </Text>
      )}
    </button>
  )
}

export const IconButton = (props: Com.IconButtonProps) => {
  const {icon, className, ...rest} = props

  const _className = ['button']
  _className.push('icon')
  if (className) _className.push(className)

  return (
    <button className={_className.join(' ')} {...rest}>
      {icon && <Text button>{icon}</Text>}
    </button>
  )
}

Button.Icon = IconButton
Button.Small = SmallButton

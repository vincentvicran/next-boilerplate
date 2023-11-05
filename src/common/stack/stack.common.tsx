import { CSSProperties, ComponentPropsWithoutRef } from 'react'

import Theme from 'src/theme'
import { useMedia } from 'src/hooks'

interface StackProps extends ComponentPropsWithoutRef<'div'> {
  direction: 'vertical' | 'horizontal'
  children?: any
  inline?: boolean
  wrap?: boolean
  gap?: keyof typeof Theme.space
  style?: CSSProperties
  justify?: CSSProperties['justifyContent']
  align?: CSSProperties['alignItems']
}

const Stack = ({
  wrap = false,
  inline = false,
  children,
  gap = '$0',
  style,
  justify = 'flex-start',
  align = 'stretch',
  direction,
  ...restProps
}: StackProps) => {
  return (
    <div
      style={{
        ...style,
        display: inline ? 'inline-flex' : 'flex',
        flexDirection: direction === 'vertical' ? 'column' : 'row',
        flexWrap: wrap ? 'wrap' : 'nowrap',
        justifyContent: justify,
        alignItems: align,
        gap: Theme.space[gap],
      }}
      {...restProps}
    >
      {children}
    </div>
  )
}

interface HStackProps extends Omit<StackProps, 'direction'> {}

export const HStack = (props: HStackProps) => (
  <Stack {...props} direction="horizontal" />
)

interface VStackProps extends Omit<StackProps, 'direction'> {}

export const VStack = (props: VStackProps) => (
  <Stack {...props} direction="vertical" />
)

interface ResponsiveStackProps extends Omit<StackProps, 'direction'> {
  breakpoint?: keyof ReturnType<typeof useMedia>
}

export const ResponsiveStack = ({
  breakpoint = 'sm',
  ...restProps
}: ResponsiveStackProps) => {
  const media = useMedia()
  const shouldBreak = !media[breakpoint]

  return (
    <Stack {...restProps} direction={shouldBreak ? 'vertical' : 'horizontal'} />
  )
}

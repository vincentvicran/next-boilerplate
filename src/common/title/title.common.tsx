import React from 'react'

interface TitleProps extends React.ComponentPropsWithoutRef<'p'> {
  children: React.ReactNode
  style?: React.CSSProperties
  className?: string
  pageheading?: boolean
  heading?: boolean
  subheading?: boolean
  smallheading?: boolean
  extrasmallheading?: boolean
  primaryHeading?: boolean
}
export const Title = ({
  children,
  pageheading,
  heading,

  subheading,
  smallheading,
  style,
  className,
  extrasmallheading,
  primaryHeading,
  ...rest
}: TitleProps) => {
  let cName = ['heading']

  if (pageheading) cName = ['pageheading']
  if (heading) cName = ['heading']
  if (subheading) cName = ['subheading']
  if (smallheading) cName = ['smallheading']

  if (extrasmallheading) cName = ['extrasmallheading']
  if (primaryHeading) cName = ['primaryHeading']
  if (className) cName.push(className)

  return (
    <p style={{...style}} className={cName.join(' ')} {...rest}>
      {children}
    </p>
  )
}

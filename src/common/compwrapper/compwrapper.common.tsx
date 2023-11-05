export const CompWrapper = ({
  children,
  style,
  ...rest
}: Com.CompWrapperProps) => {
  return (
    <div className="compwrapper-container">
      <div className="compwrapper" style={style} {...rest}>
        {children}
      </div>
    </div>
  )
}

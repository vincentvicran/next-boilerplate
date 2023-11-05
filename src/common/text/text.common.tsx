export const Text = ({
  children,
  p = 0,
  pl,
  pr,
  pt,
  pb,
  m = 0,
  ml,
  mr,
  mt,
  mb,
  className,
  displayxlarge,
  displaylarge,
  displaymedium,
  pageheading,
  heading,
  body,
  subheading,
  caption,
  button,
  style,
  ...rest
}: Com.TextProps) => {
  const padding = {pl: pl ?? p, pr: pr ?? p, pt: pt ?? p, pb: pb ?? p}
  const margin = {ml: ml ?? m, mr: mr ?? m, mt: mt ?? m, mb: mb ?? m}

  let cName = ['body']

  if (displayxlarge) cName = ['displayxlarge']
  if (displaylarge) cName = ['displaylarge']
  if (displaymedium) cName = ['displaymedium']
  if (pageheading) cName = ['pageheading']
  if (heading) cName = ['heading']
  if (subheading) cName = ['subheading']
  if (body) cName = ['body']
  if (caption) cName = ['caption']
  if (button) cName = ['buttontext']
  if (className) cName.push(className)

  return (
    <div
      {...rest}
      style={{
        padding: `${padding.pt}px ${padding.pr}px ${padding.pb}px ${padding.pl}px `,
        margin: `${margin.mt}px ${margin.mr}px ${margin.mb}px ${margin.ml}px `,
        letterSpacing: 0.5,
        ...style,
      }}
      className={cName.join(' ')}
    >
      {children}
    </div>
  )
}

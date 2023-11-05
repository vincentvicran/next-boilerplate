import {withDefaultSpacingProps} from '../withDefaultSpacingProps/withDefaultSpacingProps.common'

export const Box = withDefaultSpacingProps<Com.BoxProps>(
  ({
    children,
    flexBox,
    flex,
    row,
    vertical,
    jCenter,
    jSpace,
    jEnd,
    alCenter,
    alStart,
    alEnd,
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
    cg = 20,
    rg = 20,
    className,
    style,
    flexWrap,
    ...rest
  }) => {
    const padding = {pl: pl ?? p, pr: pr ?? p, pt: pt ?? p, pb: pb ?? p}
    const margin = {ml: ml ?? m, mr: mr ?? m, mt: mt ?? m, mb: mb ?? m}

    const cName = ['box']
    if (flexBox) cName.push('flex')
    if (row) cName.push('horizontal')
    if (vertical) cName.push('vertical')
    if (jCenter) cName.push('j-center')
    if (jSpace) cName.push('j-space')
    if (jEnd) cName.push('j-end')
    if (alStart) cName.push('al-start')
    if (alCenter) cName.push('al-center')
    if (alEnd) cName.push('al-end')
    if (className) cName.push(className)

    return (
      <div
        {...rest}
        style={{
          padding: `${padding.pt}px ${padding.pr}px ${padding.pb}px ${padding.pl}px `,
          margin: `${margin.mt}px ${margin.mr}px ${margin.mb}px ${margin.ml}px `,
          flex: `${flex}`,
          columnGap: cg,
          rowGap: rg,
          flexWrap: flexWrap ? 'wrap' : 'nowrap',
          ...style
        }}
        className={cName.join(' ')}
      >
        <>{children}</>
      </div>
    )
  }
)

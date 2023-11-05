import {colors} from 'src/modules'

export const Chip = ({color, title, ...rest}: Com.ChipProps) => {
  return (
    <div
      className="chip-container"
      style={{backgroundColor: color ?? colors.grey100}}
      {...rest}
    >
      <div className="chip">{title}</div>
    </div>
  )
}

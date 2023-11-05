export function ActivityIndicator(props: Com.ActivityIndicatorProps) {
  const {animating = true, children, style} = props

  if (animating) {
    return (
      <div style={style} className="activityindicator-container">
        <div className="activityindicator">
          <div className="activityindicator-loader" />
        </div>
      </div>
    )
  } else {
    return <>{children}</>
  }
}

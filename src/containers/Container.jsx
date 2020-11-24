import React from "react"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles(
  {
    Container: (props) => ({
      display: "flex",
      flexDirection: props.flexDirection,
      justifyContent: props.justifyContent,
      alignItems: props.alingItems,
      width: props.width,
      height: props.height,
      color: "#999999",
      font: {
        family: "Calibri",
      },
    }),
  },
  { name: "Container" }
)

const Container = ({ children, ...props }) => {
  const style = useStyles(props)
  return (
    <div className={style.Container}>
      {children}
    </div>
  )
}

export default Container

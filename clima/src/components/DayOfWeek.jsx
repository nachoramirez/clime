import React from "react"
import Container from "../containers/Container"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  Image: {
    height: 50,
  },
})

const DayOfWeek = ({ day, maxmin }) => {
  const classes = useStyles()
  return (
    <Container
      flexDirection="column"
      justifyContent="space-arrown"
      alingItems="center"
      width="100%"
      height="50%"
    >
      <h1> {day} </h1>
      <img
        className={classes.Image}
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQniAljr4He7F4Ba_7PcsXhldwDk9UHpQRzKQ&usqp=CAU"'
      />
      <h3> {maxmin}</h3>
    </Container>
  )
}

export default DayOfWeek

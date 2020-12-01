import React from "react"
import Container from "../containers/Container"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  Image: {
    height: 50,
  },
})

const DayOfWeek = ({ day, maxmin, weather}) => {
  const classes = useStyles()
  
  const { icon } = weather[0]

  const weatherIcon = require(`../assets/icons/${icon}.png`).default

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
        src={weatherIcon}
      />
      <h3> {maxmin}</h3>
    </Container>
  )
}

export default DayOfWeek

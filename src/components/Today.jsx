import React from "react"
import { createUseStyles } from "react-jss"
import Container from "../containers/Container"

const useStyles = createUseStyles({
  Temperature: {
    margin: "0 0 0 15px",
    font: {
      size: 100,
    },
  },
  Image: {
    height: 150,
  },
  Stats: {
    textAlign: "right",
    padding: "0 20px 0 0 ",
  },
})

const Today = (props) => {
  const { temp, humidity, wind_speed, feels_like, weather } = props.data

  const classes = useStyles()

  const { icon } = weather[0]

  const weatherIcon = require(`../assets/icons/${icon}.png`).default

  return (
    <Container
      justifyContent="space-between"
      alingItems="center"
      width="100%"
      height="50%"
    >
      <h1 className={classes.Temperature}> {temp.toFixed(1)}°</h1>
      <img className={classes.Image} src={weatherIcon} />
      <div className={classes.Stats}>
        <h4> Apparent temperature: {feels_like.toFixed(1)}</h4>
        <h4> Humedity: {humidity}%</h4>
        <h4> Wind: {wind_speed} km/h </h4>
      </div>
    </Container>
  )
}

export default Today

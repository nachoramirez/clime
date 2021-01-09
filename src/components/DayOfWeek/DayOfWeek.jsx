import React from "react"
import {DayOfWeekContainer} from "./DayOfWeek"
import { createUseStyles } from "react-jss"


const useStyles = createUseStyles({
  Image: {
    height: 50,
  },
})

const DayOfWeek = ({ day, maxmin, weather }) => {
  const classes = useStyles()

  const { icon } = weather[0]

  const weatherIcon = require(`../../assets/icons/${icon}.png`).default

  return (
    <DayOfWeekContainer>
      <h1> {day} </h1>
      <img className={classes.Image} alt="Weather Icon" src={weatherIcon} />
      <h3> {maxmin}</h3>
    </DayOfWeekContainer>
  )
}

export default DayOfWeek

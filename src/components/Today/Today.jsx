import React from "react"

import {TodayContainer, Temperature, Image, Stats} from './Today'

const Today = (props) => {
  const { temp, humidity, wind_speed, feels_like, weather } = props.data
  const { icon } = weather[0]

  const weatherIcon = require(`../../assets/icons/${icon}.png`).default

  return (
    <TodayContainer>
      <Temperature> {temp.toFixed(1)}°</Temperature>
      <Image src={weatherIcon} alt="Weather Icon" />
      <Stats>
        <h4> Apparent temperature: {feels_like.toFixed(1)}</h4>
        <h4> Humedity: {humidity}%</h4>
        <h4> Wind: {wind_speed} km/h </h4>
      </Stats>
    </TodayContainer>
  )
}

export default Today

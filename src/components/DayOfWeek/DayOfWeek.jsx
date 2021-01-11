import React from 'react'
import { DayOfWeekContainer, Image, DayBorder } from './DayOfWeek'

import { Link } from 'react-router-dom'

const DayOfWeek = ({ day, maxmin, weather, id, path }) => {
  const { icon } = weather[0]

  const weatherIcon = require(`../../assets/icons/${icon}.png`).default

  return (
    <Link
      to={`/week/${id}`}
      style={{ color: 'inherit', textDecoration: 'inherit' }}
    >
      <DayBorder display={path.slice(-1) == id? 'solid' : 'none'}>
        <DayOfWeekContainer>
          <h1> {day} </h1>
          <Image alt="Weather Icon" src={weatherIcon} />
          <h3> {maxmin}</h3>
        </DayOfWeekContainer>
      </DayBorder>
    </Link>
  )
}

export default DayOfWeek

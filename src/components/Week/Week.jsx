import React from "react"
import { WeekContainer } from './Week'
import DayOfWeek from "../DayOfWeek/DayOfWeek.jsx"
 
const Week = ({ data, today, path }) => {
  return (
    <WeekContainer>
      {data.map((element, index) => {
        const { temp, weather } = element

        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat","Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat","Sun"]

        const day = days[today.getDay() + 1 + index]

        return (
          <DayOfWeek
            key={index}
            id={index}
            day={day}
            maxmin={`${temp.min.toFixed(0)}/${temp.max.toFixed(0)}`}
            weather={weather}
            path={path}
          />
        )
      })}
    </WeekContainer>
  )
}

export default Week

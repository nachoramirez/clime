import React from "react"
import {Container} from "../containers/Container.js"
import DayOfWeek from "./DayOfWeek/DayOfWeek.jsx"

const Week = ({ data, today }) => {
  return (
    <Container>
      {data.map((element, index) => {
        const { temp, weather } = element

        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat","Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",]

        const day = days[today.getDay() + 1 + index]

        return (
          <DayOfWeek
            key={index}
            day={day}
            maxmin={`${temp.min.toFixed(0)}/${temp.max.toFixed(0)}`}
            weather={weather}
          />
        )
      })}
    </Container>
  )
}

export default Week

import React from "react"
import Container from "../containers/Container"
import DayOfWeek from './DayOfWeek'


const Week = () => {
  return (
    <Container>
        <DayOfWeek day='tue' maxmin='30/18'/>
        <DayOfWeek day='wen' maxmin='30/18'/>
        <DayOfWeek day='thu'maxmin='30/18'/>
        <DayOfWeek day='fri'maxmin='30/18'/>
        <DayOfWeek day='sat'maxmin='30/18'/>
        <DayOfWeek day='sun'maxmin='30/18'/>
        <DayOfWeek day='mon'maxmin='30/18'/>
        <DayOfWeek day='tue' maxmin='30/18'/>

    </Container>
  )
}

export default Week

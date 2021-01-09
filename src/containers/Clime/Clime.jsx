import React from "react"

import Today from "../../components/Today/Today.jsx"
import Week from "../../components/Week"
import {Border, Location, ClimeContainer} from './Clime.js'


const Clime = ({ data }) => {
  
  const { current, daily } = data
  const date = new Date()

  return (data.lat === undefined ? <Loading /> :
    <ClimeContainer>
      <Border shadow>
        <Location> Buenos Aires, Argentina</Location>
        <Today data={current}/>

        <Week data={daily} today={date}/>
      </Border>
    </ClimeContainer>
  )
}

export default Clime

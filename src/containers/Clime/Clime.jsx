import React from 'react'
import { useLocation,Link } from 'react-router-dom'
import Today from '../../components/Today/Today.jsx'
import Week from '../../components/Week/Week.jsx'
import Loading from '../../components/Loading/Loading.jsx'

import { Location, ClimeContainer, ClimeBorder } from './Clime.js'


const Clime = ({ data }) => {
  const location = useLocation(useLocation)
  const { current, daily } = data
  const date = new Date()
  
  //verifica en que dia (recurso) esta
  const path = location.pathname
  const day = path.slice(-1)

  return data.lat === undefined ? <Loading /> : 
    <ClimeContainer>
      <ClimeBorder shadow>
        <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit'}}>
          <Location> Buenos Aires, Argentina</Location>
        </Link>
        <Today data={path === '/' ? current : daily[day]} />
        <Week data={daily} today={date} path={path} />
      </ClimeBorder>
    </ClimeContainer>
  
}

export default Clime

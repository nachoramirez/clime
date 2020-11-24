import React from 'react'
import Clime from './containers/Clime.jsx'
import useCallApi from './useCallApi/useCallApi'

import Loading from './components/Loading'

const App = () => {
  const initialState = 
    {
      "lat": '',  
    }
  const API = 'https://api.openweathermap.org/data/2.5/onecall?lat=-34.61&lon=-58.38&exclude=hourly,minutely,alerts&units=metric&appid=3c66c1f8520be630a996f29123e8b77a'

  const data = useCallApi(API,initialState)

  return ( data.lat === '' ? <Loading /> :
    <Clime data={data}/>
  )
}

export default App;

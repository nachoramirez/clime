import React from 'react'
import Clime from './containers/Clime/Clime.jsx'
import useCallApi from './hooks/useCallApi'


import Loading from './components/Loading/Loading.jsx'

const App = () => {

  const API = 'https://api.openweathermap.org/data/2.5/onecall?lat=-34.61&lon=-58.38&exclude=hourly,minutely,alerts&units=metric&appid=3c66c1f8520be630a996f29123e8b77a'

  const data = useCallApi(API,{})

  console.log(data)

  return ( data.lat === undefined ? <Loading /> :
    <Clime data={data}/>
  )
}

export default App;

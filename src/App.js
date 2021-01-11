import React from 'react'
import Clime from './containers/Clime/Clime.jsx'
import Today from './components/Today/Today.jsx'
import useCallApi from './hooks/useCallApi'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

const App = () => {

  const API = 'https://api.openweathermap.org/data/2.5/onecall?lat=-34.61&lon=-58.38&exclude=hourly,minutely,alerts&units=metric&appid=3c66c1f8520be630a996f29123e8b77a'

  const data = useCallApi(API,{})

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Clime data={data}/>
        </Route>
        <Route exact path='/week/:key'>
          <Clime data={data} />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App

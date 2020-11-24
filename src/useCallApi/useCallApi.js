import { useState, useEffect } from "react"

const useCallApi = (API,initialState) => {
  const [state, setState] = useState(initialState)

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setState(data))
      .catch((err) => console.log(err))
  }, [])

  return state
}

export default useCallApi

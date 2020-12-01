import { useState, useEffect } from "react"

const useCallApi = (API,initialState) => {
  const [state, setState] = useState(initialState)

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setState(data))
      .catch((err) => setState(err))
  }, [])

  return state
}

export default useCallApi

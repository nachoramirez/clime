import React from "react"
import Container from "../containers/Container"
import "../loading.css"

const Loading = () => {
  return (
    <Container
      justifyContent="center"
      alingItems="center"
      width="100%"
      height="100vh"
    >
      <div className="loader"></div>
    </Container>
  )
}

export default Loading

import React from "react"
import { createUseStyles } from "react-jss"
import Today from "../components/Today"
import Week from '../components/Week'

import Container from "./Container"

const useStyles = createUseStyles({
  Clime: {
    border: "1px #999999 solid",
    borderRadius: 10,
    padding: "15px 30px 30px 30px ",
    width: "45%",
    height: "43%",
  },
  Location: {
    margin: 0,
    font: {
      size: 40,
      weight: 100,
    },
  },
})

const Clime = () => {
  const classes = useStyles()

  return (
    <Container
      justifyContent="center"
      alingItems="center"
      width="100%"
      height="100vh"
    >
      <div className={classes.Clime}>
        <h1 className={classes.Location}> Buenos Aires, Argentina</h1>
        <Today />

        <Week />
      </div>
    </Container>
  )
}

export default Clime

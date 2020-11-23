import React from "react"
import { createUseStyles } from "react-jss"
import Container from "../containers/Container"

const useStyles = createUseStyles({
  Temperature: {
    margin: '0 0 0 15px',
    font: {
      size: 100,
    },
  },
  Image: {
      height: 150,
  },
  Stats: {
    textAlign: 'right',
    padding: "0 20px 0 0 "
  }
})

const Today = () => {
  const classes = useStyles()

  return (
    <Container
      justifyContent="space-between"
      alingItems="center"
      width="100%"
      height="50%"
    >
      <h1 className={classes.Temperature}> 25°</h1>
      <img className={classes.Image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQniAljr4He7F4Ba_7PcsXhldwDk9UHpQRzKQ&usqp=CAU" />
      <div className={classes.Stats} >
        <h4> Precipitation: 0%</h4>
        <h4> Humedity: 52%</h4>
        <h4> Wind: 29 km/h </h4>
      </div>
    </Container>
  )
}

export default Today

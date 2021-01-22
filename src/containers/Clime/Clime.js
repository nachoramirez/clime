import styled from 'styled-components'
import { Container,Border } from '../Container.js'

export const ClimeBorder = styled(Border)`
  border-radius: 25px;
  padding: 15px 30px 30px 30px;
`

export const Location = styled.h1`
  margin: 0;
  font-size: 40px;
  font-weight:1;


  @media(max-width: 768px) {
    font-size: 60px;
  }

`

export const ClimeContainer = styled(Container)`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`

import styled from 'styled-components'
import { Container } from '../Container.js'

export const Border = styled.div`
  border-radius: 25px;
  padding: 15px 30px 30px 30px;
  border: ${props => props.solid ? '1px #999999 solid' : '0px'};
  box-shadow: ${props => props.shadow ? 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' : '0px'};
`

export const Location = styled.h1`
  margin: 0;
  font-size: 220%;
  font-weight: 100;
`

export const ClimeContainer = styled(Container)`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  
`

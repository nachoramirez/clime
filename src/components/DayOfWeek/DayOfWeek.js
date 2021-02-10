import styled from 'styled-components'
import { Container } from '../../containers/Container'
import { Border } from '../../containers/Container'

export const DayBorder = styled(Border)`
  padding: 0px 6px;
  border-radius: 10px;
`

export const DayOfWeekContainer = styled(Container)`
  

  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 60px;
  height: 50%;

  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
    font-size: 20px;
    flex-direction: column;
    justify-content: space-around;
  }

  @media (max-width: 680px) {
    font-size: 14px;
    width: 45vh;
    height: 50%;
    flex-direction: row;
    justify-content: space-around;
  }
`

export const Day = styled.h1`
  margin: 0;
`

export const Image = styled.img`
  height: 50px;

  @media (max-width: 768px) {
    height: 120px;
    margin: 0px 10px;
  }

  @media (max-width: 720px) {
    height: 60px;
    margin: 0px;
  }
`

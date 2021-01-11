import styled from 'styled-components'
import { Container } from '../../containers/Container'
import { Border } from '../../containers/Container'

export const DayBorder = styled(Border)`
  padding: 0px 6px ;
  border-radius: 10px;
`

export const DayOfWeekContainer = styled(Container)`
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 60px;
  height: 50%;
`

export const Day = styled.h1`
  margin: 0;
`

export const Image = styled.img`
  height: 50px;
`
import styled from 'styled-components'
import { Container } from '../../containers/Container.js'

export const TodayContainer = styled(Container)`
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50%;
`

export const Temperature = styled.h1`
  margin: 0 15px;
  font-size: 100px;
`

export const Image = styled.img`
  height: 120px;
`

export const Stats = styled.div`
  text-align: right;
  padding: 0 20px 0 0;
`

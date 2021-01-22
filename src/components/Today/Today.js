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

  @media (max-width: 768px) {
    height:250px;
    width:250px;
  }
`

export const Stats = styled.div`
  text-align: right;
  padding: 0 20px 0 0;

  @media (max-width: 768px){
    font-size: 25px;
  }

`

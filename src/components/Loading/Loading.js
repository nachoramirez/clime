import styled, { keyframes } from 'styled-components'
import { Container } from '../../containers/Container.js'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Loader = styled.div`
    border: 16px solid #f3f3f3; 
    border-top: 16px solid #3498db; 
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: ${rotate} 2s linear infinite;

  `

export const LoadingContainer = styled(Container)`
    height: 100vh;
`
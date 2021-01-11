import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: #999999;
  font-family: 'Calibri';
`
export const Border = styled.div`
  border: ${(props) => (props.display === 'solid' ? '1px #999999 solid' : '0px')};
  box-shadow: ${(props) =>
    props.shadow ? 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' : '0px'};
`

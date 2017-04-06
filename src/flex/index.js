import styled from 'styled-components'

export const DisplayFlex = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  flex-direction: ${({ column }) => (column ? 'column' : 'inherit')};
`
export const Flex = styled.div`
  position: relative;
  flex: ${({ flex }) => flex || 1};
  height: 100%;
  overflow: ${({ scroll }) => (scroll ? 'auto' : 'hidden')};
`


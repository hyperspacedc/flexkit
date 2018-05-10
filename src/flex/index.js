import styled from 'styled-components'

export const View = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
`
export const Flex = styled.div`
  position: relative;
  flex: ${({ flex }) => flex || 1};
  height: 100%;
  overflow: ${({ scroll }) => (scroll ? 'auto' : 'hidden')};
`


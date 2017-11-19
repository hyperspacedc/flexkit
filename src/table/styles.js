import styled from 'styled-components'

export const Table = styled.div`
  height: 100%;
  background: rgba(0,0,0,0.02);
  border: 1px solid rgba(57,70,78,0.08);
`

export const Header = styled.div`
  background: white;
  color: rgba(0,0,0,0.5);
  font-weight: 600;
  box-shadow: 0 0 1px rgba(57,70,78,0.2);
`

export const HeaderContents = styled.div`
  padding: 10px;
`

export const Row = styled.div`
  padding: 5px;
`

export const Cell = styled.div`
  padding: 5px;
`

export const Footer = styled.div`
  padding: 10px;
  box-shadow: 0 0 1px rgba(57,70,78,0.2);
  color: rgba(0,0,0,0.7);
  background: white;
`

export default {
  Table,
  Header,
  HeaderContents,
  Row,
  Cell,
  Footer
}

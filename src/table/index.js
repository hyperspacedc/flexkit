import React, { PropTypes } from 'react'
import { View, Flex } from '../flex'
import { Table, Header, HeaderContents, Row, Cell, Footer } from './styles'

const { element, string, arrayOf, oneOf, shape, number, object } = PropTypes

const FlexTable = ({
  Header = Header,
  HeaderContents,
  Footer,
  EmptyState,
  className = null,
  headerClassName = null,
  rowClassName = null,
  cellClassName = null,
  footerClassName = null,
  columns,
  rows
}) =>
  <Table className={className}>
    <View column>
      <Header className={headerClassName}>
        <View column>
          {HeaderContents && <HeaderContents />}
          <div>
            <Row className={rowClassName}>
              <View>
                {columns.map(({ label, flex }) =>
                  <Flex flex={flex}>
                    <Cell>{label}</Cell>
                  </Flex>
                )}
              </View>
            </Row>
          </div>
        </View>
      </Header>
      <Flex scroll>
        {rows && rows.length ? rows.map(({ rowProps = {}, rowCells, rowElement }) =>
          <Row {...rowProps} className={rowClassName}>
            <View>
              {rowCells && rowCells.map((el, i) =>
                <Flex flex={columns[i].flex}>
                  <Cell className={cellClassName}>{el}</Cell>
                </Flex>
              )}
            </View>
            <View>
              {rowElement}
            </View>
          </Row>
        ) : EmptyState}
      </Flex>
      {Footer && <Footer className={footerClassName} />}
    </View>
  </Table>

FlexTable.propTypes = {
  Header: element,
  HeaderContents: element,
  Footer: element,
  EmptyState: element,
  headerClassName: string,
  rowClassName: string,
  cellClassName: string,
  footerClassName: string,
  columns: arrayOf(shape({
    label: string,
    flex: oneOf([number, string])
  })),
  rows: arrayOf(shape({
    rowCells: arrayOf(element),
    rowElement: element,
    rowProps: object
  }))
}


export {
  Table,
  Header,
  HeaderContents,
  Row,
  Cell,
  Footer
}
export default FlexTable

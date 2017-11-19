import React, { PropTypes } from 'react'
import { View, Flex } from '../flex'
import { Table, Header, Row, Cell } from './styles'

const { component, element, string, arrayOf, oneOf, shape, number, object } = PropTypes

const FlexTable = ({
  HeaderComponent = Header,
  headerContentsElement,
  footerElement,
  emptyStateElement,
  className = null,
  rowClassName = null,
  cellClassName = null,
  columns,
  rows
}) =>
  <Table className={className}>
    <View column>
      <HeaderComponent>
        <View column>
          {headerContentsElement}
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
      </HeaderComponent>
      <Flex scroll>
        {rows && rows.length ? rows.map(({ rowProps = {}, rowCellElements, rowElement }) =>
          <Row {...rowProps} className={rowClassName}>
            <View>
              {rowCellElements && rowCellElements.map((el, i) =>
                <Flex flex={columns[i].flex}>
                  <Cell className={cellClassName}>{el}</Cell>
                </Flex>
              )}
            </View>
            <View>
              {rowElement}
            </View>
          </Row>
        ) : emptyStateElement}
      </Flex>
      {footerElement}
    </View>
  </Table>

FlexTable.propTypes = {
  HeaderComponent: component,
  headerContentsElement: element,
  footerElement: element,
  emptyStateElement: element,
  className: string,
  rowClassName: string,
  cellClassName: string,
  columns: arrayOf(shape({
    label: string,
    flex: oneOf([number, string])
  })),
  rows: arrayOf(shape({
    rowCellElements: arrayOf(element),
    rowElement: element,
    rowProps: object
  }))
}

export default FlexTable

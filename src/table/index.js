import React, { PropTypes } from 'react'
import { View, Flex } from '../flex'
import { Table, Header, Row, Cell } from './styles'

const { component, element, string, arrayOf, oneOf, shape, number, object } = PropTypes

const FlexTable = ({
  HeaderComponent = Header,
  RowComponent = Row,
  HeaderRowComponent = Row,
  CellComponent = Cell,
  headerContentsElement,
  footerElement,
  emptyStateElement,
  className = null,
  columns,
  rows
}) =>
  <Table className={className}>
    <View column>
      <HeaderComponent>
        <View column>
          {headerContentsElement}
          <div>
            <HeaderRowComponent>
              <View>
                {columns.map(({ label, flex }) =>
                  <Flex flex={flex}>
                    <CellComponent>{label}</CellComponent>
                  </Flex>
                )}
              </View>
            </HeaderRowComponent>
          </div>
        </View>
      </HeaderComponent>
      <Flex scroll>
        {rows && rows.length ? rows.map(({ rowProps = {}, rowCellElements, rowElement }) =>
          <RowComponent {...rowProps}>
            <View>
              {rowCellElements && rowCellElements.map((el, i) =>
                <Flex flex={columns[i].flex}>
                  <CellComponent>{el}</CellComponent>
                </Flex>
              )}
            </View>
            <View>
              {rowElement}
            </View>
          </RowComponent>
        ) : emptyStateElement}
      </Flex>
      {footerElement}
    </View>
  </Table>

FlexTable.propTypes = {
  HeaderComponent: component,
  HeaderRowComponent: component,
  RowComponent: component,
  CellComponent: component,
  headerContentsElement: element,
  footerElement: element,
  emptyStateElement: element,
  className: string,
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

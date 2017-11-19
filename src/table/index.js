import React, { PropTypes } from 'react'
import { View, Flex } from '../flex'
import { Table, TableHeader, TableHeaderContents, TableRow, TableCell, TableFooter } from './styles'

const { element, string, arrayOf, oneOf, shape, number, object } = PropTypes

const FlexTable = ({
  HeaderContents,
  Footer,
  EmptyState,
  headerClassName,
  rowClassName,
  cellClassName,
  footerClassName,
  columns,
  rows
}) =>
  <Table>
    <View column>
      <TableHeader className={headerClassName}>
        <View column>
          {HeaderContents &&
            <TableHeaderContents>
              {HeaderContents}
            </TableHeaderContents>
          }
          <div>
            <TableRow className={rowClassName}>
              <View>
                {columns.map(({ label, flex }) =>
                  <Flex flex={flex}>
                    <TableCell>{label}</TableCell>
                  </Flex>
                )}
              </View>
            </TableRow>
          </div>
        </View>
      </TableHeader>
      <Flex scroll>
        {rows && rows.length ? rows.map(({ rowProps = {}, rowCells, rowElement }) =>
          <TableRow {...rowProps} className={rowClassName}>
            <View>
              {rowCells && rowCells.map((el, i) =>
                <Flex flex={columns[i].flex}>
                  <TableCell className={cellClassName}>{el}</TableCell>
                </Flex>
              )}
            </View>
            <View>
              {rowElement}
            </View>
          </TableRow>
        ) : EmptyState}
      </Flex>
      <TableFooter className={footerClassName}>
        {Footer}
      </TableFooter>
    </View>
  </Table>

FlexTable.propTypes = {
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

export default FlexTable

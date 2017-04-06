import React, { PropTypes } from 'react'
import { DisplayFlex, Flex } from '../flex'
import { Table, TableHeader, TableHeaderContents, TableRow, TableCell, TableFooter } from './styles'

const { element, string, arrayOf, oneOf, shape, number, object } = PropTypes

const FlexTable = ({ HeaderContents, Footer, EmptyState, columns, rows }) =>
  <Table>
    <DisplayFlex column>
      <TableHeader>
        <DisplayFlex column>
          {HeaderContents &&
            <TableHeaderContents>
              {HeaderContents}
            </TableHeaderContents>
          }
          <div>
            <TableRow>
              <DisplayFlex>
                {columns.map(({ label, flex }) =>
                  <Flex flex={flex}>
                    <TableCell>{label}</TableCell>
                  </Flex>
                )}
              </DisplayFlex>
            </TableRow>
          </div>
        </DisplayFlex>
      </TableHeader>
      <Flex scroll>
        <div>
          {rows && rows.length ? rows.map(({ rowProps = {}, rowCells, rowElement }) =>
            <TableRow {...rowProps}>
              <DisplayFlex>
                {rowCells && rowCells.map((el, i) =>
                  <Flex flex={columns[i].flex}>
                    <TableCell>{el}</TableCell>
                  </Flex>
                )}
              </DisplayFlex>
              <DisplayFlex>
                {rowElement}
              </DisplayFlex>
            </TableRow>
          ) : EmptyState}
        </div>
      </Flex>
      <TableFooter>
        {Footer}
      </TableFooter>
    </DisplayFlex>
  </Table>

FlexTable.propTypes = {
  HeaderContents: element,
  Footer: element,
  EmptyState: element,
  columns: arrayOf(shape({
    label: string,
    flex: oneOf([number, string])
  })),
  rowProps: object,
  rows: shape({
    rowCells: arrayOf(element),
    rowElement: element,
    rowProps: object
  })
}

export default FlexTable


import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import styles from './styles.css'

const { element, string, arrayOf, oneOf, shape, number, object } = PropTypes

class Table extends Component {
  static propTypes = {
    HeaderContents: element,
    Footer: element,
    columns: arrayOf(shape({
      label: string,
      flex: oneOf([number, string])
    })),
    rows: arrayOf(element)
  }

  render() {
    const { HeaderContents, Footer, columns, rows } = this.props

    return (
      <div className={styles.table}>
        <div className={styles.displayFlexColumn}>
          <div className={styles.tableHeader}>
            <div className={styles.displayFlexColumn}>
              {HeaderContents &&
                <div className={styles.tableHeaderContents}>
                  {HeaderContents}
                </div>
              }
              <div className={styles.tableHeaderColumnHeaders}>
                <div className={styles.tableRow}>
                  <div className={styles.displayFlex}>
                    {columns.map(({ label, flex }) =>
                      <div className={styles.flex} style={{ flex: flex || 1 }}>
                        <div className={styles.tableCell}>{label}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classNames(styles.flex, styles.flexColumnScroll)}>
            <div className={styles.tableContents}>
              {rows.map((row) =>
                <div className={styles.tableRow}>
                  <div className={styles.displayFlex}>
                    {row.map((element, i) =>
                      <div className={styles.flex} style={{ flex: columns[i].flex || 1 }}>
                        <div className={styles.tableCell}>{element}</div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className={styles.tableFooter}>
            {Footer}
          </div>
        </div>
      </div>
    )
  }
}

export default Table

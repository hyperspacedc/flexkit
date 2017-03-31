import React, { PropTypes } from 'react'
import classNames from 'classnames'
import styles from './styles.css'

const DisplayFlex = ({ className, children, column }) =>
  <div className={displayFlexClasses(column, className)}>
    {children}
  </div>

const displayFlexClasses = (column, className) =>
  classNames(styles.displayFlex, {
    [styles.column]: column
  }, className)

DisplayFlex.propTypes = {
  className: PropTypes.string,
  children: PropTypes.array,
  column: PropTypes.bool
}

const Flex = ({ className, flex = 1, children }) =>
  <div className={classNames(styles.flex, className)} style={{ flex: flexStyle(flex) }}>
    {children}
  </div>

const flexStyle = (flex) =>
  (typeof flex === 'string' ? `0 0 ${flex}` : flex)

Flex.propTypes = {
  className: PropTypes.string,
  flex: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element
  ])
}

export { DisplayFlex, Flex }

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { mapToCssModules } from '../../lib/'

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  noGutters: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
}

const defaultProps = {
  tag: 'div',
}

const Row = (props) => {
  const {
    className,
    cssModule,
    noGutters,
    tag: Tag,
    ...attributes
  } = props

  const classes = mapToCssModules(cx(
    className,
    noGutters ? 'no-gutters' : null,
    'row',
  ), cssModule)

  return (
    <Tag {...attributes} className={classes} />
  )
}

Row.propTypes = propTypes
Row.defaultProps = defaultProps

export default Row

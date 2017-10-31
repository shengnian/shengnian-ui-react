import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { mapToCssModules } from '../../lib/'

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  size: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
}

const defaultProps = {
  tag: 'ul',
}

const Pagination = (props) => {
  const {
    className,
    cssModule,
    size,
    tag: Tag,
    ...attributes
  } = props

  const classes = mapToCssModules(cx(
    className,
    'pagination',
    {
      [`pagination-${size}`]: !!size,
    },
  ), cssModule)

  return (
    <Tag {...attributes} className={classes} />
  )
}

Pagination.propTypes = propTypes
Pagination.defaultProps = defaultProps

export default Pagination

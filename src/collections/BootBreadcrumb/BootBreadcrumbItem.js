import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { mapToCssModules } from '../../lib'

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  active: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
}

const defaultProps = {
  tag: 'li',
}

const BreadcrumbItem = (props) => {
  const {
    className,
    cssModule,
    active,
    tag: Tag,
    ...attributes
  } = props
  const classes = mapToCssModules(cx(
    className,
    active ? 'active' : false,
    'breadcrumb-item',
  ), cssModule)

  return (
    <Tag {...attributes} className={classes} />
  )
}

BreadcrumbItem.propTypes = propTypes
BreadcrumbItem.defaultProps = defaultProps

export default BreadcrumbItem

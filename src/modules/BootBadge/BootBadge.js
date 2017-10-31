import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { mapToCssModules } from '../../lib'

const propTypes = {
  color: PropTypes.string,
  pill: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
}

const defaultProps = {
  color: 'default',
  pill: false,
  tag: 'span',
}

const Badge = (props) => {
  const {
    className,
    cssModule,
    color,
    pill,
    tag: Tag,
    ...attributes
  } = props

  const classes = mapToCssModules(cx(
    className,
    'badge',
    `badge-${color}`,
    pill ? 'badge-pill' : false,
  ), cssModule)

  return (
    <Tag {...attributes} className={classes} />
  )
}

Badge.propTypes = propTypes
Badge.defaultProps = defaultProps

export default Badge

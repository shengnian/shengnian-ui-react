import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { mapToCssModules } from '../../lib/'

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  'aria-label': PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  role: PropTypes.string,
  size: PropTypes.string,
  vertical: PropTypes.bool,
}

const defaultProps = {
  tag: 'div',
  role: 'group',
}

const ButtonGroup = (props) => {
  const {
    className,
    cssModule,
    size,
    vertical,
    tag: Tag,
    ...attributes
  } = props

  const classes = mapToCssModules(cx(
    className,
    size ? `btn-group-${size}` : false,
    vertical ? 'btn-group-vertical' : 'btn-group',
  ), cssModule)

  return (
    <Tag {...attributes} className={classes} />
  )
}

ButtonGroup.propTypes = propTypes
ButtonGroup.defaultProps = defaultProps

export default ButtonGroup
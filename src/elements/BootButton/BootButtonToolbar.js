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
}

const defaultProps = {
  tag: 'div',
  role: 'toolbar',
}

const ButtonToolbar = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props

  const classes = mapToCssModules(cx(
    className,
    'btn-toolbar',
  ), cssModule)

  return (
    <Tag {...attributes} className={classes} />
  )
}

ButtonToolbar.propTypes = propTypes
ButtonToolbar.defaultProps = defaultProps

export default ButtonToolbar

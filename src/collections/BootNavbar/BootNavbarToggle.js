import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { mapToCssModules } from '../../lib/'

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  type: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  children: PropTypes.node,
  right: PropTypes.bool,
  left: PropTypes.bool,
}

const defaultProps = {
  tag: 'button',
  type: 'button',
}

const NavbarToggle = (props) => {
  const {
    className,
    cssModule,
    children,
    right,
    left,
    tag: Tag,
    ...attributes
  } = props

  const classes = mapToCssModules(cx(
    className,
    'navbar-toggler',
    right && 'navbar-toggler-right',
    left && 'navbar-toggler-left',
  ), cssModule)

  return (
    <Tag {...attributes} className={classes}>
      {children || <span className={mapToCssModules('navbar-toggler-icon', cssModule)} />}
    </Tag>
  )
}

NavbarToggle.propTypes = propTypes
NavbarToggle.defaultProps = defaultProps

export default NavbarToggle

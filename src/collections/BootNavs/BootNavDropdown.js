import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { mapToCssModules } from '../../lib/'
import Dropdown from '../../modules/BootDropdown/BootDropdown'

const propTypes = {
  children: PropTypes.node,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
}

const defaultProps = {
  tag: 'li',
}

const NavDropdown = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props

  const classes = mapToCssModules(cx(
    className,
    'nav-item',
  ), cssModule)

  return (
    <Dropdown {...attributes} tag={Tag} className={classes} />
  )
}

NavDropdown.propTypes = propTypes
NavDropdown.defaultProps = defaultProps

export default NavDropdown

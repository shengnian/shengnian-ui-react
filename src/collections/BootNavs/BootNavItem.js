import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { mapToCssModules } from '../../lib/'

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
}

const defaultProps = {
  tag: 'li',
}

const NavItem = (props) => {
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
    <Tag {...attributes} className={classes} />
  )
}

NavItem.propTypes = propTypes
NavItem.defaultProps = defaultProps

export default NavItem

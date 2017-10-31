import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { mapToCssModules } from '../../lib/'

const propTypes = {
  tabs: PropTypes.bool,
  pills: PropTypes.bool,
  vertical: PropTypes.bool,
  justified: PropTypes.bool,
  navbar: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
}

const defaultProps = {
  tag: 'ul',
}

const Nav = (props) => {
  const {
    className,
    cssModule,
    tabs,
    pills,
    vertical,
    justified,
    navbar,
    tag: Tag,
    ...attributes
  } = props

  const classes = mapToCssModules(cx(
    className,
    navbar ? 'navbar-nav' : 'nav',
    {
      'nav-tabs': tabs,
      'nav-pills': pills,
      'nav-justified': justified,
      'flex-column': vertical,
    },
  ), cssModule)

  return (
    <Tag {...attributes} className={classes} />
  )
}

Nav.propTypes = propTypes
Nav.defaultProps = defaultProps

export default Nav

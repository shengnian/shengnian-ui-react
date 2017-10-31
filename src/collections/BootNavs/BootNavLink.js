import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { mapToCssModules } from '../../lib/'

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  getRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  onClick: PropTypes.func,
  href: PropTypes.any,
}

const defaultProps = {
  tag: 'a',
}

class NavLink extends React.Component {
  constructor(props) {
    super(props)

    this.onClick = this.onClick.bind(this)
  }

  onClick(e) {
    if (this.props.disabled) {
      e.preventDefault()
      return
    }

    if (this.props.href === '#') {
      e.preventDefault()
    }

    if (this.props.onClick) {
      this.props.onClick(e)
    }
  }

  render() {
    const {
      className,
      cssModule,
      active,
      tag: Tag,
      getRef,
      ...attributes
    } = this.props

    const classes = mapToCssModules(cx(
      className,
      'nav-link',
      {
        disabled: attributes.disabled,
        active,
      },
    ), cssModule)

    return (
      <Tag {...attributes} ref={getRef} onClick={this.onClick} className={classes} />
    )
  }
}

NavLink.propTypes = propTypes
NavLink.defaultProps = defaultProps

export default NavLink
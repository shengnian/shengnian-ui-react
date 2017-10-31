import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { mapToCssModules } from '../../lib/'

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  fluid: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
}

const defaultProps = {
  tag: 'div',
}

const Container = (props) => {
  const {
    className,
    cssModule,
    fluid,
    tag: Tag,
    ...attributes
  } = props

  const classes = mapToCssModules(cx(
    className,
    fluid ? 'container-fluid' : 'container',
  ), cssModule)

  return (
    <Tag {...attributes} className={classes} />
  )
}

Container.propTypes = propTypes
Container.defaultProps = defaultProps

export default Container
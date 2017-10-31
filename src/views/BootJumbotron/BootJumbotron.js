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

const Jumbotron = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    fluid,
    ...attributes
  } = props

  const classes = mapToCssModules(cx(
    className,
    'jumbotron',
    fluid ? 'jumbotron-fluid' : false,
  ), cssModule)

  return (
    <Tag {...attributes} className={classes} />
  )
}

Jumbotron.propTypes = propTypes
Jumbotron.defaultProps = defaultProps

export default Jumbotron

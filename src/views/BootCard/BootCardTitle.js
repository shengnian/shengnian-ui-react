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
  tag: 'h4',
}

const CardTitle = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props
  const classes = mapToCssModules(cx(
    className,
    'card-title',
  ), cssModule)

  return (
    <Tag {...attributes} className={classes} />
  )
}

CardTitle.propTypes = propTypes
CardTitle.defaultProps = defaultProps

export default CardTitle

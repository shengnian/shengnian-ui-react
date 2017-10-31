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
  tag: 'h6',
}

const CardSubtitle = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props
  const classes = mapToCssModules(cx(
    className,
    'card-subtitle',
  ), cssModule)

  return (
    <Tag {...attributes} className={classes} />
  )
}

CardSubtitle.propTypes = propTypes
CardSubtitle.defaultProps = defaultProps

export default CardSubtitle

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { mapToCssModules } from '../../lib/'

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  top: PropTypes.bool,
  bottom: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
}

const defaultProps = {
  tag: 'img',
}

const CardImage = (props) => {
  const {
    className,
    cssModule,
    top,
    bottom,
    tag: Tag,
    ...attributes
  } = props

  let cardImgClassName = 'card-img'
  if (top) {
    cardImgClassName = 'card-img-top'
  }
  if (bottom) {
    cardImgClassName = 'card-img-bottom'
  }

  const classes = mapToCssModules(cx(
    className,
    cardImgClassName,
  ), cssModule)

  return (
    <Tag {...attributes} className={classes} />
  )
}

CardImage.propTypes = propTypes
CardImage.defaultProps = defaultProps

export default CardImage

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { mapToCssModules } from '../../lib/'

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  getRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
}

const defaultProps = {
  tag: 'a',
}

const CardLink = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    getRef,
    ...attributes
  } = props
  const classes = mapToCssModules(cx(
    className,
    'card-link',
  ), cssModule)

  return (
    <Tag {...attributes} ref={getRef} className={classes} />
  )
}

CardLink.propTypes = propTypes
CardLink.defaultProps = defaultProps

export default CardLink

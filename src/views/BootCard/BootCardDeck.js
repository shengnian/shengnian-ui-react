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
  tag: 'div',
}

const CardDeck = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props
  const classes = mapToCssModules(cx(
    className,
    'card-deck',
  ), cssModule)

  return (
    <Tag {...attributes} className={classes} />
  )
}

CardDeck.propTypes = propTypes
CardDeck.defaultProps = defaultProps

export default CardDeck

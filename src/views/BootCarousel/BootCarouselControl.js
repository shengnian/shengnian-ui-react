/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { mapToCssModules } from '../../lib/'

const CarouselControl = (props) => {
  const { direction, onClickHandler, cssModule, directionText } = props

  const anchorClasses = mapToCssModules(cx(
    `carousel-control-${direction}`,
  ), cssModule)

  const iconClasses = mapToCssModules(cx(
    `carousel-control-${direction}-icon`,
  ), cssModule)

  const screenReaderClasses = mapToCssModules(cx(
    'sr-only',
  ), cssModule)


  return (
    <a
      className={anchorClasses}
      role='button'
      onClick={(e) => {
        e.preventDefault()
        onClickHandler()
      }}
    >
      <span className={iconClasses} aria-hidden='true' />
      <span className={screenReaderClasses}>{directionText || direction}</span>
    </a>
  )
}

CarouselControl.propTypes = {
  direction: PropTypes.oneOf(['prev', 'next']).isRequired,
  onClickHandler: PropTypes.func.isRequired,
  cssModule: PropTypes.object,
  directionText: PropTypes.string,
}

export default CarouselControl

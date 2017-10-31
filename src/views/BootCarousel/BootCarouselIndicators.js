/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { mapToCssModules } from '../../lib/'

const CarouselIndicators = (props) => {
  const { items, activeIndex, cssModule, onClickHandler } = props

  const listClasses = mapToCssModules('carousel-indicators', cssModule)
  const indicators = items.map((item, idx) => {
    const indicatorClasses = mapToCssModules(cx(
      { active: activeIndex === idx },
    ), cssModule)
    const liKey = `key${idx}`
    return (
      <li
        key={liKey}
        onClick={(e) => {
          e.preventDefault()
          onClickHandler(idx)
        }}
        className={indicatorClasses}
      />)
  })

  return (
    <ol className={listClasses}>
      {indicators}
    </ol>
  )
}

CarouselIndicators.propTypes = {
  items: PropTypes.array.isRequired,
  activeIndex: PropTypes.number.isRequired,
  cssModule: PropTypes.object,
  onClickHandler: PropTypes.func.isRequired,
}

export default CarouselIndicators

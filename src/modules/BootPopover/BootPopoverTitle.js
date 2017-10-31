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
  tag: 'h3',
}

const PopoverTitle = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props

  const classes = mapToCssModules(cx(
    className,
    'popover-title',
  ), cssModule)

  return (
    <Tag {...attributes} className={classes} />
  )
}

PopoverTitle.propTypes = propTypes
PopoverTitle.defaultProps = defaultProps

export default PopoverTitle

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import toNumber from 'lodash/toNumber'
import { mapToCssModules } from '../../lib/'

const propTypes = {
  child: PropTypes.node,
  bar: PropTypes.bool,
  multi: PropTypes.bool,
  tag: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  max: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  animated: PropTypes.bool,
  striped: PropTypes.bool,
  color: PropTypes.string,
  className: PropTypes.string,
  barClassName: PropTypes.string,
  cssModule: PropTypes.object,
}

const defaultProps = {
  tag: 'div',
  value: 0,
  max: 100,
}

const Progress = (props) => {
  const {
    child,
    className,
    barClassName,
    cssModule,
    value,
    max,
    animated,
    striped,
    color,
    bar,
    multi,
    tag: Tag,
    ...attributes
  } = props

  const percent = ((toNumber(value) / toNumber(max)) * 100)

  const progressClasses = mapToCssModules(cx(
    className,
    'progress',
  ), cssModule)

  const progressBarClasses = mapToCssModules(cx(
    'progress-bar',
    bar ? className || barClassName : barClassName,
    animated ? 'progress-bar-animated' : null,
    color ? `bg-${color}` : null,
    striped || animated ? 'progress-bar-striped' : null,
  ), cssModule)

  const ProgressBar = multi ? child : (
    <div
      className={progressBarClasses}
      style={{ width: `${percent}%` }}
      role='progressbar'
      aria-valuenow={value}
      aria-valuemin='0'
      aria-valuemax={max}
      child={child}
    />
  )

  if (bar) {
    return ProgressBar
  }

  return (
    <Tag {...attributes} className={progressClasses} child={ProgressBar} />
  )
}

Progress.propTypes = propTypes
Progress.defaultProps = defaultProps

export default Progress

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { mapToCssModules } from '../../lib/'
import { BootButton } from '../BootButton'

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  child: PropTypes.node,
  groupClassName: PropTypes.string,
  groupAttributes: PropTypes.object,
  className: PropTypes.string,
  cssModule: PropTypes.object,
}

const defaultProps = {
  tag: 'div',
}

const InputGroupButton = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    child,
    groupClassName,
    groupAttributes,
    ...attributes
  } = props

  if (typeof child === 'string') {
    const groupClasses = mapToCssModules(cx(
      groupClassName,
      'input-group-btn',
    ), cssModule)

    return (
      <Tag {...groupAttributes} className={groupClasses}>
        <BootButton {...attributes} className={className} child={child} />
      </Tag>
    )
  }

  const classes = mapToCssModules(cx(
    className,
    'input-group-btn',
  ), cssModule)

  return (
    <Tag {...attributes} className={classes} child={child} />
  )
}

InputGroupButton.propTypes = propTypes
InputGroupButton.defaultProps = defaultProps

export default InputGroupButton

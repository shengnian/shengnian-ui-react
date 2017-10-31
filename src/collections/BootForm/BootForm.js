import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { mapToCssModules } from '../../lib/'

const propTypes = {
  children: PropTypes.node,
  inline: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  getRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
}

const defaultProps = {
  tag: 'form',
}

const Form = (props) => {
  const {
    className,
    cssModule,
    inline,
    tag: Tag,
    getRef,
    ...attributes
  } = props

  const classes = mapToCssModules(cx(
    className,
    inline ? 'form-inline' : false,
  ), cssModule)

  return (
    <Tag {...attributes} ref={getRef} className={classes} />
  )
}

Form.propTypes = propTypes
Form.defaultProps = defaultProps

export default Form

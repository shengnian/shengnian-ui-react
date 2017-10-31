import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { mapToCssModules } from '../../lib/'

const propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
}

const defaultProps = {
  tag: 'div',
}

const FormFeedback = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props

  const classes = mapToCssModules(cx(
    className,
    'form-control-feedback',
  ), cssModule)

  return (
    <Tag {...attributes} className={classes} />
  )
}

FormFeedback.propTypes = propTypes
FormFeedback.defaultProps = defaultProps

export default FormFeedback

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { mapToCssModules } from '../../lib/'

const propTypes = {
  children: PropTypes.node,
  inline: PropTypes.bool,
  tag: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
}

const defaultProps = {
  tag: 'small',
}

const FormText = (props) => {
  const {
    className,
    cssModule,
    inline,
    color,
    tag: Tag,
    ...attributes
  } = props

  const classes = mapToCssModules(cx(
    className,
    !inline ? 'form-text' : false,
    color ? `text-${color}` : false,
  ), cssModule)

  return (
    <Tag {...attributes} className={classes} />
  )
}

FormText.propTypes = propTypes
FormText.defaultProps = defaultProps

export default FormText

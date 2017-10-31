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

const ModalBody = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes } = props
  const classes = mapToCssModules(cx(
    className,
    'modal-body',
  ), cssModule)

  return (
    <Tag {...attributes} className={classes} />
  )
}

ModalBody.propTypes = propTypes
ModalBody.defaultProps = defaultProps

export default ModalBody

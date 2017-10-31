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

const ModalFooter = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes } = props
  const classes = mapToCssModules(cx(
    className,
    'modal-footer',
  ), cssModule)

  return (
    <Tag {...attributes} className={classes} />
  )
}

ModalFooter.propTypes = propTypes
ModalFooter.defaultProps = defaultProps

export default ModalFooter

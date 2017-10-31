import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { mapToCssModules } from '../../lib'

const propTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
}

const defaultProps = {
  tag: 'ol',
}

const Breadcrumb = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props
  const classes = mapToCssModules(cx(
    className,
    'breadcrumb',
  ), cssModule)

  return (
    <Tag {...attributes} className={classes} />
  )
}

Breadcrumb.propTypes = propTypes
Breadcrumb.defaultProps = defaultProps

export default Breadcrumb

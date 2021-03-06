import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import isobject from 'lodash/isObject'
import { mapToCssModules } from '../../lib/'

const colWidths = ['xs', 'sm', 'md', 'lg', 'xl']

const stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string])

const columnProps = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.shape({
    size: stringOrNumberProp,
    push: stringOrNumberProp,
    pull: stringOrNumberProp,
    offset: stringOrNumberProp,
  }),
])

const propTypes = {
  children: PropTypes.node,
  hidden: PropTypes.bool,
  check: PropTypes.bool,
  inline: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  for: PropTypes.string,
  tag: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  widths: PropTypes.array,
}

const defaultProps = {
  tag: 'label',
  widths: colWidths,
}

const getColumnSizeClass = (isXs, colWidth, colSize) => {
  if (colSize === true || colSize === '') {
    return isXs ? 'col' : `col-${colWidth}`
  } else if (colSize === 'auto') {
    return isXs ? 'col-auto' : `col-${colWidth}-auto`
  }

  return isXs ? `col-${colSize}` : `col-${colWidth}-${colSize}`
}

const Label = (props) => {
  const {
    className,
    cssModule,
    hidden,
    widths,
    tag: Tag,
    check,
    inline,
    disabled,
    size,
    for: htmlFor,
    ...attributes
  } = props

  const colClasses = []

  widths.forEach((colWidth, i) => {
    const columnProp = props[colWidth]

    delete attributes[colWidth]

    if (!columnProp) {
      return
    }

    const isXs = !i
    let colClass

    if (isobject(columnProp)) {
      const colSizeInterfix = isXs ? '-' : `-${colWidth}-`
      colClass = getColumnSizeClass(isXs, colWidth, columnProp.size)

      colClasses.push(mapToCssModules(cx({
        [colClass]: columnProp.size || columnProp.size === '',
        [`push${colSizeInterfix}${columnProp.push}`]: columnProp.push || columnProp.push === 0,
        [`pull${colSizeInterfix}${columnProp.pull}`]: columnProp.pull || columnProp.pull === 0,
        [`offset${colSizeInterfix}${columnProp.offset}`]: columnProp.offset || columnProp.offset === 0,
      })), cssModule)
    } else {
      colClass = getColumnSizeClass(isXs, colWidth, columnProp)
      colClasses.push(colClass)
    }
  })

  const classes = mapToCssModules(cx(
    className,
    hidden ? 'sr-only' : false,
    check ? `form-check-${inline ? 'inline' : 'label'}` : false,
    check && inline && disabled ? 'disabled' : false,
    size ? `col-form-label-${size}` : false,
    colClasses,
    colClasses.length ? 'col-form-label' : false,
    !check && !colClasses.length ? 'form-control-label' : false,
  ), cssModule)

  return (
    <Tag htmlFor={htmlFor} {...attributes} className={classes} />
  )
}

Label.propTypes = propTypes
Label.defaultProps = defaultProps

export default Label

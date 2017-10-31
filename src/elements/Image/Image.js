import _ from 'lodash'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import {
  childrenUtils,
  createShorthandFactory,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  SUI,
  useKeyOnly,
  useKeyOrValueAndKey,
  useValueAndKey,
  useVerticalAlignProp,
} from '../../lib'
import Dimmer from '../../modules/Dimmer'
import Label from '../Label/Label'

import ImageGroup from './ImageGroup'

/**
 * An image is a graphic representation of something.
 * @see Icon
 */
function Image(props) {
  const {
    alt,
    avatar,
    bordered,
    centered,
    children,
    circular,
    className,
    content,
    dimmer,
    disabled,
    floated,
    fluid,
    height,
    hidden,
    href,
    inline,
    label,
    rounded,
    size,
    spaced,
    src,
    verticalAlign,
    width,
    wrapped,
    ui,
  } = props

  const classes = cx(
    useKeyOnly(ui, 'ui'),
    size,
    useKeyOnly(avatar, 'avatar'),
    useKeyOnly(bordered, 'bordered'),
    useKeyOnly(circular, 'circular'),
    useKeyOnly(centered, 'centered'),
    useKeyOnly(disabled, 'disabled'),
    useKeyOnly(fluid, 'fluid'),
    useKeyOnly(hidden, 'hidden'),
    useKeyOnly(inline, 'inline'),
    useKeyOnly(rounded, 'rounded'),
    useKeyOrValueAndKey(spaced, 'spaced'),
    useValueAndKey(floated, 'floated'),
    useVerticalAlignProp(verticalAlign, 'aligned'),
    'image',
    className,
  )
  const rest = getUnhandledProps(Image, props)
  const ElementType = getElementType(Image, props, () => {
    if (!_.isNil(dimmer) || !_.isNil(label) || !_.isNil(wrapped) || !childrenUtils.isNil(children)) return 'div'
  })

  if (!childrenUtils.isNil(children)) {
    return <ElementType {...rest} className={classes}>{children}</ElementType>
  }
  if (!childrenUtils.isNil(content)) {
    return <ElementType {...rest} className={classes}>{content}</ElementType>
  }

  const rootProps = { ...rest, className: classes }
  const imgTagProps = { alt, src, height, width }

  if (ElementType === 'img') return <ElementType {...rootProps} {...imgTagProps} />

  return (
    <ElementType {...rootProps} href={href}>
      {Dimmer.create(dimmer)}
      {Label.create(label)}
      <img {...imgTagProps} />
    </ElementType>
  )
}

Image.Group = ImageGroup

Image._meta = {
  name: 'Image',
  type: META.TYPES.ELEMENT,
}

Image.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Alternate text for the image specified. */
  alt: PropTypes.string,

  /** An image may be formatted to appear inline with text as an avatar. */
  avatar: PropTypes.bool,

  /** An image may include a border to emphasize the edges of white or transparent content. */
  bordered: PropTypes.bool,

  /** An image can appear centered in a content block. */
  centered: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** An image may appear circular. */
  circular: PropTypes.bool,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** An image can show that it is disabled and cannot be selected. */
  disabled: PropTypes.bool,

  /** Shorthand for Dimmer. */
  dimmer: customPropTypes.itemShorthand,

  /** An image can sit to the left or right of other content. */
  floated: PropTypes.oneOf(SUI.FLOATS),

  /** An image can take up the width of its container. */
  fluid: customPropTypes.every([
    PropTypes.bool,
    customPropTypes.disallow(['size']),
  ]),

  /** The img element height attribute. */
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),

  /** An image can be hidden. */
  hidden: PropTypes.bool,

  /** Renders the Image as an <a> tag with this href. */
  href: PropTypes.string,

  /** An image may appear inline. */
  inline: PropTypes.bool,

  /** Shorthand for Label. */
  label: customPropTypes.itemShorthand,

  /** An image may appear rounded. */
  rounded: PropTypes.bool,

  /** An image may appear at different sizes. */
  size: PropTypes.oneOf(SUI.SIZES),

  /** An image can specify that it needs an additional spacing to separate it from nearby content. */
  spaced: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['left', 'right']),
  ]),

  /** Specifies the URL of the image. */
  src: PropTypes.string,

  /** Whether or not to add the ui className. */
  ui: PropTypes.bool,

  /** An image can specify its vertical alignment. */
  verticalAlign: PropTypes.oneOf(SUI.VERTICAL_ALIGNMENTS),

  /** The img element width attribute. */
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),

  /** An image can render wrapped in a `div.ui.image` as alternative HTML markup. */
  wrapped: PropTypes.bool,
}

Image.defaultProps = {
  as: 'img',
  ui: true,
}

Image.create = createShorthandFactory(Image, value => ({ src: value }))

export default Image
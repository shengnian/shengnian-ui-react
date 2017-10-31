import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { mapToCssModules } from '../../lib/'

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  tabId: PropTypes.any,
}

const defaultProps = {
  tag: 'div',
}

const contextTypes = {
  activeTabId: PropTypes.any,
}

export default function TabPanel(props, context) {
  const {
    className,
    cssModule,
    tabId,
    tag: Tag,
    ...attributes
  } = props
  const classes = mapToCssModules(cx('tab-pane', className, { active: tabId === context.activeTabId }), cssModule)
  return (
    <Tag {...attributes} className={classes} />
  )
}
TabPanel.propTypes = propTypes
TabPanel.defaultProps = defaultProps
TabPanel.contextTypes = contextTypes

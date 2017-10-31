import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import mapToCssModules from '../../lib/mapToCssModules'

const FirstChild = ({ children }) => (
  React.Children.toArray(children)[0] || null
)

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  closeClassName: PropTypes.string,
  closeAriaLabel: PropTypes.string,
  cssModule: PropTypes.object,
  color: PropTypes.string,
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  appearTimeout: PropTypes.number,
  enterTimeout: PropTypes.number,
  exitTimeout: PropTypes.number,
}

const defaultProps = {
  color: 'success',
  isOpen: true,
  tag: 'div',
  appearTimeout: 150,
  enterTimeout: 150,
  exitTimeout: 150,
  closeAriaLabel: 'Close',
}

const Alert = (props) => {
  const {
    className,
    closeClassName,
    closeAriaLabel,
    cssModule,
    tag: Tag,
    color,
    isOpen,
    toggle,
    children,
    appearTimeout,
    enterTimeout,
    exitTimeout,
    ...attributes
  } = props

  const classes = mapToCssModules(cx(
    className,
    'alert',
    `alert-${color}`,
    { 'alert-dismissible': toggle },
  ), cssModule)

  const closeClasses = mapToCssModules(cx('close', closeClassName), cssModule)

  const alert = (
    <Tag {...attributes} className={classes} role='alert'>
      { toggle ?
        <button type='button' className={closeClasses} aria-label={closeAriaLabel} onClick={toggle}>
          <span aria-hidden='true'>&times;</span>
        </button>
        : null }
      { children }
    </Tag>
  )

  return (
    <TransitionGroup
      component={FirstChild}
      enter={enterTimeout > 0}
      appear={appearTimeout > 0}
      exit={exitTimeout > 0}
    >
      <CSSTransition
        cx={{
          appear: 'fade',
          appearActive: 'show',
          enter: 'fade',
          enterActive: 'show',
          exit: 'fade',
          exitActive: 'out',
        }}
        timeout={{
          appear: appearTimeout,
          enter: enterTimeout,
          exit: exitTimeout,
        }}
      >
        {isOpen ? alert : null}
      </CSSTransition>
    </TransitionGroup>
  )
}

Alert.propTypes = propTypes
Alert.defaultProps = defaultProps

export default Alert

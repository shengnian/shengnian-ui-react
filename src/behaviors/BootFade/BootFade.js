import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { mapToCssModules, omit } from '../../lib/'

const propTypes = {
  baseClass: PropTypes.string,
  baseClassIn: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  appearTimeout: PropTypes.number,
  enterTimeout: PropTypes.number,
  exitTimeout: PropTypes.number,
  appear: PropTypes.bool,
  enter: PropTypes.bool,
  exit: PropTypes.bool,
  onExit: PropTypes.func,
  onEnter: PropTypes.func,
}

const defaultProps = {
  tag: 'div',
  baseClass: 'fade',
  baseClassIn: 'show',
  appearTimeout: 0,
  enterTimeout: 0,
  exitTimeout: 0,
  appear: true,
  enter: true,
  exit: true,
}

class Fade extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mounted: !props.appear,
    }

    this.onExit = this.onExit.bind(this)
    this.onEnter = this.onEnter.bind(this)
    this.timers = []
  }

  componentWillUnmount() {
    this.timers.forEach(timer => clearTimeout(timer))
  }
  onEnter(cb) {
    return () => {
      cb()
      if (this.props.onEnter) {
        this.props.onEnter()
      }
    }
  }
  onExit(cb) {
    return () => {
      cb()
      if (this.props.onExit) {
        this.props.onExit()
      }
    }
  }

  componentWillAppear(cb) {
    if (!this.props.appear) {
      this.onEnter(cb)()
    }

    this.timers.push(setTimeout(this.onEnter(cb), this.props.appearTimeout))
  }

  componentDidAppear() {
    this.setState({
      mounted: true,
    })
  }

  componentWillEnter(cb) {
    if (!this.props.enter) {
      this.onEnter(cb)()
    }

    this.timers.push(setTimeout(this.onEnter(cb), this.props.enterTimeout))
  }

  componentDidEnter() {
    this.setState({
      mounted: true,
    })
  }

  componentWillExit(cb) {
    this.setState({
      mounted: false,
    })

    if (!this.props.exit) {
      this.onLeave(cb)()
    }

    this.timers.push(setTimeout(this.onExit(cb), this.props.exitTimeout))
  }
  render() {
    const {
      baseClass,
      baseClassIn,
      className,
      cssModule,
      tag: Tag,
    } = this.props
    const attributes = omit(this.props, Object.keys(propTypes))

    const classes = mapToCssModules(cx(
      className,
      baseClass,
      this.state.mounted ? baseClassIn : false,
    ), cssModule)

    return (
      <Tag {...attributes} className={classes} />
    )
  }
}

Fade.propTypes = propTypes
Fade.defaultProps = defaultProps

export default Fade

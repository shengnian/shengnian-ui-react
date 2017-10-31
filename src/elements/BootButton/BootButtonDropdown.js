import React from 'react'
import PropTypes from 'prop-types'
import { BootDropdown } from '../../modules/BootDropdown'

const propTypes = {
  children: PropTypes.node,
}

const ButtonDropdown = props => (
  <BootDropdown group {...props} />
)

ButtonDropdown.propTypes = propTypes

export default ButtonDropdown

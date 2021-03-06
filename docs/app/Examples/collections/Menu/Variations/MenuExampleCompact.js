import React, { Component } from 'react'
import { Icon, Menu } from 'shengnian-ui-react'

export default class MenuExampleCompact extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu compact icon='labeled'>
        <Menu.Item name='gamepad' active={activeItem === 'gamepad'} onClick={this.handleItemClick}>
          <Icon name='gamepad' />
          Games
        </Menu.Item>

        <Menu.Item name='video camera' active={activeItem === 'video camera'} onClick={this.handleItemClick}>
          <Icon name='video camera' />
          Channels
        </Menu.Item>

        <Menu.Item name='video play' active={activeItem === 'video play'} onClick={this.handleItemClick}>
          <Icon name='video play' />
          Videos
        </Menu.Item>
      </Menu>
    )
  }
}

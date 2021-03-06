import React, { Component } from 'react'
import { Button, Checkbox } from 'shengnian-ui-react'

export default class CheckboxExampleRemoteControl extends Component {
  state = { checked: false }
  toggle = () => this.setState({ checked: !this.state.checked })

  render() {
    return (
      <div>
        <Button onClick={this.toggle}>Toggle it</Button>
        <Checkbox label='Check this box' onChange={this.toggle} checked={this.state.checked} />
      </div>
    )
  }
}

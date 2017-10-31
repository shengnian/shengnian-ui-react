import React from 'react'
import { Icon, Input } from 'shengnian-ui-react'

const InputExampleIconChild = () => (
  <div>
    <Input icon placeholder='Search...'>
      <input />
      <Icon name='search' />
    </Input>
    <br />
    <br />
    <Input iconPosition='left' placeholder='Email'>
      <Icon name='at' />
      <input />
    </Input>
  </div>
)

export default InputExampleIconChild

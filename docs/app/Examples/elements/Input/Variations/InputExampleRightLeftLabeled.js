import React from 'react'
import { Input, Label } from 'shengnian-ui-react'

const InputExampleRightLeftLabeled = () => (
  <Input labelPosition='right' type='text' placeholder='Amount'>
    <Label basic>$</Label>
    <input />
    <Label>.00</Label>
  </Input>
)

export default InputExampleRightLeftLabeled

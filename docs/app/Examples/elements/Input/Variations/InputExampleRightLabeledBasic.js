import React from 'react'
import { Input } from 'shengnian-ui-react'

const InputExampleRightLabeledBasic = () => (
  <Input
    label={{ basic: true, content: 'kg' }}
    labelPosition='right'
    placeholder='Enter weight...'
  />
)

export default InputExampleRightLabeledBasic

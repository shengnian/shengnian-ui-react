import React from 'react'
import { Input } from 'shengnian-ui-react'

const InputExampleRightLabeledTag = () => (
  <Input
    icon='tags'
    iconPosition='left'
    label={{ tag: true, content: 'Add Tag' }}
    labelPosition='right'
    placeholder='Enter tags'
  />
)

export default InputExampleRightLabeledTag

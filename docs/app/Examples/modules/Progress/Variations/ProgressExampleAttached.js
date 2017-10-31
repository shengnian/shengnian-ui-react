import React from 'react'
import { Progress, Segment } from 'shengnian-ui-react'

const ProgressExampleAttached = () => (
  <Segment>
    <Progress percent={50} attached='top' />
    La la la la
    <Progress percent={50} attached='bottom' />
  </Segment>
)

export default ProgressExampleAttached

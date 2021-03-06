import React from 'react'
import { Icon, Step } from 'shengnian-ui-react'

const StepExampleSizeLarge = () => (
  <Step.Group size='large'>
    <Step>
      <Icon name='truck' />
      <Step.Content>
        <Step.Title>Shipping</Step.Title>
      </Step.Content>
    </Step>

    <Step active>
      <Icon name='payment' />
      <Step.Content>
        <Step.Title>Billing</Step.Title>
      </Step.Content>
    </Step>
  </Step.Group>
)

export default StepExampleSizeLarge

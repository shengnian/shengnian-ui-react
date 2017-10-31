import React from 'react'
import { Icon, Step } from 'shengnian-ui-react'

const StepExampleEvenlyDivided = () => (
  <Step.Group widths={3}>
    <Step>
      <Icon icon='truck' />
      <Step.Content>
        <Step.Title>Shipping</Step.Title>
      </Step.Content>
    </Step>
    <Step active>
      <Icon name='credit card' />
      <Step.Content>
        <Step.Title>Billing</Step.Title>
      </Step.Content>
    </Step>
    <Step disabled>
      <Icon name='info' />
      <Step.Content>
        <Step.Title>Confirm Order</Step.Title>
      </Step.Content>
    </Step>
  </Step.Group>
)

export default StepExampleEvenlyDivided

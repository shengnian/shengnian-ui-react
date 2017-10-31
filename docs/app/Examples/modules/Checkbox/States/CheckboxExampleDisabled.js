import React from 'react'
import { Form, Checkbox } from 'shengnian-ui-react'

const CheckboxExampleDisabled = () => (
  <Form>
    <Form.Field>
      <Checkbox label='Disabled' disabled />
    </Form.Field>
    <Form.Field>
      <Checkbox toggle label='Disabled' disabled />
    </Form.Field>
  </Form>
)

export default CheckboxExampleDisabled

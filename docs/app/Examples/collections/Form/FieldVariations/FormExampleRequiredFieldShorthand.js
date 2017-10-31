import React from 'react'
import { Form } from 'shengnian-ui-react'

const FormExampleRequiredFieldShorthand = () => (
  <Form>
    <Form.Checkbox
      inline
      label='I agree to the terms and conditions'
      required
    />
  </Form>
)

export default FormExampleRequiredFieldShorthand

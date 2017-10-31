import React from 'react'
import { Button } from 'shengnian-ui-react'

const ButtonExampleMultipleConditionals = () => (
  <Button.Group>
    <Button>One</Button>
    <Button.Or />
    <Button>Two</Button>
    <Button.Or />
    <Button>Three</Button>
  </Button.Group>
)

export default ButtonExampleMultipleConditionals

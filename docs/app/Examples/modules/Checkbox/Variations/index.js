import React from 'react'
import { Message } from 'shengnian-ui-react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const CheckboxVariationsExamples = () => (
  <ExampleSection title='Variations'>
    <ComponentExample
      title='Fitted'
      description='A fitted checkbox does not leave padding for a label.'
      examplePath='modules/Checkbox/Variations/CheckboxExampleFitted'
    >
      <Message>
        The{' '}
        <a href='https://shengnian.github.io/modules/checkbox.html#fitted' rel='noopener noreferrer' target='_blank'>
          <code>fitted</code>
        </a>
        {' '}class is automatically applied if there is no <code>label</code> prop.
      </Message>
    </ComponentExample>
  </ExampleSection>
)

export default CheckboxVariationsExamples

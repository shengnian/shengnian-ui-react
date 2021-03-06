import React from 'react'
import { Button, Dropdown } from 'shengnian-ui-react'

const options = [
  { key: 'edit', icon: 'edit', text: 'Edit Post', value: 'edit' },
  { key: 'delete', icon: 'delete', text: 'Remove Post', value: 'delete' },
  { key: 'hide', icon: 'hide', text: 'Hide Post', value: 'hide' },
]

const DropdownExampleFloating = () => (
  <Button.Group color='teal'>
    <Button>Save</Button>
    <Dropdown options={options} floating button className='icon' />
  </Button.Group>
)

export default DropdownExampleFloating

import React from 'react'
import { Dropdown, Input } from 'shengnian-ui-react'

import { tagOptions } from '../common'

const DropdownExampleSearchInMenuScrolling = () => (
  <Dropdown text='Filter Posts' icon='filter'>
    <Dropdown.Menu>
      <Input icon='search' iconPosition='left' className='search' />
      <Dropdown.Divider />
      <Dropdown.Header icon='tags' content='Tag Label' />
      <Dropdown.Menu scrolling>
        {tagOptions.map(option => <Dropdown.Item key={option.value} {...option} />)}
      </Dropdown.Menu>
    </Dropdown.Menu>
  </Dropdown>
)

export default DropdownExampleSearchInMenuScrolling

import React from 'react'
import { Dropdown, Message } from 'shengnian-ui-react'

const DropdownExampleMessage = () => (
  <Dropdown text='Login' icon='filter' floating labeled button className='icon'>
    <Dropdown.Menu>
      <Message error header='Error' content='You must log-in to see all categories' />
    </Dropdown.Menu>
  </Dropdown>
)

export default DropdownExampleMessage

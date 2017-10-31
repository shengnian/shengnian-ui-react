import React from 'react'
import { Dropdown } from 'shengnian-ui-react'

const DropdownExampleRemoveNoResultsMessage = () => (
  <Dropdown
    options={[]}
    search
    selection
    placeholder='No message...'
    noResultsMessage={null}
  />
)

export default DropdownExampleRemoveNoResultsMessage

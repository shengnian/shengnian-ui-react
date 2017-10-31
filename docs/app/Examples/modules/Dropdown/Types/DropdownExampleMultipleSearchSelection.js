import React from 'react'
import { Dropdown } from 'shengnian-ui-react'

import { stateOptions } from '../common'
// stateOptions = [ { key: 'AL', value: 'AL', text: 'Alabama' }, ...  ]

const DropdownExampleMultipleSearchSelection = () => (
  <Dropdown placeholder='State' fluid multiple search selection options={stateOptions} />
)

export default DropdownExampleMultipleSearchSelection

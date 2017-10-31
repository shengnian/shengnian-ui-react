import React from 'react'
import { Dropdown } from 'shengnian-ui-react'

import { stateOptions } from '../common'
// stateOptions = [ { key: 'AL', value: 'AL', text: 'Alabama' }, ...  ]

const DropdownExampleSearchSelectionTwo = () => (
  <Dropdown placeholder='State' search selection options={stateOptions} />
)

export default DropdownExampleSearchSelectionTwo

import React from 'react'
import { Dropdown } from 'shengnian-ui-react'

import { countryOptions } from '../common'
// countryOptions = [ { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' }, ...  ]

const DropdownExampleSearchSelection = () => (
  <Dropdown placeholder='Select Country' fluid search selection options={countryOptions} />
)

export default DropdownExampleSearchSelection

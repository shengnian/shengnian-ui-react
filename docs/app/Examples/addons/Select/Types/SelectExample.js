import React from 'react'
import { Select } from 'shengnian-ui-react'

import { countryOptions } from '../common'
// [{ key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' }, ...{}]

const SelectExample = () => (
  <Select placeholder='Select your country' options={countryOptions} />
)

export default SelectExample

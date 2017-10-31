import React from 'react'
import { Dropdown } from 'shengnian-ui-react'

import { getOptions } from '../common'

const DropdownExampleCompact = () => (
  <Dropdown placeholder='Compact' compact selection options={getOptions(3, '')} />
)

export default DropdownExampleCompact

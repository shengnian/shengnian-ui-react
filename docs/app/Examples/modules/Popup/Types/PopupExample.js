import React from 'react'
import { Button, Popup } from 'shengnian-ui-react'

const PopupExample = () => (
  <Popup
    trigger={<Button icon='add' />}
    content='Add users to your feed'
  />
)

export default PopupExample

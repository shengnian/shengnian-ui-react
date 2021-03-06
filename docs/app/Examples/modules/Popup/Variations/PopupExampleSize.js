import React from 'react'
import { Icon, Popup } from 'shengnian-ui-react'

const PopupExampleSize = () => (
  <div>
    <Popup
      trigger={<Icon circular name='heart' />}
      content='Hello. This is a mini popup'
      size='mini'
    />
    <Popup
      trigger={<Icon circular name='heart' />}
      content='Hello. This is a tiny popup'
      size='tiny'
    />
    <Popup
      trigger={<Icon circular name='heart' />}
      content='Hello. This is a small popup'
      size='small'
    />
    <Popup
      trigger={<Icon circular name='heart' />}
      content='Hello. This is a large popup'
      size='large'
    />
    <Popup
      trigger={<Icon circular name='heart' />}
      content='Hello. This is a huge popup'
      size='huge'
    />
  </div>
)

export default PopupExampleSize

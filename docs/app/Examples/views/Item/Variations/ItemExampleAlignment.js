import React from 'react'
import { Item } from 'shengnian-ui-react'

const ItemExampleAlignment = () => (
  <Item.Group>
    <Item>
      <Item.Image size='small' src='/assets/images/wireframe/image.png' />

      <Item.Content verticalAlign='top'>
        <Item.Header>Top Aligned</Item.Header>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size='small' src='/assets/images/wireframe/image.png' />

      <Item.Content verticalAlign='middle'>
        <Item.Header>Middle Aligned</Item.Header>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size='small' src='/assets/images/wireframe/image.png' />

      <Item.Content verticalAlign='bottom'>
        <Item.Header>Bottom Aligned</Item.Header>
      </Item.Content>
    </Item>
  </Item.Group>
)

export default ItemExampleAlignment

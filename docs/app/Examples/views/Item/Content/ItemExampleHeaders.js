import React from 'react'
import { Item } from 'shengnian-ui-react'

const ItemExampleHeaders = () => (
  <Item.Group>
    <Item>
      <Item.Image size='tiny' src='/assets/images/wireframe/image.png' />
      <Item.Content verticalAlign='middle'>
        <Item.Header as='a'>12 Years a Slave</Item.Header>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size='tiny' src='/assets/images/wireframe/image.png' />
      <Item.Content verticalAlign='middle'>
        <Item.Header as='a' content='My Neighbor Totoro' />
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size='tiny' src='/assets/images/wireframe/image.png' />
      <Item.Content header='Watchmen' verticalAlign='middle' />
    </Item>
  </Item.Group>
)

export default ItemExampleHeaders

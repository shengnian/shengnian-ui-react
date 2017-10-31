import React from 'react'
import { Icon, Item } from 'shengnian-ui-react'

const ItemExampleRatings = () => (
  <Item.Group>
    <Item>
      <Item.Image size='tiny' src='/assets/images/avatar/large/jenny.jpg' />

      <Item.Content verticalAlign='middle'>
        <Item.Header>
          <Icon name='like' />
          Veronika Ossi
        </Item.Header>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size='tiny' src='/assets/images/avatar/large/justen.jpg' />

      <Item.Content verticalAlign='middle'>
        <Item.Header>
          <Icon name='favorite' />
          Justen Kitsune
        </Item.Header>
      </Item.Content>
    </Item>
  </Item.Group>
)

export default ItemExampleRatings

import React from 'react'
import { Image, List } from 'shengnian-ui-react'

const ListExampleVeryRelaxedHorizontal = () => (
  <List horizontal relaxed='very'>
    <List.Item>
      <Image avatar src='/assets/images/avatar/small/daniel.jpg' />
      <List.Content>
        <List.Header as='a'>Daniel Louise</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='/assets/images/avatar/small/stevie.jpg' />
      <List.Content>
        <List.Header as='a'>Stevie Feliciano</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='/assets/images/avatar/small/elliot.jpg' />
      <List.Content>
        <List.Header as='a'>Elliot Fu</List.Header>
      </List.Content>
    </List.Item>
  </List>
)

export default ListExampleVeryRelaxedHorizontal

import React from 'react'
import { List } from 'shengnian-ui-react'

const ListExampleIcon = () => (
  <List>
    <List.Item>
      <List.Icon name='users' />
      <List.Content>Shengnian UI</List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='marker' />
      <List.Content>New York, NY</List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='mail' />
      <List.Content>
        <a href='mailto:s@shengnian.org'>s@shengnian.org</a>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='linkify' />
      <List.Content>
        <a href='http://shengnian.github.io'>shengnian.github.io</a>
      </List.Content>
    </List.Item>
  </List>
)

export default ListExampleIcon

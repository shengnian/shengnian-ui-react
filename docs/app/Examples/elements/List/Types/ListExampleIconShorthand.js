import React from 'react'
import { List } from 'shengnian-ui-react'

const ListExampleIconShorthand = () => (
  <List>
    <List.Item icon='users' content='Shengnian UI' />
    <List.Item icon='marker' content='New York, NY' />
    <List.Item icon='mail' content={<a href='mailto:s@shengnian.org'>s@shengnian.org</a>} />
    <List.Item icon='linkify' content={<a href='http://shengnian.github.io'>shengnian.github.io</a>} />
  </List>
)

export default ListExampleIconShorthand

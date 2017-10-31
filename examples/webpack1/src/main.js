import React from 'react'
import { render } from 'react-dom'
import { Button, Container, Header } from 'shengnian-ui-react'

const MOUNT_NODE = document.getElementById('root')

const App = () => (
  <Container>
    <Header as='h1'>Hello world!</Header>

    <Button
      content='文档'
      href='https://shengnian.github.io'
      icon='github'
      labelPosition='left'
    />
  </Container>
)

render(<App />, MOUNT_NODE)

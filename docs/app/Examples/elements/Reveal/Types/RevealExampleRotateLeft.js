import React from 'react'
import { Image, Reveal } from 'shengnian-ui-react'

const RevealExampleRotateLeft = () => (
  <Reveal animated='rotate left'>
    <Reveal.Content visible>
      <Image circular size='small' src='/assets/images/wireframe/square-image.png' />
    </Reveal.Content>
    <Reveal.Content hidden>
      <Image circular size='small' src='/assets/images/avatar/large/veronika.jpg' />
    </Reveal.Content>
  </Reveal>
)

export default RevealExampleRotateLeft

import React from 'react'
import { Image, Reveal } from 'shengnian-ui-react'

const RevealExampleMove = () => (
  <Reveal animated='move'>
    <Reveal.Content visible>
      <Image src='/assets/images/wireframe/square-image.png' size='small' />
    </Reveal.Content>
    <Reveal.Content hidden>
      <Image src='/assets/images/avatar/large/chris.jpg' size='small' />
    </Reveal.Content>
  </Reveal>
)

export default RevealExampleMove

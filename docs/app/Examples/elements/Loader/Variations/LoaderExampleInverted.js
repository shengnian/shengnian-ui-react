import React from 'react'
import { Image, Loader, Segment } from 'shengnian-ui-react'

const LoaderExampleInverted = () => (
  <Segment inverted>
    <Loader active inverted />

    <Image src='/assets/images/wireframe/short-paragraph.png' />
  </Segment>
)

export default LoaderExampleInverted

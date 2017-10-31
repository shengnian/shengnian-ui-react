import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'shengnian-ui-react'

const LoaderExampleLoader = () => (
  <Segment>
    <Dimmer active>
      <Loader />
    </Dimmer>

    <Image src='/assets/images/wireframe/short-paragraph.png' />
  </Segment>
)

export default LoaderExampleLoader

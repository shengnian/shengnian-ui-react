import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'shengnian-ui-react'

const LoaderExampleIndeterminate = () => (
  <div>
    <Segment>
      <Dimmer active>
        <Loader indeterminate>Preparing Files</Loader>
      </Dimmer>

      <Image src='/assets/images/wireframe/short-paragraph.png' />
    </Segment>
  </div>
)

export default LoaderExampleIndeterminate

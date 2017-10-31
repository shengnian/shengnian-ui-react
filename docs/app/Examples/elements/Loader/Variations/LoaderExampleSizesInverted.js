import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'shengnian-ui-react'

const LoaderExampleSizesInverted = () => (
  <div>
    <Segment>
      <Dimmer active inverted>
        <Loader size='mini'>Loading</Loader>
      </Dimmer>

      <Image src='/assets/images/wireframe/short-paragraph.png' />
    </Segment>

    <Segment>
      <Dimmer active inverted>
        <Loader size='small'>Loading</Loader>
      </Dimmer>

      <Image src='/assets/images/wireframe/short-paragraph.png' />
    </Segment>

    <Segment>
      <Dimmer active inverted>
        <Loader size='medium'>Loading</Loader>
      </Dimmer>

      <Image src='/assets/images/wireframe/paragraph.png' />
    </Segment>

    <Segment>
      <Dimmer active inverted>
        <Loader size='large'>Loading</Loader>
      </Dimmer>

      <Image src='/assets/images/wireframe/paragraph.png' />
    </Segment>
  </div>
)

export default LoaderExampleSizesInverted

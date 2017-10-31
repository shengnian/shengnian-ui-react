import React from 'react'
import { Loader, Image, Segment } from 'shengnian-ui-react'

const LoaderExampleDisabled = () => (
  <Segment>
    <Loader disabled />

    <Image src='/assets/images/wireframe/short-paragraph.png' />
  </Segment>
)

export default LoaderExampleDisabled

import React from 'react'
import { Divider, Image } from 'shengnian-ui-react'

const src = '/assets/images/wireframe/image.png'

const ImageExampleVerticallyAligned = () => (
  <div>
    <Image src={src} size='tiny' verticalAlign='top' /> <span>Top Aligned</span>

    <Divider />

    <Image src={src} size='tiny' verticalAlign='middle' /> <span>Middle Aligned</span>

    <Divider />

    <Image src={src} size='tiny' verticalAlign='bottom' /> <span>Bottom Aligned</span>
  </div>
)

export default ImageExampleVerticallyAligned

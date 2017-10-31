import React from 'react'
import { Image } from 'shengnian-ui-react'

const ImageExampleLink = () => (
  <Image
    src='/assets/images/wireframe/image-text.png'
    as='a'
    size='medium'
    href='http://google.com'
    target='_blank'
  />
)

export default ImageExampleLink

import React from 'react'
import { Label } from 'shengnian-ui-react'

const LabelExampleImage = () => (
  <div>
    <Label as='a' image>
      <img src='/assets/images/avatar/small/joe.jpg' />
      Joe
    </Label>
    <Label as='a' image>
      <img src='/assets/images/avatar/small/elliot.jpg' />
      Elliot
    </Label>
    <Label as='a' image>
      <img src='/assets/images/avatar/small/stevie.jpg' />
      Stevie
    </Label>
  </div>
)

export default LabelExampleImage

import React from 'react'
import { Button, Icon } from 'shengnian-ui-react'

const ButtonExampleGroupIcon = () => (
  <Button.Group icon>
    <Button>
      <Icon name='play' />
    </Button>
    <Button>
      <Icon name='pause' />
    </Button>
    <Button>
      <Icon name='shuffle' />
    </Button>
  </Button.Group>
)

export default ButtonExampleGroupIcon

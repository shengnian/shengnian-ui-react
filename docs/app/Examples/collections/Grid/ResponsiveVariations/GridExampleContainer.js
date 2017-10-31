import React from 'react'
import { Grid, Image } from 'shengnian-ui-react'

const GridExampleContainer = () => (
  <Grid container columns={3}>
    <Grid.Column>
      <Image src='/assets/images/wireframe/image.png' />
    </Grid.Column>
    <Grid.Column>
      <Image src='/assets/images/wireframe/image.png' />
    </Grid.Column>
    <Grid.Column>
      <Image src='/assets/images/wireframe/image.png' />
    </Grid.Column>
  </Grid>
)

export default GridExampleContainer

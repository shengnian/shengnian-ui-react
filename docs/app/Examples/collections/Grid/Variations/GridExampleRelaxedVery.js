import React from 'react'
import { Grid, Image } from 'shengnian-ui-react'

const GridExampleRelaxedVery = () => (
  <Grid relaxed='very' columns={4}>
    <Grid.Column>
      <Image src='/assets/images/wireframe/image.png' />
    </Grid.Column>
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

export default GridExampleRelaxedVery

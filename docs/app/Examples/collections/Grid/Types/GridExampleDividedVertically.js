import React from 'react'
import { Grid, Image } from 'shengnian-ui-react'

const GridExampleVerticallyDivided = () => (
  <Grid divided='vertically'>
    <Grid.Row columns={2}>
      <Grid.Column>
        <Image src='/assets/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/assets/images/wireframe/paragraph.png' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={3}>
      <Grid.Column>
        <Image src='/assets/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/assets/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/assets/images/wireframe/paragraph.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridExampleVerticallyDivided

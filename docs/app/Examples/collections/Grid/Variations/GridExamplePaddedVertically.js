import React from 'react'
import { Grid, Image } from 'shengnian-ui-react'

const GridExamplePaddedVertically = () => (
  <div>
    <p>The following grid has vertical gutters.</p>

    <Grid columns={2} padded='vertically'>
      <Grid.Column>
        <Image src='/assets/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/assets/images/wireframe/paragraph.png' />
      </Grid.Column>
    </Grid>
  </div>
)

export default GridExamplePaddedVertically

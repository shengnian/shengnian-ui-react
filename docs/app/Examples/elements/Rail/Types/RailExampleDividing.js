import React from 'react'
import { Grid, Image, Rail, Segment } from 'shengnian-ui-react'

const RailExampleDividing = () => (
  <Grid centered columns={3}>
    <Grid.Column>
      <Segment>
        <Image src='/assets/images/wireframe/paragraph.png' />

        <Rail dividing position='left'>
          <Segment>Left Rail Content</Segment>
        </Rail>

        <Rail dividing position='right'>
          <Segment>Right Rail Content</Segment>
        </Rail>
      </Segment>
    </Grid.Column>
  </Grid>
)

export default RailExampleDividing

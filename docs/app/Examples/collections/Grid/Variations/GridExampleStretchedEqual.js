import React from 'react'
import { Grid, Image, Segment } from 'shengnian-ui-react'

const GridExampleStretchedEqual = () => (
  <Grid columns='equal'>
    <Grid.Row stretched>
      <Grid.Column>
        <Segment>1</Segment>
        <Segment>2</Segment>
      </Grid.Column>
      <Grid.Column width={6}>
        <Segment>
          <Image src='/assets/images/wireframe/paragraph.png' />
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>1</Segment>
        <Segment>2</Segment>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <Segment>1</Segment>
        <Segment>2</Segment>
      </Grid.Column>
      <Grid.Column width={6}>
        <Segment>
          <Image src='/assets/images/wireframe/paragraph.png' />
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>1</Segment>
        <Segment>2</Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridExampleStretchedEqual

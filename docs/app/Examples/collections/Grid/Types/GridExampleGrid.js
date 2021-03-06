import _ from 'lodash'
import React from 'react'
import { Grid, Image } from 'shengnian-ui-react'

const columns = _.times(16, i => (
  <Grid.Column key={i}>
    <Image src='/assets/images/wireframe/image.png' />
  </Grid.Column>
))

const GridExampleGrid = () => (
  <Grid>{columns}</Grid>
)

export default GridExampleGrid

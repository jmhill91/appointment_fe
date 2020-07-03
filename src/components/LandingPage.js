import React from 'react'
import { Button, Divider, Grid, Segment } from 'semantic-ui-react'

const LandingPage = () => (
  <div className='LandingPage'>
  <Segment placeholder className='LandingPage'>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column verticalAlign='middle'>
  
          <Button content='User' primary icon='user' size='big' />
        
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
        <Button content='Employee ' icon='user circle' size='big' />
      </Grid.Column>
    </Grid>

    <Divider vertical>Or</Divider>
  </Segment>
  </div>
)

export default LandingPage
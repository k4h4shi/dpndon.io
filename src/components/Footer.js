import React from 'react'
import {
  Container,
  Segment,
} from 'semantic-ui-react'

function Footer() {
  return (
    <Segment inverted vertical style={{ padding: '3em 0em' }}>
      <Container textAlign='center'>
        © 2017 <a href='http://k4h4shi.com' style={{color: 'white'}}>kotaro takahashi</a>
      </Container>
    </Segment>
  )
}

export default Footer
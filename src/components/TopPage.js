import React from 'react'
import { Container, Header, Segment } from 'semantic-ui-react'

import NpmModuleSearchForm from './NpmModuleSearchForm'

/**
 * Top page.
 */
function TopPage({history}) {
  return (
    <Segment
      textAlign='center'
      style={{ minHeight: 700, padding: '1em 0em' }}
      vertical
    >
      <Container text>
        <Header
          as='h1'
          content='Dpndon'
          style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '2em' }}
        />
        <Header
          as='h2'
          content='List of Homepages of npm modules that the project depend on.'
          style={{ fontSize: '1.7em', fontWeight: 'normal' }}
        />
        <NpmModuleSearchForm history={history}/>
      </Container>
    </Segment>
  )
}

export default TopPage
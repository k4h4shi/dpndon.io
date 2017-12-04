import React from 'react'
import { Route, withRouter } from 'react-router-dom'

import { Segment } from 'semantic-ui-react'
import TopPage from './TopPage'
import NpmModulePage from './NpmModulePage'

const Routes = withRouter((props) => {
  return (
    <Segment
      style={{ minHeight: 700 }}
      vertical
    >
      <Route exact path='/' component={TopPage}/>
      <Route path='/:pkgName' component={NpmModulePage} />
    </Segment>
  )
})

export default Routes
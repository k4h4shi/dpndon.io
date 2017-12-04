import React from 'react'
import { Route, Link, withRouter } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

import TopPage from './TopPage'
import NpmModulePage from './NpmModulePage'

const Routes = withRouter((props) => {
  return (
    <div>
      <Menu inverted>
        <Menu.Item header as={Link} to='/'>{'dpndon'}</Menu.Item>
      </Menu>
      <Route exact path='/' component={TopPage}/>
      <Route path='/:pkgName' component={NpmModulePage} />
    </div>
  )
})

export default Routes
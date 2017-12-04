import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Menu inverted style={{ margin: '0em 0em' }}>
      <Menu.Item header as={Link} to='/'>{'dpndon'}</Menu.Item>
    </Menu>
  )
}

export default Header
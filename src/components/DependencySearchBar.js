import React from 'react'
import { Menu, Input } from 'semantic-ui-react'

/**
 * acept user input as a query and call onQuerychange with value.
 * @param {*} props 
 */
function DependencySearchBar(props) {
  const { query, onQueryChange } = props
  return (
    <Menu.Item>
      <Input
        icon='search'
        placeholder='Search Dependencies...'
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}/>
    </Menu.Item>
  )
}

export default DependencySearchBar
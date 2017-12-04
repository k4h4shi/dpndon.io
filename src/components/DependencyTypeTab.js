import React from 'react'
import { Menu } from 'semantic-ui-react'

/**
 * allow user to select type and call onType change with name of selected one.
 * @param {*} props 
 */
function DependencyTypeTab(props) {
  const { type, active, onTypeChange } = props
  return (
    <Menu.Item
      name={type}
      active={active}
      onClick={(e) => {
        onTypeChange(e.target.innerHTML)
      }}
    />
  )
}

export default DependencyTypeTab
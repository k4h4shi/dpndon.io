import React from 'react'
import { Menu } from 'semantic-ui-react'
import DependencyTypeTab from './DependencyTypeTab'
import DependencySearchBar from './DependencySearchBar'

/**
 * has DependencySearchBar and DependencyTypeTab.
 * kind like a Middle man and I started think this component is unneeded.
 * TODO: maybe this component will fired lator.
 */
function DependencyFilterMenu(props) {
  const {
    atacched,
    query,
    activeType,
    dependencyTypes,
    onQueryChange,
    onTypeChange
  } = props

  return (
    <Menu atacched={atacched} tabular>
      {dependencyTypes.map(type =>
        <DependencyTypeTab
          key={type}
          type={type}
          active={activeType === type}
          onTypeChange={onTypeChange}
        />
      )}
      <Menu.Menu>
        <DependencySearchBar
          query={query}
          onQueryChange={onQueryChange}
        />
      </Menu.Menu>
    </Menu>
  )
 }

export default DependencyFilterMenu
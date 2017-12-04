import React from 'react'
import { Segment, Item } from 'semantic-ui-react'
import Dependency from './Dependency'

/**
 * Show dependency as a list.
 * If givin depndencies empty, show 'No Dependency Found.'
 * @param {*} props 
 */
function DependencyList(props) {
  const { atacched, dependencies } = props;
  return (
    <Segment atacched={atacched}>
      <Item.Group divided>
        {
          dependencies.length > 0 ?
            dependencies.map(dependency => 
              <Dependency key={dependency.name} 
                  dependency={dependency}/>
            )
            : 'No Dependency Found.'
        }
      </Item.Group>
    </Segment>
  )
}

export default DependencyList

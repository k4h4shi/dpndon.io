import React from 'react';
import { Link } from 'react-router-dom'
import { Button, Icon, Item, Label } from 'semantic-ui-react'

/**
 * show information of dependency
 * @param {*} props 
 */
function Dependency(props) {
  const dependency = props.dependency
  return (
    <Item>
      <Item.Content>
        <Item.Header as={Link} to={`/${dependency.name}`}>{dependency.name}</Item.Header>
        <Item.Meta>{dependency.version}</Item.Meta>
        <Item.Description>{dependency.description}</Item.Description>
        <Item.Extra>
          <Label as='a'>{dependency.type}</Label>
          {
            !dependency.homepage
            || <Button 
                as='a'
                href={dependency.homepage}
                floated='right'>
                  Homepage
                  <Icon name='right chevron' />
              </Button>
          }
        </Item.Extra>
      </Item.Content>
    </Item>
  )
}

export default Dependency
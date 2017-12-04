import React from 'react'
import { Header, Label } from 'semantic-ui-react'

/**
 * show project information.
 * @param {*} props 
 */
function ProjectInfo(props) {
  const project = props.project;
  return (
    <div>
      <Header as='h1'>
        {project.name}
        {
          project.version 
          ? <Label as='a'>{project.version}</Label>
          : ''
        }
      </Header>
    </div>
  )
}

export default ProjectInfo
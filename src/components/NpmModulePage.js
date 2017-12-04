import React, { Component } from 'react'
import { Container, Dimmer, Loader } from 'semantic-ui-react'

import ProjectInfo from './ProjectInfo'
import FilterableDependencyList from './FilterableDependencyList'

import searchProject from '../libs/searchProject'

const defaultDependencyType = "All"

const dependencyTypes = [
  "All",
  "Production",
  "Dev",
  "Optional",
  "Bundle"
]

/**
 * Show filterable project's dependency infomation.
 * This app require project and dependencies as property.
 */
class NpmModulePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      projectExist: false,
      project: {},
      dependencies: []
    }
    this.initPage = this.initPage.bind(this)
  }

  async initPage(pkgName) {
    console.log(pkgName)
    this.setState({ loading: true })
    try {
      const projectInfo = await searchProject(pkgName)
      this.setState({
        projectExist: true,
        project: projectInfo.project,
        dependencies: projectInfo.dependencies
      })
    } catch(e) {
      this.setState({
        projectExist: false,
      })
    } 
    this.setState({ loading: false })
  }

  componentWillMount(nextProps) {
    const pkgName = this.props.match.params.pkgName
    this.initPage(pkgName)
  }

  componentWillReceiveProps(nextProps) {
    const pkgName = nextProps.match.params.pkgName
    this.initPage(pkgName)
  }

  render() {
    const {
      loading,
      projectExist,
      project,
      dependencies
    } = this.state

    return (
      <Container>
        <Dimmer active={loading}>
          <Loader>Loading</Loader>
        </Dimmer>
        {
          projectExist
          ? <div>
              <ProjectInfo project={project} />
              <FilterableDependencyList
                  dependencies={dependencies}
                  dependencyTypes={dependencyTypes}
                  defaultDependencyType={defaultDependencyType}
              />
            </div>
          : 'Npm module not found'
        }
      </Container>
    )
  }
}

export default NpmModulePage
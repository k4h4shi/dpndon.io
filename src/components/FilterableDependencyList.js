import React, { Component } from 'react';
import DependencyFilterMenu from './DependencyFilterMenu'
import DependencyList from './DependencyList'

/**
 * This component filter dependency list with user input, such as query and type.
 */
class FilterableDependencyList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      activeType: this.props.defaultDependencyType
    }
    this.handleQueryChange = this.handleQueryChange.bind(this)
    this.handleTypeChange = this.handleTypeChange.bind(this)
  }

  handleTypeChange(activeType) {
    this.setState({
      activeType: activeType
    })
  }

  handleQueryChange(query) {
    this.setState({
      query: query
    })
  }

  render() {
    const { 
      dependencies, 
      dependencyTypes, 
      defaultDependencyType 
    } = this.props

    const {
      query,
      activeType
    } = this.state

    const filters = [
      (dependency) => {
        return Object.keys(dependency).some((key) => {
          const lowerValue = dependency[key].toLowerCase();
          return lowerValue.match(query);
        })
      },
      (dependency) => {
        return activeType === defaultDependencyType
            || activeType === dependency.type
      }
    ]

    return (
      <div>
        <DependencyFilterMenu
          atacched='top'
          query={query}
          activeType={activeType}
          dependencyTypes={dependencyTypes}
          onTypeChange={this.handleTypeChange}
          onQueryChange={this.handleQueryChange}
        />
        <DependencyList
            atacched='button'
            dependencies={
              dependencies.filter(dependency => {
                return filters.every(filter => filter(dependency))
              })
            }
        />
      </div>
    )
  }
}

export default FilterableDependencyList
import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'

/**
 * Form for search npm module
 * @param {Object} props 
 */
class NpmModuleSearchForm extends Component {
  constructor() {
    super()
    this.state = {
      pkgName: 'dpndon'
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

  handleInputChange(e) {
    this.setState({
      pkgName: e.target.value
    })
  }

  handleOnSubmit(e) {
    e.preventDefault();
    const pkgName = this.state.pkgName
    this.props.history.push(`${pkgName}`)
  }

  render() {
    const {
      pkgName,
    } = this.state

    return (
      <form onSubmit={this.handleOnSubmit}>
        <Input 
          value={pkgName}
          onChange={this.handleInputChange}
          action={{ type: 'submit', content: 'Go' }}
          placeholder='Search npm packages...' />
      </form>
    )
  }
}

export default NpmModuleSearchForm
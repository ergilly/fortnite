import React, { Component } from 'react'

class PlayerForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ user: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleUserInput(this.state.user);
    this.setState({user: ''})
  }

  render() {
    return(
      <div className='ui form'>
        <form className='fields' onSubmit={this.handleSubmit}>
          <input className='field' type='text' onChange={this.handleChange}></input>
          <input type='submit'></input>
        </form>
      </div>
    )
  }

}

export default PlayerForm

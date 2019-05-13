import React, { Component } from 'react'
import PlayersTable from '../components/Players-Table'
import PlayerForm from '../components/Player-Form'
import PlayerInfo from '../components/Player-info'
import './main.css'

class AppBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      user_id: '',
      user_data: [],
      items: [],
      icon: '',
      selected_user: {}
    }
    this.handleUserInput = this.handleUserInput.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.handleTableClick = this.handleTableClick.bind(this)
  }

  componentDidMount() {
    fetch(`https://fortnite-public-api.theapinetwork.com/prod09/items/list`)
    .then(res => res.json())
    .then(data => {
      data.forEach((item) => {
        let icon = item.images.background
        if (item.type === 'outfit') {
          const updatedItems = [...this.state.items, icon]
          this.setState({ items: updatedItems })
        }
      })
  })
}

  handleUserInput(evt) {
    this.componentDidMount()
    this.setState({user: evt})
    fetch(`https://fortnite-public-api.theapinetwork.com/prod09/users/id?username=${evt}`)
    .then(res => res.json())
    .then(data => {
      if (data.uid !== undefined) {
        this.setState({
          user_id: data.uid
        })
        fetch(`https://fortnite-public-api.theapinetwork.com/prod09/users/public/br_stats_v2?user_id=${this.state.user_id}`)
        .then(res => res.json())
        .then(data => {
          const random = Math.round(Math.random()*this.state.items.length);
          data.seasonWindow = this.state.items[random]
          const updateEvents = [...this.state.user_data, data]
          this.setState({ user_data: updateEvents})
        })
      }
    })
  }

  handleTableClick(evt) {
    this.state.user_data.forEach((player) => {
      if (player.epicName === evt) {
        this.setState({selected_user: player})
      }
    })
  }



  render() {
    return(
      <div className='container'>
        <PlayerForm handleUserInput={this.handleUserInput}/>
        <PlayersTable players={this.state.user_data} handleTableClick={this.handleTableClick}/>
        <PlayerInfo player={this.state.selected_user}/>
      </div>
    )
  }

}
export default AppBox;

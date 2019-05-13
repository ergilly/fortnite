import React, {Component} from 'react'
import GamemodeInfo from './Gamemode-info'
import './player-info.css'



class PlayerInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }



  render() {
    return(
      <div id='card-container'>
        <div id='cards' className='ui card'>
          <GamemodeInfo player={this.props.player} gamemode='defaultsolo'/>
        </div>
        <div id='cards' className='ui card'>
          <GamemodeInfo player={this.props.player} gamemode='defaultduo'/>
        </div>
        <div id='cards' className='ui card'>
          <GamemodeInfo player={this.props.player} gamemode='defaultsquad'/>
        </div>
      </div>
    )
  }

}

export default PlayerInfo

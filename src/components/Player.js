import React, {Component} from 'react';



class Player extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
    this.handlePlayerClick = this.handlePlayerClick.bind(this)
  }

  handlePlayerClick(event) {
    this.props.handleTableClick(event.currentTarget.id);
  }

  render() {
    return (
      <tr onClick={this.handlePlayerClick} id={this.props.name}>
        <td>
          <h4 className="ui image header">
            <img src={this.props.icon} alt='user icon' className="ui mini rounded image"/>
            <div className="content">
              {this.props.name}
            </div>
          </h4>
        </td>
        <td>{this.props.wins}</td>
        <td>{this.props.winperc}</td>
        <td>{this.props.kills}</td>
        <td>{this.props.kd}</td>
      </tr>
    )
  }
}
export default Player

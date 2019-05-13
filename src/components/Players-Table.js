import React from 'react';
import Player from './Player'
import './table.css'

const PlayersTable = (props) => {
  const players = props.players.map((player, index) => {
    let totalWins = 0;
    let matches = 0
    if (player.data.keyboardmouse !== undefined) {
      if (player.data.keyboardmouse.defaultsquad.default.placetop1 !== undefined) {
        totalWins += player.data.keyboardmouse.defaultsquad.default.placetop1
      }
      if (player.data.keyboardmouse.defaultduo.default.placetop1 !== undefined) {
        totalWins += player.data.keyboardmouse.defaultduo.default.placetop1
      }
      if (player.data.keyboardmouse.defaultsolo.default.placetop1 !== undefined) {
        totalWins += player.data.keyboardmouse.defaultsolo.default.placetop1
      }
      if (player.data.keyboardmouse.defaultsquad.default.placetop1 !== undefined) {
        matches += player.data.keyboardmouse.defaultsquad.default.matchesplayed
      }
      if (player.data.keyboardmouse.defaultduo.default.placetop1 !== undefined) {
        matches += player.data.keyboardmouse.defaultduo.default.matchesplayed
      }
      if (player.data.keyboardmouse.defaultsolo.default.placetop1 !== undefined) {
        matches += player.data.keyboardmouse.defaultsolo.default.matchesplayed
      }
      var winPercentage = Math.round(totalWins/matches*10000)/100
      var totalKills = (
        player.data.keyboardmouse.defaultsquad.default.kills +
        player.data.keyboardmouse.defaultduo.default.kills +
        player.data.keyboardmouse.defaultsolo.default.kills
      )
      var killDeath = Math.round(totalKills/matches*100)/100
    }


    return(

      <Player handleTableClick={props.handleTableClick} name={player.epicName} icon={player.seasonWindow} wins={totalWins} winperc={winPercentage} kills={totalKills} kd={killDeath} key={index}/>
    )
  })

  return (
    <div className='table-container'>
      <table className="ui celled table">
        <tbody>
          <tr>
            <th>Player</th>
            <th>Wins</th>
            <th>Win %</th>
            <th>Kills</th>
            <th>K/D</th>
          </tr>
          {players}
        </tbody>
      </table>
    </div>
  )
}

export default PlayersTable;

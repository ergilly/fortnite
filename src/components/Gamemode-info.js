import React from 'react';
import './table.css'
import './player-info.css'
const GamemodeInfo = (props) => {

  const gametype = props.gamemode.slice(7).toUpperCase();
  const gamemode = 'default' + gametype.toLowerCase()
  let top2name;
  let top3name
  let color;
  if (gametype === 'SOLO') {
    top2name = 'placetop10'
    top3name = 'placetop25'
    color = 'blue'
  } else if (gametype === 'DUO') {
    top2name = 'placetop5'
    top3name = 'placetop12'
    color = 'green'
  } else {
    top2name = 'placetop3'
    top3name = 'placetop6'
    color = 'purple'
  }

  let matchesplayed = 0;
  let wins = 0;
  let kills = 0;
  let winperc = 0;
  let kd = 0;
  let top2 = 0;
  let top3 = 0
  let top2display = `Top ${top2name.slice(8)}: `
  let top3display = `Top ${top3name.slice(8)}: `
  if (props.player.data !== undefined) {
    matchesplayed += props.player.data.keyboardmouse[gamemode].default.matchesplayed
    if (props.player.data.keyboardmouse[gamemode].default.placetop1 !== undefined) {
      wins += props.player.data.keyboardmouse[gamemode].default.placetop1
    }
    if (props.player.data.keyboardmouse[gamemode].default.kills !== undefined) {
      kills += props.player.data.keyboardmouse[gamemode].default.kills
    }
    if (props.player.data.keyboardmouse[gamemode].default.placetop1 !== undefined) {
      winperc = Math.round(wins/matchesplayed*10000)/100
    }
    if (props.player.data.keyboardmouse[gamemode].default.kills !== undefined) {
      kd = Math.round(kills/matchesplayed*100)/100
    }
    if (props.player.data.keyboardmouse[gamemode].default[top2name] !== undefined) {
      top2 += props.player.data.keyboardmouse[gamemode].default[top2name]
    }
    if (props.player.data.keyboardmouse[gamemode].default[top3name] !== undefined) {
      top3 += props.player.data.keyboardmouse[gamemode].default[top3name]
    }

  }



  return(
    <>
      <div id='header-layout' className="content">
        <div className="header">{gametype}</div>
        <div className='meta'>{matchesplayed} Matches</div>
      </div>
      <div id='card-grid' className='content'>
        <div id='align-left'>
          <div className='meta'>Wins: </div>
          <div className='bold-text'>{wins}</div>
        </div>
        <div id='align-left'>
          <div className='meta'>Kills: </div>
          <div className='bold-text'>{kills}</div>
        </div>
        <div id='align-left'>
          <div className='meta'>Win %: </div>
          <div className='bold-text'>{winperc}</div>
        </div>
        <div id='align-left'>
          <div className='meta'>K/D : </div>
          <div className='bold-text'>{kd}</div>
        </div>
        <div id='align-left'>
          <div className='meta'>K/D : </div>
          <div className='bold-text'>{kd}</div>
        </div>
        <div id='align-left'>
          <div className='meta'>{top2display}</div>
          <div className='bold-text'>{top2}</div>
        </div>
        <div id='align-left'>
          <div className='meta'>{top3display}</div>
          <div className='bold-text'>{top3}</div>
        </div>
      </div>
    </>
  )

}

export default GamemodeInfo

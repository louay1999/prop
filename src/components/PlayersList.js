import React from 'react'
import Player from './Player'
import playerData from "../players.json"
export default function () {
 console.log(playerData.players[0].team)
    return (
    <div style={{display:'flex'}}>{playerData.players.map((player)=><Player player={player}/>)}</div>
  )
}

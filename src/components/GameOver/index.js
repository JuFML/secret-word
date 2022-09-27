import style from './style.module.css'

import React from 'react'

const GameOver = ({retry}) => {
  return (
    <div>
      <h1>Game Over</h1>
      <button onClick={retry}>Verificar Letra</button>
    </div>
  )
}

export default GameOver
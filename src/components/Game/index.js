import style from './style.module.css'

const Game = ({verifyLetter}) => {
  return (
    <div>
      <h1>Game</h1>
      <button onClick={verifyLetter}>Verificar Letra</button>
    </div>
  )
}

export default Game
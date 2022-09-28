import style from './style.module.css'

const Game = ({verifyLetter}) => {
  return (
    <div className={style.game}>
      <p className={style.points}>
        <span>Pontuaçõa: 000</span>
      </p>
      <h1>Adivinhe a palavra:</h1>
      <h3 className={style.tip}>
        Dica sobre a palavra: <span>Dica...</span>
      </h3>
      <div className={style.wordContainer}>
        <span className={style.letter}>A</span>
        <span className={style.blankSquare}></span>
      </div>
      <div className={style.letterContainer}>
        <p>Tente adivinhar uam letra da palavra:</p>
        <form>
          <input type="text" name="letter" maxLength={1} required />
          <button onClick={verifyLetter}>Jogar</button>
        </form>
      </div>
      <div className={style.wrongLettersContaier}>
        <p>Letras já utilizadas:</p>
        <span>a,</span>
        <span>b,</span>
      </div>
    </div>
  )
}

export default Game
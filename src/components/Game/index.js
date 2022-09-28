import style from './style.module.css'

const Game = ({
  verifyLetter, 
  pickedWord, 
  pickedCategory, 
  letters, 
  guessedLetters, 
  wrongLetters, 
  guesses, 
  score 
}) => {
  return (
    <div className={style.game}>
      <p className={style.points}>
        <span>Pontuaçõa: {score}</span>
      </p>
      <h1>Adivinhe a palavra:</h1>
      <h3 className={style.tip}>
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativa(s).</p>
      <div className={style.wordContainer}>
        {letters.map((letter, i) => (
          guessedLetters.includes(letter) ? (<span key={i} className={style.letter}>{letter}</span>) : (<span key={i} className={style.blankSquare}></span>)
        ) )}       
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
        {wrongLetters.map( (letter, i) => <span key={i}>{letter}, </span>)}
      </div>
    </div>
  )
}

export default Game
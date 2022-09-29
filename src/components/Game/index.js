import { useState, useRef } from 'react'
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
  const [letter, setLetter] = useState("")
  const letterInputRef = useRef(null)

  console.log(pickedWord)

  const handleSubmit = (e) => {
    e.preventDefault()
    verifyLetter(letter)
    setLetter("")
    letterInputRef.current.focus()
  }

  return (
    <div className={style.game}>
      <p className={style.points}>
        <span>Pontuação: {score}</span>
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
        <p>Tente adivinhar uma letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="letter" maxLength={1} required value={letter} onChange={(e) => setLetter(e.target.value)} ref={letterInputRef}/>
          <button onClick={verifyLetter}>Jogar</button>
        </form>
      </div>
      <div className={style.wrongLettersContaier}>
        <p>Letras já utilizadas: {}</p>
        {wrongLetters.map( (letter, i) => <span key={i}>{letter}, </span>)}
      </div>
    </div>
  )
}

export default Game
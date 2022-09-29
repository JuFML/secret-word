import './App.css';

import {  useState, useEffect } from 'react';

import { wordsList } from './data/words'

import Game from './components/Game';
import GameOver from './components/GameOver';
import StartScreen from './components/StartScreen'

function App() {

  const stages = [
    {id: 1, name: "start"},
    {id: 2, name: "game"},
    {id: 3, name: "end"}
  ]
  
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(3)
  const [score, setScore] = useState(0)

  const pickWordAndPickCategory = () => {
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * categories.length)]
    
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    return [category, word]
  }

  const startGame = () => {
    const [category, word] = pickWordAndPickCategory()

    let wordLetters = word.split("")
    wordLetters = wordLetters.map(letter => letter.toLowerCase())

    setPickedCategory(category)
    setPickedWord(word)
    setLetters(wordLetters)
    console.log(letters)
    setGameStage(stages[1].name)
  }
  
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase()
    console.log(normalizedLetter)
    const isAlreadyGuessedLetter = guessedLetters.includes(normalizedLetter)
    const isAlreadyWrongLetter = wrongLetters.includes(normalizedLetter)
    const isANewGuessedLetter = letters.includes(normalizedLetter)

    if(isAlreadyGuessedLetter || isAlreadyWrongLetter) {
      return
    }

    if(isANewGuessedLetter) {
      setGuessedLetters((prevGuessedLetters) => [
        ...prevGuessedLetters, 
        normalizedLetter
      ])
    } else {      
      setWrongLetters((prevWrongLetters) => [
        ...prevWrongLetters, 
        normalizedLetter
      ])
      setGuesses(prevGuesses => --prevGuesses)      
    }
  }

  const clearLetterStates = () => {
    setGuessedLetters([])
    setWrongLetters([])
  }

  useEffect(() => {
    clearLetterStates()
    if(guesses <= 0 ) setGameStage(stages[2].name)

  }, [guesses])
  
  
  console.log("guesse:", guesses)

  
  console.log("guessedLetter:", guessedLetters)
  console.log("wrongLetter:",wrongLetters)

  const retry = () => {
    setScore(0)
    setGuesses(3)
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame}/>}
      {gameStage === "game" && <Game 
      verifyLetter={verifyLetter} 
      pickedWord={pickedWord}
      pickedCategory={pickedCategory}
      letters={letters}
      guessedLetters={guessedLetters}
      wrongLetters={wrongLetters}
      guesses={guesses}
      score={score}
      />}
      {gameStage === "end" && <GameOver retry={retry}/>}
    </div>
  );
}

export default App;

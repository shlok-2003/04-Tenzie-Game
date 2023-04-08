import React from "react"
import Dice from "./components/Dice"
import Result from "./components/Result"
import Instruction from "./components/Instruction"

import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import './App.css';

export default function App() {
  const [diceArray, setDiceArray] = React.useState(allNewDice())
  const [Tenzies, setTenzies] = React.useState(false)

  const [countRoll, setCountRoll] = React.useState(0)
  React.useEffect(() => {
    const allHeld = diceArray.every(dice => dice.isHeld)
    
    const FirstElement = diceArray[0].value 
    const allSameValue = diceArray.every(dice => dice.value === FirstElement)

    if(allHeld && allSameValue) {
      setTenzies(true)
    }

  }, [diceArray])

  function getNewDice() {
    const num = Math.ceil(Math.random() * 6)

    return {
      id: nanoid(),
      value: num,
      isHeld: false
    }
  }

  function allNewDice() {
    const newArray = []
    for(let i = 0; i < 10; i++) {
      newArray.push(getNewDice())
    }

    return newArray
  }

  function rollDice() {
    if(!Tenzies) {
      setDiceArray(oldDice => oldDice.map(dice => {
        return dice.isHeld ?
              dice :
              getNewDice()
      }))
    } else {
      setTenzies(false)

        const res = localStorage.getItem("roll")
        if(res === null || res === 0 || res > countRoll) {
          console.group("Hte")
          localStorage.setItem("roll", countRoll)
        }
        

      setCountRoll(0)
      setDiceArray(allNewDice())
    }

    setCountRoll(prevState => prevState + 1)
  }

  function holdDice(id) {
    setDiceArray(oldDice => oldDice.map(dice => {
      return dice.id === id ? 
            {...dice, isHeld: !dice.isHeld} :
            dice  
    }))
  }

  const diceElement = diceArray.map(dice => (
      <Dice 
        key={dice.id} 
        value={dice.value} 
        isHeld={dice.isHeld} 
        holdDice={() => holdDice(dice.id)}
      />
  ))

  return (
      <div className="main--body">
        {
          Tenzies && <Confetti width={window.innerWidth}/>
        }
        <main>
            

            <Instruction />

            <div className="dice--container">
            {diceElement}
            </div>

            <button 
              className="dice--roll" 
              onClick={rollDice}
            >
              {Tenzies ? "New Game" : "Roll"}
            </button>

            <Result rolls={countRoll} completed={Tenzies}/>
        </main>
      </div>
  )
}
import React from 'react'
import Die from "./Die"

/**
 * Challenge:
 * 
 * Write a function (generateAllNewDice) that returns an array 
 * of 10 random numbers between 1-6 inclusive.
 * 
 * Log the array of numbers to the console for now
 */
export default function App() {
    const MAX_NUMBER = 6;
    const [dice, setDice] = React.useState(generateAllNewDice)

    function generateAllNewDice(){
        return new Array(10)
        .fill(0)
        .map(() => Math.ceil(Math.random() * MAX_NUMBER))
    }

    function rollDice(){
        setDice(generateAllNewDice)
    }

    const diceElements = dice.map(num => <Die value={num} />)

    return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className={roll-dice} onClick={rollDice}>Roll</button>
        </main>
    )
}
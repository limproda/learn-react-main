import React from "react"

export default function App() {
    /**
     * Challenge: 
     * Create state to track our count value (initial value is 0)
     * Don't forget to replace the hard-coded "0" with your new state
     */

    const [value, setCount] = React.useState(0);
    
    function handleClickMinus(){
        setCount(value - 1);
    }

    function handleClickPlus(){
        setCount(value + 1);
    }

    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button className="minus" aria-label="Decrease count" onClick={handleClickMinus}>–</button>
                <h2 className="count">{value}</h2>
                <button className="plus" aria-label="Increase count" onClick={handleClickPlus}>+</button>
            </div>
        </main>
    )
}

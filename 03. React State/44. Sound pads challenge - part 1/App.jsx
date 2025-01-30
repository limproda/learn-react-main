import padsData from "./pads"
import React from "react"

export default function App() {
    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from pads.js
     * 2. Map over that state array and display each one
     *    as a <button> (CSS is already written for you)
     *    (Don't worry about using the "on" or "color" 
     *    properties yet)
     */

    const [pads, setPads] = React.useState(padsData)

    const padsElements = pads.map((pad) => (
        <button key={pad.id}></button>
    ))

    return (
        <main>
            <div className="pad-container">
                {padsElements}
            </div>
        </main>
    )
}

import React from "react"
import padsData from "./pads"

export default function App({darkMode}) {
    const [pads, setPads] = React.useState(padsData)
    
    /**
     * Challenge: use a ternary to determine the backgroundColor
     * of the buttons
     * If darkMode is true, set them to "#222222"
     * If darkMode is false, set them to "#cccccc"
     */
    
    const buttonElements = pads.map(pad => (
        <button key={pad.id} style={{backgroundColor: darkMode ? "#222" : "#ccc"}}></button>
    ))
    
    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}

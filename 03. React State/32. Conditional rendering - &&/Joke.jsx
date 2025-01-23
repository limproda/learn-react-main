import React from "react";

export default function Joke(props) {
    /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */
    const [isShown, setIsShown] = React.useState(false);

    console.log(isShown)
    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            
            {isShow && <p>{props.punchline}</p>}
            <button onClick={() => setIsShown(prevShown => !prevShown )}>Show punchline</button>
            <hr />
        </div>
    )
}
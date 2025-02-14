import React from "react"

export default function App() {
    const [unreadMessages, setUnreadMessages] = React.useState(["a", "b"])

    const unread = false
    
    /**
     * Challenge:
     * Only display the <h1> below if there are unread messages
     */
    
    return (
        <div>
            {unreadMessages.length > 0 &&
            <h1>You have {unreadMessages.length} unread messages!</h1> ||
            <p>You have no messages</p>}
        </div>
    )
}

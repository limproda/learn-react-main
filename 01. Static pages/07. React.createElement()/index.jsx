import { createRoot } from "react-dom/client"
import { createElement } from 'react'

const root = createRoot(document.getElementById("root"))
root.render(
    <main>
        <h1>Hello from React!</h1>
        {createElement('h1', null, 'Another Title')}
    </main>
)
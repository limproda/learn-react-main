import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('root'))

/**
 * Challenge (part 1):
 * Create a custom "Page" component
 * 
 * It should return an ordered list with the reasons why you're
 * excited to be learning React :)
 * 
 * Render the Page component.
 */

function Page(){
    return (
        <ul>
            <li>Was first released in 2013</li>
            <li>Was orginally created by Jordan Walke</li>
            <li>Has well over 100K stars on Github</li>
            <li>Is maintained by Meta</li>
            <li>Powers thousands of enterprise apps, incluiding mobile apps</li>
        </ul>
    )
}

root.render(
    <Page />
)

/**
 * Challenge: Set up a React app from scratch again.
 * This time, try rendering an unordered list with 2-3 list items inside
 * with why you're excited to be learning React.
 */

import ReactDom from 'react-dom/client';

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
    <main>
        <h1>Why I am learning React</h1>
        <ul className = 'list'>
            <li>I want to create programs using React</li>
            <li>React has a cool logo</li>
            <li>It's a cool JS library</li>
        </ul>
    </main>

);

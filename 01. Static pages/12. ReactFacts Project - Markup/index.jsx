/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding more styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="react-logo.png"` in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

import { createRoot } from 'react-dom/client'

function Title(){
  return <h1>Fun facts about React</h1>
}

function NavBar(){
  return <section>
    <img src='react-logo.png' alt='React Logo' width='40px' />
    <p>ReactFacts</p>
    </section>
}

function List(){
  return <ul>
    <li>Was first released in 2013</li>
    <li>Was orginally created by Jordan Walke</li>
    <li>Has well over 100K stars on Github</li>
    <li>Is maintained by Meta</li>
    <li>Powers thousands of enterprise apps, incluiding mobile apps</li>
  </ul>
}

const root = createRoot(document.getElementById('root'))

root.render(
  <main>
      <NavBar />
      <Title />
      <List />
  </main>

)
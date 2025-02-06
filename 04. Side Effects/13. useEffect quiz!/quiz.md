1. In what way are React components meant to be "pure functions"
Everytime they get the same parameters, they always return the same state.


2. What is a "side effect" in React? What are some examples?
Any code that affects or interacts with an outside system:
   - localStorage
   - Api
   - DOM manipulation

3. What is NOT a "side effect" in React? Examples?
Anything that react is in charge of.


4. When does React run your useEffect function? When does it NOT run
   the effect function?
As soon as the component render for the first time. On every re-render of the component (assuming no dependencies array)


5. How would you explain what the "dependecies array" is?

A way for React to know whether or not it should re-run the effect function.
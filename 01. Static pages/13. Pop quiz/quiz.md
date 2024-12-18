1. Where does React put all of the elements I create in JSX when I 
   call `root.render()`?

React put all the elements on the div with de id of 'root'.


2. What would show up in my console if I were to run this line of code:
```
console.log(<h1>Hello world!</h1>)
```

An object.

3. What's wrong with this code:
```
root.render(
    <h1>Hi there</h1>
    <p>This is my website!</p>
)
```

You can only render a parent element at a time.


4. What does it mean for something to be "declarative" instead of "imperative"?

Imperative needs the specific step-by-step.
Declarative only needs to know what you want and will do it without the exact step-by-step.


5. What does it mean for something to be "composable"?

We have small pieces that we put together to create something better and bigger than the pieces themselves.

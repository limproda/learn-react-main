1. You have 2 options for what you can pass in to a
   state setter function (e.g. `setCount`). What are they?
   
   Option 1:
   setCount(count - 1)

   Option 2:

   setCount(prevCount => prevCount - 1)


2. When would you want to pass the first option (from answer
   above) to the state setter function?

   When you use it only once and we don't need the old value.

3. When would you want to pass the second option (from answer
   above) to the state setter function?

   When you use it more than 1 time in a row and we care about the previous value

1. What is a React component?

Function that return React elements.

2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```

The function name must begin with an uppercase. It's suppose to be called "MyComponent"
ç
3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <img src="./react-logo.png" width="40px" alt="React logo" />
        </header>
    )
}



root.render(Header())
```

We don't call the function as a regular function but we surround it with brackets, as following:

root.render(
    <Header />
)
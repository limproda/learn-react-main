import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root"))

function Header(){
    return (
        <img src="react-logo.png" width="40 px" alt="React Logo"></img>
    )
}

function MainContent(){
    return (
        <>
            <h1>Reason I am excited to learn React</h1>
            <ol>
                <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
                <li>I am more likely to get a job as a front end developer if I know React</li>
            </ol>
        </>
    )
}

function Footer(){
    <small>© 2024 Improda development. All rights reserved.</small>
}

function Page() {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    )
}

root.render(
    <Page />
)

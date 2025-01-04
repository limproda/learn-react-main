import chefClaudeLogo from "./images/chef-claude-icon.png"

export default function Header(){
    return(
        <header className="header">
            <img src={chefClaudeLogo} alt="Chef Claude icon" className="claude-icon"/>
            <h1>Chef Claude</h1>
        </header >
    )
}
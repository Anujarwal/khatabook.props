import React from 'react'

const Navbar = ({theme , changeTheme}) => {
    return (
    <>
    <nav className="navbar bg-black bg-gradient">
    <div className="container-fluid">
    <span className="navbar-brand mb-0 h1 text-light">Ledger-Book</span>
    <button className={theme ? "btn bg-light text-dark" : "btn bg-dark text-light" }onClick={()=>changeTheme()}>{theme ? "Light Mode" : "Dark Mode"}</button>
    </div>
    </nav>
    </>
    )
}

export default Navbar
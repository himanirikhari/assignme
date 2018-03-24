import React from 'react';




const Navbar  = ()=>{
    return (
        <nav className="navbar navbar-dark bg-primary">
        <span className="navbar-brand mb-0 h1">LAB</span>
        <form className="form-inline">
            <input className="form-control mr-sm-9" type="search" placeholder="Search" aria-label="Search" />
        </form>
    </nav>
    )
}

export default Navbar;
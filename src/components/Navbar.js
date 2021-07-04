import React from 'react'
import logo from "../assets/find-your-bank-logo.jpeg"

const Navbar = props => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="title">{ props.title }</div>
        </div>
    )
}

export default Navbar

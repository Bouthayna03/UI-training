import React, { Component } from "react";
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </div>
        )
    }
}

export default Navbar;

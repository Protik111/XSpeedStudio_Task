import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {/* <a className="navbar-brand" href="#">Navbar</a> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <Link to='/' className="nav-item active">
                        <a className="nav-link" href="#">List</a>
                    </Link>
                    <Link to='/create' className="nav-item">
                        <a className="nav-link" href="#">Create</a>
                    </Link>
                    <Link to='/update' className="nav-item">
                        <a className="nav-link" href="#">Update</a>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
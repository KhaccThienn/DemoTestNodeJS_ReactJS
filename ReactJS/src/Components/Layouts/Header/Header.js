import React from 'react'
import { Link } from "react-router-dom"

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <Link className="navbar-brand" to={"/"}>Navbar</Link>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to={"/"}>Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to={""} id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                People
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <Link className="dropdown-item" to={"/people"}>List</Link>
                                <Link className="dropdown-item" to={"/people/add"}>Add</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link to="/products" className="navbar-brand">
                    React CRUD & Routing
                </Link>
                <Link
                    to="/products/create"
                    className="btn btn-success d-block d-md-inline-block"
                >Add product</Link>
            </div>
        </nav>
    )
}

export default Header

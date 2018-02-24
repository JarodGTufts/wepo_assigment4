import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">

            <span className="navbar-brand mb-0 h1">
                <img src="http://res.freestockphotos.biz/pictures/16/16525-illustration-of-a-slice-of-pizza-with-toppings-pv.png" width="30" height="30" alt="" />
                <span className="ml-2">PizzerioUno</span>
            </span>

            <div className="collapse navbar-collapse" id="navbarNav">

                <div className="navbar-nav">
                    <div className="nav-item">
                        <Link to="/" className="nav-link">Menu</Link>
                    </div>

                    <div className="nav-item">
                        <Link to="/offers" className="nav-link">Offers</Link>
                    </div>

                    <div className="nav-item">
                        <Link to="/about" className="nav-link">About Us</Link>
                    </div>

                    <div className="nav-item">
                        <Link to="/cart" className="nav-link">Cart</Link>
                    </div>



                </div>
            </div>
        </nav>
    )
}

export default Navbar;
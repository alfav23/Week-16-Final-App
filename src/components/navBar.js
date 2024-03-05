import React from 'react';
import { Link } from 'react-router-dom';

// start w navbar and add home, watchlist, and reviews page link
export default function NavBar() {
    return(
        <div>
            <nav className="navbar navbar-dark bg-dark border border-secondary rounded-2 m-2 p-2">
                <a className="navbar-brand" href="#"> 
                <img src="../download.png" width="40" height="40" className="d-inline-block align-center border border-dark rounded-4" alt="TV clipart"/>
                   &nbsp; CRUD React Watchlist App 2.0
                </a>
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/home">Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/watchlists">My Watchlists</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/reviews">My Reviews</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
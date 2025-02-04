import React, { useEffect } from 'react';

const Navbar = () => {

    return (
        <nav className="navbar">
            <div className="containerNav">
                <a className="navbar-brand" href="#">
                    <lord-icon className="iconoAnimado"
                        src="https://cdn.lordicon.com/bsdkzyjd.json"
                        trigger="hover"
                        colors="primary:#ffffff,secondary:#e4e4e4"
                        style={{ width: "40px", height: "40px" }}>
                    </lord-icon>
                    Harbet
                </a>
                <div className='searchBar'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                    <input className='searchInput' type="text" placeholder="Search" />
                </div>
                <div className='navbar-right'>
                    <a href="#" className='signUpButton'>Sign Up</a>
                    <a href="#" className='loginButton'>Log In</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

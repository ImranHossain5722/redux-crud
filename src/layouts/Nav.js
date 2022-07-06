import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <Link to='/' className='nav-link'>Home</Link>
            <Link to='/ShowBooks' className='nav-link'>Show Books</Link>
            <Link to='/addBooks' className='nav-link'>Add Books</Link>
            
        </nav>
    );
};

export default Nav;
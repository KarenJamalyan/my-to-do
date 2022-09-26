import React from 'react';
import * as s from './style';
import { Link } from 'react-router-dom';



const Navbar: React.FC = () => {
   

    return (
       <s.Nav>
            <Link  to="/"  style={{ textDecoration: 'none' }}>
                <s.LinkItem> Home </s.LinkItem> 
            </Link> 
            <Link to="/add" style={{ textDecoration: 'none', paddingLeft: '20px' }}>
                <s.LinkItem>Add Todo</s.LinkItem>
            </Link>
       </s.Nav>
    )
}

export default Navbar;
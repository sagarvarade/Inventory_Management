import React from 'react';
import { 
    Nav, 
    NavLink, 
    Bars, 
    NavMenu
  } from './NavbarElements'; 

  const AdminBoard = () => { 
    return ( 
      <> 
        <Nav> 
          <Bars />
          <NavMenu> 
            <NavLink to='/about' activeStyle> 
              Admin Board 
            </NavLink> 
            <NavLink to='/events' activeStyle> 
              Events 
            </NavLink> 
            <NavLink to='/annual' activeStyle> 
              Annual Report 
            </NavLink> 
            <NavLink to='/team' activeStyle> 
              Teams 
            </NavLink> 
            <NavLink to='/blogs' activeStyle> 
              Blogs 
            </NavLink> 
            <NavLink to='/sign-up' activeStyle> 
              Sign Up 
            </NavLink>
          </NavMenu>
        </Nav> 
      </> 
    ); 
  }; 
    
  export default AdminBoard;
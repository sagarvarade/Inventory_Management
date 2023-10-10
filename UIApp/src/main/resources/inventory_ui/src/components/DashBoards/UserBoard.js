import React from 'react';
import { Routes, Route } from "react-router-dom";
import { 
    Nav, 
    NavLink, 
    Bars, 
    NavMenu,
    NavBtn, 
    NavBtnLink
  } from './NavbarElements'; 
import Profile from '../Profile';
//import AuthService from "../../services/auth.service";
//import Login from "../../components/Login";
import CreateWareHouse from '../InventoryForms/CreateWarehouse';

const logOut = () => {
  alert("log out")
};

  const UserBoard = () => { 
    return ( 
      <div> 
        <Nav> 
          <Bars />
          <NavMenu> 
            <NavLink to='/about' activestyle> 
              User Board 
            </NavLink>
            <NavLink to='/createwarehouse' activestyle> 
              Create ware house 
            </NavLink>
            <NavBtn> 
              <NavBtnLink onClick={logOut}>Log out</NavBtnLink> 
            </NavBtn> 
          </NavMenu>
        </Nav>
        <div>
         <Routes>
           <Route exact path="/about" element={<Profile />} />
           <Route exact path="/createwarehouse" element={<CreateWareHouse />} />
         </Routes>
         </div>
      </div> 
    ); 
  }; 
    
  export default UserBoard;
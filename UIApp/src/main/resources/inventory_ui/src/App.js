import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/Login";
import AdminBoard from "./components/DashBoards/AdminBoard";
import UserBoard from "./components/DashBoards/UserBoard"
import EventBus from "./common/EventBus";

const App = () => {
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowAdminBoard(user.roles==='ROLE_ADMIN');
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    setShowAdminBoard(false);
    setCurrentUser(false);
  };

   return (
     <div>
            {showAdminBoard && (
              <AdminBoard />
            )}
            <br></br>
            {currentUser && (
              <UserBoard />
            )}
        <div>
         {currentUser ? (
           <div className="navbar-nav ml-auto">
             <li className="nav-item">
               <Link to={"/profile"} className="nav-link">
                 {currentUser.username}
               </Link>
             </li>
             <li className="nav-item">
               <a href="/login" className="nav-link" onClick={logOut}>
                 LogOut
               </a>
             </li>
           </div>
         ) : (
           <div className="navbar-nav ml-auto">
             <li className="nav-item">
               <Link to={"/login"} className="nav-link">
                 Login
               </Link>
             </li>

             <li className="nav-item">
               <Link to={"/register"} className="nav-link">
                 Sign Up
               </Link>
             </li>
           </div>
         )}
         </div>
       <div className="container mt-3">
         <Routes>
           <Route exact path={"/"} element={<Login />} />
           <Route exact path="/login" element={<Login />} />
         </Routes>
       </div>
     </div>
   );

};

export default App;
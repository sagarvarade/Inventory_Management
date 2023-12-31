import React from "react";
import AuthService from "../services/auth.service";

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Id:</strong> {currentUser.user_id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <p>
      <strong>Authorities:</strong> {currentUser.roles}
      </p>
    </div>
  );
/*
  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
           Profile .............
        </h3>
      </header>
    </div>
  ); */
};

export default Profile;

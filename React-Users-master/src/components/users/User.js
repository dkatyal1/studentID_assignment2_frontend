import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const User = () => {
  const [user, setUser] = useState({
    Id: "",
    firstname: "",
    lastname: "",
    emailid: ""
  });
  const { id } = useParams();
 // let empid = params.id;
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    fetch('http://localhost:8081/api/vi/employees/' + id)
      .then(data => data.json()).then(result => {
        setUser(result[0])
      });
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">firstname: {user.firstname}</li>
        <li className="list-group-item">lastname: {user.lastname}</li>
        <li className="list-group-item">email: {user.emailid}</li>
      </ul>
    </div>
  );
};

export default User;

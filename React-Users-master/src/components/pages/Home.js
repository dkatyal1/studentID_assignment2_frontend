import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    fetch("http://localhost:8081/api/vi/employees").then(res =>res.json()).then(result => {
      setUser(result);
    })
  };

  const deleteUser = async id => {
    console.log("Inside Delete");
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
  };
     fetch('http://localhost:8081/api/vi/employees/' + id, requestOptions ).then(res =>res.json())
     loadUsers();
     fetch("http://localhost:8081/api/vi/employees").then(res =>res.json()).then(result => {
      setUser(result);
    })
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Employee Listing</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.emailid}</td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`/users/${user.Id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/users/edit/${user.Id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(user.Id)}
                    to={`/`}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;

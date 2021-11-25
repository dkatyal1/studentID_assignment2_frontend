import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    Id: "",
    firstname: "",
    lastname: "",
    emailid: ""
  });

  const { Id,firstname, lastname, emailid } = user;
  let fname = firstname;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
  };
      return fetch('http://localhost:8081/api/vi/employees/' + id, requestOptions )
        .then(data=>data.message)
  };

  const loadUser = async () => {
    fetch('http://localhost:8081/api/vi/employees/' + id)
      .then(data => data.json()).then(result => {
        setUser(result[0])
      });
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your First Name"
              name="firstname"
              defaultValue={firstname}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Last name"
              name="lastname"
              defaultValue={lastname}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="emailid"
              defaultValue={emailid}
              onChange={e => onInputChange(e)}
            />
          </div>
                   <button className="btn btn-warning btn-block">Update User</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;

import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    Id: "",
    firstname: "",
    lastname: "",
    emailid: ""
  });

  const { Id,firstname, lastname, emailid } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
   const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
};
    return fetch('http://localhost:8081/api/vi/employees', requestOptions )
      .then(data=>data.message)
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Employee</h2>
        <form onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Id"
              name="Id"
              value={Id}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your First Name"
              name="firstname"
              value={firstname}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Last name"
              name="lastname"
              value={lastname}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="emailid"
              value={emailid}
              onChange={e => onInputChange(e)}
            />
          </div>      
          <button className="btn btn-primary btn-block">Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;

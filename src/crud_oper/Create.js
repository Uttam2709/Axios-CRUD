import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data Added");
    axios
      .post("https://649c002304807571923749f3.mockapi.io/Crud-Operation", {
        name: name,
        email: email,
      })
      .then(() => {
        navigate("/read");
      });
  };

  return (
    <>
      <div className="d-flex justify-content-between my-2">
      <h3>Create Page</h3>
      <NavLink to="/read">
      <button className="btn btn-primary">Show Data</button>
      </NavLink>
      </div>
      <form>
        <div className="mb-3">
          <label className="form-label ">Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            id="email"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Create;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Update() {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log("Id...", id);
    await axios
      .put(`https://649c002304807571923749f3.mockapi.io/Crud-Operation/${id}`, {
        name: name,
        email: email,
      })
      .then(() => {
        navigate("/read");
      });
  };

  return (
    <>
      <h3>Update Page</h3>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            id="email"
            value={email}
            className="form-control"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary mx-2"
          onClick={handleUpdate}
        >
          Update
        </button>

        <NavLink to="/read">
          <button className="btn btn-info">Back To Read Page</button>
        </NavLink>
      </form>
    </>
  );
}

export default Update;

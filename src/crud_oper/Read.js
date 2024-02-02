import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);

  //-----   GetData function -----//

  function getData() {
    axios
      .get("https://649c002304807571923749f3.mockapi.io/Crud-Operation")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }

  //-----   Delete function -----//

  function handleDelete(id) {
    axios
      .delete(
        `https://649c002304807571923749f3.mockapi.io/Crud-Operation/${id}`
      )
      .then(() => {
        getData();
      });
  }

  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between my-2 mx-2">
        <p>This is Read data section</p>
        <NavLink to="/">
          <button className="btn btn-secondary">Add New Data</button>
        </NavLink>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>
                    <NavLink to="/update">
                      <button
                        className="btn btn-success"
                        onClick={() =>
                          setToLocalStorage(
                            eachData.id,
                            eachData.name,
                            eachData.email
                          )
                        }
                      >
                        {" "}
                        Edit{" "}
                      </button>
                    </NavLink>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(eachData.id)}
                    >
                      Delete{" "}
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};

export default Read;

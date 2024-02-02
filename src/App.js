// import "./App.css";
import Create from "./crud_oper/Create";
import Read from "./crud_oper/Read";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Update from "./crud_oper/Update";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Create />} />
          <Route exact path="/read" element={<Read />} />
          <Route exact path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

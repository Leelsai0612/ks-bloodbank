import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Dashboard from "./Dashboard";

import Inventory from "./Inventory";
import Requests from "./Requests";
import DonorManagement from "./DonorManagement";

function App() {
  return (
    <Router>

      <Routes>

        <Route path="/home" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="donor" element={<DonorManagement />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="requests" element={<Requests />} />
        </Route>

      </Routes>

    </Router>
  );
}

export default App;
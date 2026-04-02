import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import DonorManagement from "./DonorManagement";
import Inventory from "./Inventory";
import Requests from "./Requests";

function MainLayout() {
  return (
    <div className="d-flex">

      {/* Sidebar */}
      <div className="bg-dark text-white p-3" style={{ width: "220px", height: "100vh" }}>
        <h4>Blood Bank</h4>

        <Link to="/home/dashboard">
          <button className="btn btn-light w-100 mb-2">Dashboard</button>
        </Link>

        <Link to="/home/donors">
          <button className="btn btn-light w-100 mb-2">Donor Management</button>
        </Link>

        <Link to="/home/inventory">
          <button className="btn btn-light w-100 mb-2">Inventory</button>
        </Link>

        <Link to="/home/requests">
          <button className="btn btn-light w-100">Requests</button>
        </Link>
      </div>

      {/* Content */}
      <div className="p-4 w-100">
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="donors" element={<DonorManagement />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="requests" element={<Requests />} />
        </Routes>
      </div>

    </div>
  );
}

export default MainLayout;
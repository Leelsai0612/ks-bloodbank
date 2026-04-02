import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {

  const menuStyle = {
    background:"white",
    color:"black",
    padding:"10px",
    marginBottom:"10px",
    borderRadius:"5px"
  };

  return (
    <div style={{display:"flex"}}>

      {/* Sidebar */}
      <div style={{
        width:"220px",
        background:"#1e2a32",
        color:"white",
        height:"100vh",
        padding:"20px"
      }}>

        <h3>Blood Bank</h3>

        <ul style={{listStyle:"none", padding:"0"}}>

          <li style={menuStyle}>
            <Link to="/home" style={{textDecoration:"none"}}>Dashboard</Link>
          </li>

          <li style={menuStyle}>
            <Link to="/home/donor">Donor Management</Link>
          </li>

          <li style={menuStyle}>
            <Link to="/home/inventory">Inventory</Link>
          </li>

          <li style={menuStyle}>
            <Link to="/home/requests">Requests</Link>
          </li>

        </ul>

      </div>

      {/* Page Content */}
      <div style={{flex:1, padding:"30px"}}>
        <Outlet />
      </div>

    </div>
  );
}

export default Layout;
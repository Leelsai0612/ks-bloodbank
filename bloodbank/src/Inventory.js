import React, { useState } from "react";

function Inventory() {

  const [data, setData] = useState([
    { group: "A+", units: 20, status: "Available" },
    { group: "B+", units: 10, status: "Low" },
    { group: "O+", units: 5, status: "Critical" },
    { group: "AB+", units: 15, status: "Available" }
  ]);

  const [newGroup, setNewGroup] = useState("");
  const [newUnits, setNewUnits] = useState("");

  const addStock = () => {
    if (!newGroup || !newUnits) {
      alert("Enter details");
      return;
    }

    let status = "Available";
    if (newUnits < 10) status = "Critical";
    else if (newUnits < 15) status = "Low";

    setData([
      ...data,
      { group: newGroup, units: newUnits, status }
    ]);

    setNewGroup("");
    setNewUnits("");
  };

  const getBadge = (status) => {
    if (status === "Available") return "bg-success";
    if (status === "Low") return "bg-warning";
    return "bg-danger";
  };

  return (
    <div>
      <h3>Inventory Management</h3>

      {/* Add Stock */}
      <div className="card p-3 mt-3">
        <h5>Add Blood Stock</h5>

        <div className="row">
          <div className="col-md-4">
            <input
              className="form-control"
              placeholder="Blood Group (A+, B+...)"
              value={newGroup}
              onChange={(e) => setNewGroup(e.target.value)}
            />
          </div>

          <div className="col-md-4">
            <input
              className="form-control"
              type="number"
              placeholder="Units"
              value={newUnits}
              onChange={(e) => setNewUnits(e.target.value)}
            />
          </div>

          <div className="col-md-4">
            <button className="btn btn-primary w-100" onClick={addStock}>
              Add Stock
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <table className="table table-bordered mt-4 text-center">
        <thead className="table-dark">
          <tr>
            <th>Blood Group</th>
            <th>Units Available</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.group}</td>
              <td>{item.units}</td>
              <td>
                <span className={`badge ${getBadge(item.status)}`}>
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default Inventory;
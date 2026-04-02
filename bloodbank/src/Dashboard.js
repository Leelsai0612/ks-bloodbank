import React from "react";
import {
  PieChart, Pie, Cell, Tooltip, Legend,
  BarChart, Bar, XAxis, YAxis, CartesianGrid
} from "recharts";

function Dashboard() {

  const data = [
    { group: "A+", units: 40 },
    { group: "B+", units: 25 },
    { group: "O+", units: 30 },
    { group: "AB+", units: 15 }
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div>
      <h3>Dashboard</h3>

      {/* Cards */}
      <div className="row mt-3">
        {data.map((item, i) => (
          <div className="col-md-3" key={i}>
            <div className="card text-center p-3 bg-primary text-white">
              <h4>{item.group}</h4>
              <p>{item.units} Units</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="row mt-5">

        {/* Pie Chart */}
        <div className="col-md-6">
          <h5>Blood Distribution</h5>

          <PieChart width={400} height={300}>
            <Pie
              data={data}
              dataKey="units"
              nameKey="group"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

            <Tooltip />
            <Legend />
          </PieChart>
        </div>

        {/* Bar Graph */}
        <div className="col-md-6">
          <h5>Blood Stock Levels</h5>

          <BarChart width={400} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="group" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="units" fill="#8884d8" />
          </BarChart>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;
import React from "react";
import { Bar } from "react-chartjs-2";
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend,} from "chart.js";
import "./Dashboard.css";

ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend);
function Dashboard() {
  return (
    <div className="dashboard">
      <div className="chart-section">
        <h2>Total Sales Data</h2>
        <div className="chart-container">
          <Bar
            data={{
              labels: ["totalSales","saleslast7Days","salesThisMonth","salesLastMonth","salesLastYear"],
              datasets: [
                {
                  label: "Sales Data",
                  data: [970313.15, null, null, 957313.15, null],
                  backgroundColor: ["pink", "", "", "lightblue", ""],
                  borderWidth: 0.5,
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
              plugins: {
                legend: {
                  labels: {
                    fontSize: 15,
                  },
                },
              },
            }}
          />
        </div>
      </div>

      <div className="category-section">
        <h2>Total CategoryWise Data</h2>
        <div className="category-details">
          <h3>CategoryWiseDetailsLast7Days</h3>
          <h3>CategoryWiseDetailsThisMonth</h3>
          <h3>CategoryWiseDetailsLastYear</h3>
        </div>
      </div>

      <div className="color-section">
        <h2>Total ColorWise Data</h2>
        <div className="color-details">
          <h3>ColorWiseDetailsLast7Days</h3>
          <h3>ColorWiseDetailsThisMonth</h3>
          <h3>ColorWiseDetailsLastYear</h3>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

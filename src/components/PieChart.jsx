import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function PieChart() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(myChartRef, {
      type: "doughnut", // Use doughnut chart
      data: {
        labels: ["Completed", "Remaining"],
        datasets: [
          {
            data: [33, 67], // Completed and Remaining percentages
            backgroundColor: [
              "rgb(54, 162, 235)", // Blue for completed
              "rgb(200, 200, 200)", // Gray for remaining
            ],
            borderWidth: 1.5, // No borders
          },
        ],
      },
      options: {
        cutout: "70%", // Create a thicker doughnut
        plugins: {
          legend: {
            display: false, // Disable default legend
          },
          tooltip: {
            enabled: false, // Disable tooltips
          },
        },
        maintainAspectRatio: false,
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div style={{ position: "relative", width: "250px", height: "250px", marginLeft: "25%", display: "flex", flexDirection: "row" }}>
      <canvas ref={chartRef} />
      {/* Add the centered text */}
      <div
        style={{
            position: "absolute",
            top: "10%", 
            left: "110%", 
            color: "#ffffff",
            textAlign: "left",
            fontSize: "26px",
          }}
        >
          Completed <br />
          <span style={{ fontSize: "20px", color: "#fff", marginLeft: "50px" }}>33</span>
      </div>
      <div style={{ position: "absolute", width: "150px", height: "80px", backgroundColor: "#323232", marginLeft: "200%", marginTop: "40%", borderRadius: "15px", padding: "0px 10px 10px 10px", fontSize: "20px" }}>
          <p>Completion rate <br/>33</p>
      </div>
    </div>
  );
}

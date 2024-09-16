import React, { useState } from "react";
import Sidebar from "../(auth)/sidebar"; // Sidebar component
import Navbar from "../(auth)/navbar"; // Navbar component
import Card from "../../Card"; // Card component

const Dashboard = () => {
  // State to track the active page
  const [activePage, setActivePage] = useState("dashboard");

  // Function to handle page change
  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <div className="bg-[#FBEDED] h-screen flex overflow-hidden">
      {/* Sidebar with dynamic content based on the activePage */}
      <Sidebar activePage={activePage} onChangePage={handlePageChange} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Dashboard Content */}
        <div className="px-8 py-6 space-y-6">
          {activePage === "dashboard" && (
            <div>
              {/* Metrics Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card
                  title="Total Revenue"
                  value="₦500,000"
                  change="22.45%"
                  icon="up"
                />
                <Card title="Orders" value="1,056" change="15.34%" icon="up" />
                <Card
                  title="Unique Visits"
                  value="5,420"
                  change="-10.24%"
                  icon="down"
                />
                <Card
                  title="New Users"
                  value="1,650"
                  change="15.34%"
                  icon="up"
                />
              </div>
             
              {/* Graph and Sales Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
            {/* Orders Over Time Graph */}
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Orders Over Time</h3>
              <div className="h-64">
                {/* Replace with charting library like Chart.js or Recharts */}
                <img src="path/to/your-chart-placeholder.png" alt="Orders Over Time" />
              </div>
            </div>

            {/* Sales Summary */}
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Last 7 Days Sales</h3>
              <div className="h-64">
                {/* Replace with charting library like Chart.js or Recharts */}
                <img src="path/to/your-sales-chart-placeholder.png" alt="Sales Chart" />
              </div>
            </div>
          </div>

                {/* Recent Transactions & Top Rooms */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-5">
            {/* Recent Transactions */}
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
              <table className="w-full text-left">
                <thead>
                  <tr className="text-gray-500">
                    <th>Name</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Tope Odu</td>
                    <td>24.05.2023</td>
                    <td>₦124.97</td>
                    <td className="text-green-600">Paid</td>
                  </tr>
                  {/* Add more rows here */}
                </tbody>
              </table>
            </div>

            {/* Top Rooms by Units Sold */}
            <div className="bg-white shadow rounded-lg p-6 mt-3">
              <h3 className="text-lg font-semibold mb-4">Top Rooms by Units Sold</h3>
              <table className="w-full text-left">
                <thead>
                  <tr className="text-gray-500">
                    <th>Room</th>
                    <th>Price</th>
                    <th>Units Sold</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Bedroom in Ikate, Lekki</td>
                    <td>₦5,000/hr</td>
                    <td>2</td>
                  </tr>
                  {/* Add more rows here */}
                </tbody>
              </table>
            </div>
            </div>
            </div>
          )}

          {activePage === "orders" && (
            <div>
              {/* Orders Page Content */}
              <h3 className="text-lg font-semibold mb-4">Orders</h3>
              <p>This is where orders will be displayed.</p>
              {/* Add your orders-related content here */}
            </div>
          )}

          {activePage === "settings" && (
            <div>
              {/* Settings Page */}
              <h3 className="text-lg font-semibold mb-4">Settings</h3>
              <p>Settings content goes here.</p>
              {/* Add settings options */}
            </div>
          )}

          {/* Add more sections as needed for other pages */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

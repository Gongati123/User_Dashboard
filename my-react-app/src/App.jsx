
import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import UserDetails from "./Pages/UserDetails";

export default function App() {
  return (
    <div className="app">
      {/* Header / Navbar */}
      <header className="header">
        <div className="nav-container">
          <span className="logo">User Dashboard</span>
        </div>
      </header>

      {/* Main content area */}
      <main className="main">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users/:id" element={<UserDetails />} />
        </Routes>
      </main>
    </div>
  );
}

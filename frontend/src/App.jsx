import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import DataLogs from "./components/DataLogs/DataLogs";
import AboutUs from "./components/AboutUs/AboutUs";
import UserProfile from "./components/UserProfile/UserProfile";

const App = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Router>
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Box sx={{ width: "100%", flexGrow: 0 }}>
          <Header />
        </Box>
        <Box sx={{ padding: isMobile ? "10px" : "20px", flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/data-logs" element={<DataLogs />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/user-profile" element={<UserProfile />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;

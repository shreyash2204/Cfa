import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import DonationPage from "./pages/DonationPage";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<DonationPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;

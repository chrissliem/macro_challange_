import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ContactUs from './KontakKami.js'; // Ensure this path is correct

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ContactUs />} />
          {/* You can add more routes here if needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
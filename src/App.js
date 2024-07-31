import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import GRNList from './pages/GRNList';
import CreateGRN from './components/CreateGRN/CreateGRN';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="d-flex">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/create-grn" element={<CreateGRN />} />
              <Route path="/" element={<GRNList />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

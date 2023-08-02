import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import Navbar from './components/Navbar';
import './App.css';
import Login from './components/Login';
import Landin from "./components/Landin";
import Table from './components/Table';
import Home from "./Screens/HomeScreen"
import Payment from './components/Payment'
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        {/* Define routes for your components */}
        <Routes>
          {/* Use 'element' prop to specify the component to render */}
          <Route path="/" element={<Landin />} />
          <Route path="/Home" element={<HomeScreen />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Table" element={<Table />} />
          <Route path="/Payment" element={<Payment />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

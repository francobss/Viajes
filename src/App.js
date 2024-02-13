import React, { useRef } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from './components/Navbar/Navbar';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navbar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

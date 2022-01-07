import React from 'react';
import { Button } from 'antd';
import { Routes, Route, Link } from "react-router-dom";

import Test from './test';

import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button>adasd</Button>
        <Routes>
          <Route path="/" element={<Test />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;

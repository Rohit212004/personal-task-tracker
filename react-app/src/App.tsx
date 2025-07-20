import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Members from './pages/Members';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <Routes>
          <Route path="/members" element={<Members />} />
          <Route index element={<Home />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

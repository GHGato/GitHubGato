import React from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Landing from './pages/Landing.js'
import Clone from './pages/Clone.js'
import Branch from './pages/Branch.js'

const App =() => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/clone" element={<Clone />} />
      <Route path="/branch" element={<Branch />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;

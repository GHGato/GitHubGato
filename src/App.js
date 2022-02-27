import React from "react";

import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";
import Landing from './pages/Landing.js'
import Clone from './pages/Clone.js'
import Branch from './pages/Branch.js'

const App =() => {
  return (
    <HashRouter>
    <Routes>
      <Route path="/GitHubGato" element={<Landing />} />
      <Route path="/GitHubGato/clone" element={<Clone />} />
      <Route path="/GitHubGato/branch" element={<Branch />} />
    </Routes>
  </HashRouter>
  );
}

export default App;

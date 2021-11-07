import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from './components/Landing';
import Setting from './components/Settings';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/settings" element={<Setting />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

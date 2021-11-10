import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import NewsBox from './components/NewsBox';
function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <NewsBox />
      </div>
    </BrowserRouter>
  );
}

export default App;

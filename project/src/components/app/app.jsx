import {
  BrowserRouter, Route, Routes, Navigate
} from 'react-router-dom';

import React from 'react';
import RootLayout from './rootLayout';
import Roadmap from '../../pages/roadmap/roadmap';
import Books from '../../pages/books/books';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="roadmap" />} />
      <Route element={<RootLayout />}>
        <Route path="/roadmap" element={<Roadmap />}></Route>
        <Route path="/books" element={<Books />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;

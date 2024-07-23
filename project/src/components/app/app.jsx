import {
  BrowserRouter, Route, Routes, Navigate
} from 'react-router-dom';

import React from 'react';
import RootLayout from './rootLayout';
import Roadmap from '../../pages/roadmap/roadmap';
import Books from '../../pages/books/books';
import Stats from '../../pages/stats/stats';
import LearningDiary from '../../pages/learning-diary/learning-diary';
import Projects from '../../pages/projects/projects';
import EventLoop from '../../pages/roadmap-items/event-loop/event-loop';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="roadmap" />} />
      <Route element={<RootLayout />}>
        <Route path="/roadmap" element={<Roadmap />}></Route>
        <Route path="/roadmap/event-loop" element={<EventLoop />}></Route>
        <Route path="/books" element={<Books />}></Route>
        <Route path="/stats" element={<Stats />}></Route>
        <Route path="/learning-diary" element={<LearningDiary />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;

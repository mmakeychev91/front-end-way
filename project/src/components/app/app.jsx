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
import Browser from '../../pages/roadmap-items/browser/browser';
import Http from '../../pages/roadmap-items/http/http';
import DomainName from 'src/pages/roadmap-items/domain-name/domain-name';
import UiLibs from 'src/pages/roadmap-items/ui-libs/ui-libs';
import Variables from 'src/pages/roadmap-items/variables/variables';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="roadmap" />} />
      <Route element={<RootLayout />}>
        <Route path="/roadmap" element={<Roadmap />}></Route>
        <Route path="/roadmap/browser" element={<Browser />}></Route>
        <Route path="/roadmap/event-loop" element={<EventLoop />}></Route>
        <Route path="/roadmap/http" element={<Http />}></Route>
        <Route path="/roadmap/domain-name" element={<DomainName />}></Route>
        <Route path="/roadmap/variables" element={<Variables />}></Route>
        <Route path="/roadmap/ui-libs" element={<UiLibs />}></Route>
        <Route path="/books" element={<Books />}></Route>
        <Route path="/stats" element={<Stats />}></Route>
        <Route path="/learning-diary" element={<LearningDiary />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;

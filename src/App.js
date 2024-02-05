import React from 'react';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

import Main from './Pages/Main';
import AboutMe from './Pages/AboutMe';
import Education from './Pages/Education';
import Skills from './Pages/Skills';
import Experience from './Pages/Experience';
import Projects from './Pages/Projects';

function App() {
  return (
      <Router>
          <Routes>
            <Route exact path='/' element={<Main />} />
            <Route path='/Main' element={<Main/>} />
            <Route path='/AboutMe' element={<AboutMe/>} />
            <Route path='/Education' element={<Education/>} />
            <Route path='/Skills' element={<Skills/>} />
            <Route path='/Experience' element={<Experience/>} />
            <Route path='/Projects' element={<Projects/>} />
          </Routes>
        </Router>
  );
}

export default App;
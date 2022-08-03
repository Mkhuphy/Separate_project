import React from 'react';

import Home from './pages';
import Reg from './pages/reg';
import Details from './pages/details';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Task from './pages/task';
import TaskPoints from './pages/TaskPoints';



function App() {
  return (

    <Router>
      
      <Routes>
        <Route path='/register' element={<Reg />} />
        <Route path='/task' element={<Task />} />
        <Route path='/taskp' element={<TaskPoints />} />
        <Route path='/' exact element={<Home />} />
        <Route path='/details' element={<Details />} />
        <Route path='/Dashboard' element={<Dashboard />} />
      </Routes>
    </Router>

  );
}

export default App;

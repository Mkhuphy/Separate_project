import React from 'react';

import Home from './pages';
import Reg from './pages/reg';
import Details from './pages/details';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Task from './pages/task';
import TaskPoints from './pages/TaskPoints';
import Leaderboard from './pages/Leaderboard';
import Not_v from './pages/Not_v';



function App() {
  return (

    <Router>
      
      <Routes>
        <Route path='/' element={<Reg />} />
        <Route path='/home' exact element={<Home />} />
        <Route path='/notv' element={<Not_v />} />

        <Route path='/task' element={<Task />} />
        <Route path='/taskp' element={<TaskPoints />} />
        <Route path='/details' element={<Details />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/Leaderboard' element={<Leaderboard />} />
      </Routes>
    </Router>

  );
}

export default App;

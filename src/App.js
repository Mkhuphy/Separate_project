import React from 'react';

import Home from './pages';
import Reg from './pages/reg';
import Details from './pages/details';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Task from './pages/task';
import TaskPoints from './pages/TaskPoints';
import ChangeDetails from './pages/changeDetails';
import Leaderboard from './pages/Leaderboard';



function App() {
  return (

    <Router>
      
      <Routes>
        <Route path='/register' element={<Reg />} />
        <Route path='/task' element={<Task />} />
        <Route path='/taskp' element={<TaskPoints />} />
        <Route path='/' exact element={<Home />} />
        <Route path='/details' element={<Details />} />
        <Route path='/cdetails' element={<ChangeDetails />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/Leaderboard' element={<Leaderboard />} />
      </Routes>
    </Router>

  );
}

export default App;

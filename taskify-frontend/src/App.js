import React from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css';
import Login from './components/Login.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from './components/Dashboard.jsx';
import Error from './components/Error.jsx';
import Home from './components/Home.jsx';
import TodoHeading from './components/Todo/TodoHeading.jsx';

function App() {
  
  return (
    <>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/todo' element={<TodoHeading/>}/>
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
}

export default App;
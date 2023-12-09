import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import School from './pages/School';
import Blog from './pages/Blog';
import Home from './pages/Home';
import LeaderBoard from './pages/LeaderBoard';
import Challenge from './pages/Challenge';
import College from './pages/College';





const App = () => {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' exact element ={<Home/>}></Route>
        <Route path='/blog/:id' element={<Blog/>}></Route> 
        <Route path='/school' element={<School/>}></Route>
        <Route path='/LeaderBoard' element={<LeaderBoard/>}></Route> 
        <Route path='/Challenge' element={<Challenge/>}></Route> 
        <Route path='/College' element={<College/>}></Route> 




      </Routes>
    </div>
  );
};

export default App;

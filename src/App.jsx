import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import './App.css';
import School from './pages/School';
import Blog from './pages/Blog';
import Home from './pages/Home';
import LeaderBoard from './pages/LeaderBoard';
import Challenge from './pages/Challenge';
import Competition from './pages/Competition';
import College from './pages/College';
import University from './pages/University';
import Main from './pages/Main';
import { Loginpage } from './components/userPage/loginPage';
import { SignupPage } from './components/userPage/signupPage';
import { auth } from "./firebase";
import { ProtectedRoute } from "./components/userPage/protected";



const App = () => {

  const [user, setUser] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsFetching(false);
        return;
      }

      setUser(null);
      setIsFetching(false);
    });
    return () => unsubscribe();
  }, []);

  if (isFetching) {
    return <h2 className="container mx-auto items-center text-center">..Loading...</h2>;
  }


  return (
    <div className='container'>
      <Routes>
        <Route path='/' element ={<Loginpage/>}></Route>
        <Route path='/signup' element={<SignupPage/>}></Route>
        {/* <Route path='/home'  element ={<Home/>}></Route> */}
        <Route path='/blog/:id' element={<Blog/>}></Route> 
        <Route path='/school' element={<School/>}></Route>
        <Route
            path="/home"
            element={
              <ProtectedRoute user={user}>
                <Home></Home>
              </ProtectedRoute>
            }
          ></Route>
           <Route
            path="/LeaderBoard"
            element={
              <ProtectedRoute user={user}>
                <LeaderBoard></LeaderBoard>
              </ProtectedRoute>
            }
          ></Route>

        {/* <Route path='/LeaderBoard' element={<LeaderBoard/>}></Route>  */}
        <Route
            path="/Challenge"
            element={
              <ProtectedRoute user={user}>
                <Challenge></Challenge>
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/Competition"
            element={
              <ProtectedRoute user={user}>
                <Competition></Competition>
              </ProtectedRoute>
            }
          ></Route>
        <Route path='/College' element={<College/>}></Route> 
        <Route path='/University' element={<University/>}></Route> 
        <Route path='/Main' element={<Main/>}></Route>
        



      </Routes>
    </div>
  );
};

export default App;

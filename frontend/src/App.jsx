import React from 'react'
import Navbar from './component/Navbar'
import Banner from './component/Banner'
import Footer from './component/Footer'
import Freebook from './component/Freebook'
import Cards from './component/Cards'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Course from './component/Course'
import About from './component/About'
import Contact from './component/Contact'
import Courses from './Courses/Courses'
import Signup from './component/Signup'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'
function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser ? <Courses /> : <Navigate to="/signup" />} />
          <Route path="/about" element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
      <Toaster />
    </>

  )
}

export default App

import React from 'react'
import {BrowserRouter,Routes, Route,} from 'react-router-dom'
import Courses from './components/Courses.jsx'
import Home from './Home/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Register from './components/Register2.jsx'


function App() {
  return (
 <>
 <BrowserRouter>
 <Navbar />
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/Courses" element={<Courses />} />
  <Route path='/register' element={<Register />} />
</Routes>

<Footer />

 </BrowserRouter>

 
 </>
  )
}

export default App
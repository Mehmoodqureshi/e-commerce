import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Home from'./Home'
import Contact from'./Contact'
import About from'./About'
import SignIn from './SignIn'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="signIn" element={<SignIn />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App;

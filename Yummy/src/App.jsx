
import React from 'react'
// import Routing from './componants/Routing'
import { Route, Routes } from 'react-router-dom'
import Home from './componants/Home'
import AboutUs from './componants/AboutUs'
import Menu from './componants/Menu'
import Event from './componants/Event'
import Chef from './componants/Chef'
import Gallery from './componants/Gallery'
import Contact from './componants/Contact'
import Error from './componants/Error'
import Footer from './componants/Footer'
import Navbar from './componants/Navbar'

const App = () => {


  return (
    <>

        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/Event" element={<Event />} />
            <Route path="/Chef" element={<Chef />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/Contact" element={<Contact />} />
            {/* <Route path="*" element={<Error />} /> */}

        </Routes >
        <Footer />
    </>

  )
}

export default App

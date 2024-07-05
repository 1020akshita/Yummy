import React from 'react'

import Navbar from './componants/Navbar'
import Home from './componants/Home'
import AboutUs from './componants/AboutUs'
import Menu from './componants/Menu'
import Event from './componants/Event'
import Chef from './componants/Chef'
import Gallery from './componants/Gallery'
import Contact from './componants/Contact'
import Footer from './componants/Footer'

const App = () => {
  return (
    <>
      <div className='container max-screen-w-xl mx-auto'>
        <Navbar />
        <Home />
        <AboutUs />
        <Menu />
        <Event />
        <Chef />
        <Gallery />
        <Contact />
      </div>
      <Footer />
    </>


  )
}

export default App

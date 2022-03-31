import React from 'react'
import GlobalStyle from './components/GlobalStyle'

// pages
import Nav from './components/Nav.js'
import AboutUs from './pages/AboutUs'
import OurWork from './pages/OurWork'
import ContactUs from './pages/ContactUs'
// Router
import { Routes, Route } from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Nav />
            <Routes>
                <Route path="/" exact element={<AboutUs />} />
                <Route path="/aboutus" exact element={<AboutUs />} />
                <Route path="/ourwork" exact element={<OurWork />} />
                <Route path="/contactus" exact element={<ContactUs />} />
            </Routes>
        </div>
    )
}

export default App

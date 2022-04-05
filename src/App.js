import React, { useState } from 'react'
import GlobalStyle from './components/GlobalStyle'
import { MovieState } from './movieState.js'

// pages
import Nav from './components/Nav.js'
import AboutUs from './pages/AboutUs'
import OurWork from './pages/OurWork'
import ContactUs from './pages/ContactUs'
import MovieDetail from './pages/MovieDetail'

// Router
import { Routes, Route } from 'react-router-dom'

function App() {
    const [movies, setMovies] = useState(MovieState)

    return (
        <div className="App">
            <GlobalStyle />
            <Nav />
            <Routes>
                <Route path="/" exact element={<AboutUs />} />
                <Route path="/work" exact element={<OurWork movies={movies} setMovies={setMovies} />} />
                <Route path="/work/:id" element={<MovieDetail movies={movies} setMovies={setMovies} />} />
                <Route path="/contact" element={<ContactUs />} />
            </Routes>
        </div>
    )
}

export default App

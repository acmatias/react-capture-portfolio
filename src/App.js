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
import { Routes, Route, useLocation } from 'react-router-dom'

// Animation
import { AnimatePresence } from 'framer-motion'

function App() {
    const [movies, setMovies] = useState(MovieState)

    const url = useLocation()

    return (
        <div className="App">
            <GlobalStyle />
            <Nav />
            <AnimatePresence exitBeforeEnter>
                <Routes location={url} key={url.pathname}>
                    <Route path="/" exact element={<AboutUs />} />
                    <Route path="/work" exact element={<OurWork movies={movies} setMovies={setMovies} />} />
                    <Route
                        path="/work/:id"
                        exact
                        element={<MovieDetail movies={movies} setMovies={setMovies} />}
                    />
                    <Route path="/contact" exact element={<ContactUs />} />
                </Routes>
            </AnimatePresence>
        </div>
    )
}

export default App

import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

//animation
import { motion } from 'framer-motion'
import { pageAnimation, fade, photoAnim, lineAnim, slider, sliderContainder } from '../animation.js'

const OurWork = ({ movies, setMovies }) => {
    return (
        <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <motion.div variants={sliderContainder}>
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
            </motion.div>
            {movies.map((movie) => {
                return (
                    <Movie
                        variants={fade}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        exit="exit"
                        key={movie.title}
                    >
                        <motion.h2 variants={fade}>{movie.title}</motion.h2>
                        <motion.div variants={lineAnim} className="line"></motion.div>
                        <Link className="link" to={movie.url}>
                            <motion.img variants={photoAnim} src={movie.mainImg} alt="athlete" />
                        </Link>
                    </Movie>
                )
            })}
        </Work>
    )
}

const Work = styled(motion.div)`
    /* background: white; */
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2 {
        color: white;
        padding: 1rem 0rem;
    }
`

const Movie = styled(motion.div)`
    padding-bottom: 10rem;
    .line {
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`

//frame animation
const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;
`
const Frame2 = styled(Frame1)`
    background: #ff8efb;
`
const Frame3 = styled(Frame1)`
    background: #8ed2ff;
`
const Frame4 = styled(Frame1)`
    background: #8effa0;
`

export default OurWork

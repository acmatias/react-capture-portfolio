import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const OurWork = ({ movies, setMovies }) => {
    return (
        <Work>
            {movies.map((movie) => {
                return (
                    <Movie key={movie.title}>
                        <h2>{movie.title}</h2>
                        <div className="line"></div>
                        <Link className="link" to={movie.url}>
                            <img src={movie.mainImg} alt="athlete" />
                        </Link>
                    </Movie>
                )
            })}
        </Work>
    )
}

const Work = styled.div`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2 {
        padding: 1rem 0rem;
    }
`

const Movie = styled.div`
    padding-bottom: 10rem;
    .line {
        height: 0.5rem;
        background: #ccc;
        margin-bottom: 3rem;
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`

export default OurWork

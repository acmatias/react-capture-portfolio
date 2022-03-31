import React from 'react'
import styled from 'styled-components'

// Router
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <StyedNav>
            <h1>
                <Link id="logo" to="/">
                    CaPture
                </Link>
            </h1>
            <ul>
                <li>
                    <Link className="link" to="aboutus">
                        1. About Us
                    </Link>
                </li>
                <li>
                    <Link className="link" to="ourwork">
                        2. Our Work
                    </Link>
                </li>
                <li>
                    <Link className="link" to="contactus">
                        3. Contact Us
                    </Link>
                </li>
            </ul>
        </StyedNav>
    )
}
export default Nav

const StyedNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #282828;
    .link {
        color: white;
        text-decoration: none;
    }
    ul {
        display: flex;
        list-style: none;
    }
    #logo {
        font-size: 2.5rem;
        font-family: 'Sedgwick Ave Display', cursive;
        color: white;
        font-weight: lighter;
        text-decoration: none;
    }
    li {
        padding-left: 10rem;
        position: relative;
    }
`

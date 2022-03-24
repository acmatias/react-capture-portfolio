import React from 'react'
import styled from 'styled-components'

const Nav = () => {
    return (
        <StyedNav>
            <h1>
                <a id="logo" href="#">
                    CaPture
                </a>
            </h1>
            <ul>
                <li>
                    <a href="#">1. About Us</a>
                </li>
                <li>
                    <a href="#">2. Our Work</a>
                </li>
                <li>
                    <a href="#">3. Contact Us</a>
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
    a {
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
        font-weight: lighter;
    }
    li {
        padding-left: 10rem;
        position: relative;
    }
`

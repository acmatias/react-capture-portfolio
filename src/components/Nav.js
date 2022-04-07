import React from 'react'
import styled from 'styled-components'

// Router
import { Link } from 'react-router-dom'

const navItems = [
    {
        key: 1,
        name: '1. About Us',
        linkTo: '/',
    },
    {
        key: 2,
        name: '2. Our Work',
        linkTo: 'work',
    },
    {
        key: 3,
        name: '3. Contact Us',
        linkTo: 'contact',
    },
]

const Nav = () => {
    return (
        <StyedNav>
            <h1>
                <Link id="logo" to="/">
                    CaPture
                </Link>
            </h1>
            <ul>
                {navItems.map((navItem) => {
                    return (
                        <li key={navItem.key}>
                            <Link className="link" to={navItem.linkTo}>
                                {navItem.name}
                            </Link>
                        </li>
                    )
                })}
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
    position: sticky;
    top: 0;
    z-index: 10;
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

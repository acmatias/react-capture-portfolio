import React from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'

//router
import { Link } from 'react-router-dom'

//animation
import { motion } from 'framer-motion'

const navItems = [
    {
        key: 1,
        name: '1. About Us',
        linkTo: '/',
    },
    {
        key: 2,
        name: '2. Our Work',
        linkTo: '/work',
    },
    {
        key: 3,
        name: '3. Contact Us',
        linkTo: '/contact',
    },
]

const Nav = () => {
    const { pathname } = useLocation()
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
                            <Line
                                transition={{ duration: 0.75 }}
                                initial={{ width: '0%' }}
                                animate={{ width: pathname === navItem.linkTo ? '50%' : '0%' }}
                            />
                        </li>
                    )
                })}
            </ul>
        </StyedNav>
    )
}

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
    @media (max-width: 1300px) {
        flex-direction: column;
        padding: 1rem;
        #logo {
            display: inline-block;
            margin: 1rem;
        }
        ul {
            padding: 2rem;
            justify-content: space-around;
            width: 100%;
        }
        li {
            padding: 0;
        }
    }
`
const Line = styled(motion.div)`
    position: 5%;
    height: 0.3rem;
    background: #23d997;
    width: 0%;
    bottom: -80%;
    left: 60%;
`

export default Nav

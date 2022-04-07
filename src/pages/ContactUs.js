import React from 'react'
import styled from 'styled-components'
//animation
import { motion } from 'framer-motion'
import { pageAnimation, titleAnim } from '../animation.js'

const ContactUs = () => {
    return (
        <ContactStyle variants={pageAnimation} initial="hidden" animate="show">
            <Title>
                <Hide>
                    <motion.h2 variants={titleAnim}>Get in touch</motion.h2>
                </Hide>
            </Title>
            <div>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle />
                        <h2>Send Us a Message</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle />
                        <h2>Send an Email</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle />
                        <h2>Contact Us</h2>
                    </Social>
                </Hide>
            </div>
        </ContactStyle>
    )
}

const ContactStyle = styled(motion.div)`
    padding: 5rem 10rem;
    color: #353535;
    min-height: 90vh;
    @media (max-width: 1300px) {
        padding: 2rem;
    }
`

const Title = styled.div`
    margin-bottom: 4rem;
    color: black;
    @media (max-width: 1300px) {
        h2 {
            font-size: 2rem;
        }
    }
`
const Hide = styled.div`
    overflow: hidden;
    h2 {
        color: white;
    }
`
const Circle = styled.div`
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background: #fff;
    @media (max-width: 1300px) {
        width: 2rem;
        height: 2rem;
    }
`

const Social = styled(motion.div)`
    display: flex;
    align-items: center;
    h2 {
        margin: 2rem;
        color: #fff;
    }
    @media (max-width: 1300px) {
        h2 {
            font-size: 2rem;
        }
    }
`

export default ContactUs

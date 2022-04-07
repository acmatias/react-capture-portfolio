import React from 'react'
import styled from 'styled-components'
import home1 from '../img/home1.png'

//animation
import { motion } from 'framer-motion'
import { titleAnim, fade, photoAnim } from '../animation.js'
import Wave from './Wave.js'

export const AboutSection = () => {
    return (
        <About>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnim}>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            your <span>dreams</span>
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>come true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>
                    Contact us for any photography or videography ideas that you have. We have professionals
                    with amazing skills.
                </motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
            </Image>
            <Wave />
        </About>
    )
}
const About = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
    @media (max-width: 1300px) {
        display: block;
        padding: 2rem 2rem;
        text-align: center;
    }
`

const Description = styled.div`
    flex: 1;
    padding-right: 2rem;
    h2 {
        font-weight: lighter;
    }
    @media (max-width: 1300px) {
        padding: 0;
        button {
            margin: 2rem 0rem 5rem 0rem;
        }
    }
`

const Image = styled.div`
    flex: 1;
    overflow: hidden;
    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`

const Hide = styled.div`
    overflow: hidden;
`

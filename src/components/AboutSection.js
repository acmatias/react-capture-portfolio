import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import home1 from '../img/home1.png'

export const AboutSection = () => {
    const titleAnim = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                duration: 2,
            },
        },
    }
    const container = {
        hidden: { x: 100 },
        show: {
            x: 0,
            transition: {
                duration: 0.75,
                ease: 'easeOut',
                staggerChildren: 1,
            },
        },
    }

    return (
        <About>
            <Description>
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="title"
                >
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
                <p>
                    Contact us for any photography or videography ideas that you have. We have professionals
                    with amazing skills.
                </p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <img src={home1} alt="guy with a camera" />
            </Image>
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
`

const Description = styled.div`
    flex: 1;
    padding-right: 2rem;
    h2 {
        font-weight: lighter;
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

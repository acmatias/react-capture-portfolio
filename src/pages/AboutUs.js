import React from 'react'
//page components
import { AboutSection } from '../components/AboutSection.js'
import { ServicesSection } from '../components/ServicesSection.js'
import { FaqSection } from '../components/FaqSection.js'

//animation
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation.js'

const AboutUs = () => {
    return (
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <AboutSection />
            <ServicesSection />
            <FaqSection />
        </motion.div>
    )
}
export default AboutUs

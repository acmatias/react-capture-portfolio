import React from 'react'
//animation
import { motion } from 'framer-motion'
import { pageAnimation } from '../components/Animation.js'

const ContactUs = () => {
    return (
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            ContactUs
        </motion.div>
    )
}

export default ContactUs

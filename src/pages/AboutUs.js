import React from 'react'
//page components
import { AboutSection } from '../components/AboutSection.js'
import { ServicesSection } from '../components/ServicesSection.js'
import { FaqSection } from '../components/FaqSection.js'

export const AboutUs = () => {
    return (
        <>
            <AboutSection />
            <ServicesSection />
            <FaqSection />
        </>
    )
}

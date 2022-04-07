import React from 'react'
import styled from 'styled-components'
import Toggle from './Toggle.js'

//animation
import { motion, AnimateSharedLayout } from 'framer-motion'
import { scrollReveal } from '../animation.js'
import { useScroll } from './useScroll.js'

const questions = [
    {
        key: 1,
        title: 'How do I Start?',
        answer1: 'Lorem ipsum dolor sit amet.',
        answer2: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, libero.',
    },
    {
        key: 2,
        title: 'Daily Schedule',
        answer1: 'Lorem ipsum dolor sit amet.',
        answer2: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, libero.',
    },
    {
        key: 3,
        title: 'Diferrent Payment Methods',
        answer1: 'Lorem ipsum dolor sit amet.',
        answer2: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, libero.',
    },
    {
        key: 4,
        title: 'What Products do you offer.',
        answer1: 'Lorem ipsum dolor sit amet.',
        answer2: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, libero.',
    },
]

export const FaqSection = () => {
    const [element, controls] = useScroll()
    return (
        <Faq variants={scrollReveal} animate={controls} initial="hidden" ref={element}>
            <h2>
                Any Question <span> FAQ</span>
            </h2>
            <AnimateSharedLayout>
                {questions.map((question) => {
                    return (
                        <Toggle title={question.title} key={question.key}>
                            <div className="answer">
                                <p>{question.answer1}</p>
                                <p>{question.answer2}</p>
                            </div>
                        </Toggle>
                    )
                })}
            </AnimateSharedLayout>
        </Faq>
    )
}

const Faq = styled(motion.div)`
    min-height: 90vh;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
    display: block;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;

    span {
        display: block;
    }
    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    h4 {
        cursor: pointer;
    }
    .faq-line {
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question {
        padding: 3rem 0rem;
        p {
            padding: 1rem 0rem;
        }
    }
`

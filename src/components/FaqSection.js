import React from 'react'
import styled from 'styled-components'
import { About } from '../styles.js'

const questions = [
    {
        title: 'How do I Start?',
        answer1: 'Lorem ipsum dolor sit amet.',
        answer2: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, libero.',
    },
    {
        title: 'Daily Schedule',
        answer1: 'Lorem ipsum dolor sit amet.',
        answer2: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, libero.',
    },
    {
        title: 'Diferrent Payment Methods',
        answer1: 'Lorem ipsum dolor sit amet.',
        answer2: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, libero.',
    },
    {
        title: 'What Products do you offer.',
        answer1: 'Lorem ipsum dolor sit amet.',
        answer2: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, libero.',
    },
]

export const FaqSection = () => {
    return (
        <Faq>
            <h2>
                Any Question <span> FAQ</span>
            </h2>
            {questions.map((question) => {
                return (
                    <div className="question">
                        <h4>{question.title}</h4>

                        <div className="answer">
                            <p>{question.answer1}</p>
                            <p>{question.answer2}</p>
                        </div>
                        <div className="faq-line"></div>
                    </div>
                )
            })}
        </Faq>
    )
}

const Faq = styled(About)`
    display: block;
    span {
        display: block;
    }
    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
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

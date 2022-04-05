import React from 'react'
import styled from 'styled-components'

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
    return (
        <Faq>
            <h2>
                Any Question <span> FAQ</span>
            </h2>
            {questions.map((question) => {
                return (
                    <div className="question" key={question.key}>
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

const Faq = styled.div`
    min-height: 90vh;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
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

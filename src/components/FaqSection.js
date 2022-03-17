import React from 'react'

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
        <div className="faq">
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
                    </div>
                )
            })}
        </div>
    )
}

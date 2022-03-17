import React from 'react'
//icons
import clock from '../img/clock.svg'
import diaphragm from '../img/diaphragm.svg'
import money from '../img/money.svg'
import teamwork from '../img/teamwork.svg'
import home2 from '../img/home2.png'

const cards = [
    { icon: clock, h3Text: 'Efficient', pText: 'Lorem ipsum dolor sit amet.' },
    { icon: teamwork, h3Text: 'Teamwork', pText: 'Lorem ipsum dolor sit amet.' },
    { icon: diaphragm, h3Text: 'Diaphragm', pText: 'Lorem ipsum dolor sit amet.' },
    { icon: money, h3Text: 'Money', pText: 'Lorem ipsum dolor sit amet.' },
]

export const ServicesSection = () => {
    return (
        <div className="services">
            <div className="desciption">
                <h2>
                    High <span>quality</span> services
                </h2>
                <div className="cards">
                    {cards.map((card) => {
                        return (
                            <div className="card">
                                <div className="icon">
                                    <img src={card.icon} />
                                    <h3>{card.h3Text}</h3>
                                </div>
                                <p className="">{card.pText}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="image">
                <img src={home2} alt="" />
            </div>
        </div>
    )
}

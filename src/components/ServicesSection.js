import React from 'react'
//icons
import clock from '../img/clock.svg'
import diaphragm from '../img/diaphragm.svg'
import money from '../img/money.svg'
import teamwork from '../img/teamwork.svg'
import home2 from '../img/home2.png'

//Styles
import styled from 'styled-components'

const cards = [
    { id: '1', icon: clock, h3Text: 'Efficient', pText: 'Lorem ipsum dolor sit amet.' },
    { id: '2', icon: teamwork, h3Text: 'Teamwork', pText: 'Lorem ipsum dolor sit amet.' },
    { id: '3', icon: diaphragm, h3Text: 'Diaphragm', pText: 'Lorem ipsum dolor sit amet.' },
    { id: '4', icon: money, h3Text: 'Money', pText: 'Lorem ipsum dolor sit amet.' },
]

export const ServicesSection = () => {
    return (
        <Services>
            <CameraImg>
                <img src={home2} alt="" />
            </CameraImg>
            <SeviceDescription>
                <h2>
                    High <span>quality</span> services
                </h2>
                <Cards>
                    {cards.map((card) => {
                        return (
                            <Card key={card.id}>
                                <div className="icon">
                                    <img src={card.icon} alt="" />
                                    <h3>{card.h3Text}</h3>
                                </div>
                                <p className="">{card.pText}</p>
                            </Card>
                        )
                    })}
                </Cards>
            </SeviceDescription>
        </Services>
    )
}

const Services = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
    h2 {
        padding-bottom: 5rem;
    }

    p {
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`

const SeviceDescription = styled.div`
    flex: 1;
    padding-right: 0;
    h2 {
        font-weight: lighter;
    }
`

const CameraImg = styled.div`
    flex: 1;
    padding-right: 2.5rem;
    overflow: hidden;
    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const Card = styled.div`
    flex-basis: 23rem;
    .icon {
        display: flex;
        align-items: center;
        h3 {
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;
        }
    }
`

import React from "react";
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
import { About, Description, Image, Hide } from '../Styles';
import styled from "styled-components";

const ServicesSection = () => {
    return (
        <About>
            <Description>
                <h2>Hige <span>quality</span>services</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img alt='icon' src={clock} />
                            <h3>Eficiant</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img alt='icon' src={diaphragm} />
                            <h3>aficciant</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img alt='icon' src={money} />
                            <h3>Money saver</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt='icon' />
                            <h3>power</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>


                </Cards>
            </Description>
            <Image>
                <img alt='icon' src={home2} />
            </Image>
        </About>
    )
}

const Services = styled(About)`
h2{
    padding-bottom: 5rem;

}
p{
    width: 70vh;
    padding: 2rem 0rem 4rem 0rem;
}
`;
const Cards = styled.div`
padding-top:5rem ;
display: flex;
flex-wrap: wrap;
`;
const Card = styled.div`
flex-basis: 20rem;
.icon{
    display: flex;
    align-items: center;

}
h3{
    margin-left:1rem;
    background: white;
    color: black;
    padding: 1rem;


}
`


export default ServicesSection;
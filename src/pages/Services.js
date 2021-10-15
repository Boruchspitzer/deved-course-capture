import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
//images
import athlete from '../img/athlete-small.png'
import goodtimes from '../img/goodtimes-danilevich-5847900.jpg'
import theracer from '../img/theracer-pexels.jpg'

const Services = () => {
    return (
        <Work>
            <Movie>
                <h2>The athlete</h2>
                <div className="line"></div>
                <Link>
                    <img src={athlete} alt="the athlete" />
                </Link>

            </Movie>
            <Movie>
                <h2>Good times</h2>
                <div className="line"></div>
                <Link>
                    <img src={goodtimes} alt="the good times" />
                </Link>

            </Movie>
            <Movie>
                <h2>The racer</h2>
                <div className="line"></div>
                <Link>
                    <img src={theracer} alt="the racer" />
                </Link>

            </Movie>
        </Work>
    )
}
const Work = styled.div`
color: white;
min-height: 100vh;
overflow: hidden;
padding: 5rem 10rem;
h2{
    padding: 2rem 0rem;

}
.line{
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
}
`;
const Movie = styled.div`
img{
    width: 100%;
    height: 70vh;
    object-fit: cover;
}
`;

export default Services;
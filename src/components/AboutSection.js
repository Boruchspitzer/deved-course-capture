import React from "react";
import home1 from "../img/home1.png";
//styled
import styled from "styled-components";
const AboutSection = () => {
    return (
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>we work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>your <span>dreams</span> come</h2>
                    </Hide>
                    <Hide>
                        <h2>true.</h2>
                    </Hide>
                    <p>contact us for any photography or videography</p>
                    <button>Contact us</button>
                </div>
            </Description>
            <Image>
                <img src={home1} alt="man with camra" />
            </Image>
        </About>

    )
}
const About = styled.div`
min-height: 90vh;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5rem 10rem;
color: white;
`;
const Description = styled.div`
flex: 1;
padding-right:5rem;
h2{
    font-weight: lighter;
}
`;
const Image = styled.div`
flex: 1rem;
overflow: hidden;
img{
    width: 100%;
    height: 80vh;
    object-fit: cover;
}
`;
const Hide = styled.div`
overflow: hidden;
`;
export default AboutSection;
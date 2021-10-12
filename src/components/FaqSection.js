import React from 'react';
import styled from 'styled-components';
import { About } from '../Styles';
const FaqSection = () => {
    return (
        <Faq>
            <h2>Any quastions? <span>FAQ</span></h2>
            <div className="quastion">
                <h4>How do i start?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, quo!</p>
                </div>
            </div>
            <div className="quastion">
                <h4>payment methoods</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, quo!</p>
                </div>
            </div>
            <div className="quastion">
                <h4>What products do you offer?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, quo!</p>
                </div>
            </div>
            <div className="quastion">
                <h4>business hours?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, quo!</p>
                </div>
            </div>
            <div className="quastion">
                <h4>refunds?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, quo!</p>
                </div>
            </div>
        </Faq>
    );
}
const Faq = styled(About)`
display: block;
span{
    display: block;
}
h2{
    padding-bottom: 2rem;
    font-weight: lighter;
}
faq-line{
    background: #cccccc;
    height: 0.2rem;
        
}


`;
export default FaqSection;
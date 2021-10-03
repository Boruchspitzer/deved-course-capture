import React from "react";
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
const ServicesSection = () => {
    return (
        <div className="services">
            <div className="description">
                <h2>Hige <span>quality</span>services</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img alt='icon' src={clock} />
                            <h3>Eficiant</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img alt='icon' src={diaphragm} />
                            <h3>aficciant</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img alt='icon' src={money} />
                            <h3>Money saver</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={teamwork} alt='icon' />
                            <h3>power</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>


                </div>
            </div>
            <div className="image">
                <img alt='icon' src={home2} />
            </div>
        </div>
    )
}
export default ServicesSection;
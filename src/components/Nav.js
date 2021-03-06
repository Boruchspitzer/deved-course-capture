import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <StyledNav>
            <h1 ><Link id='logo' to="/">Capture</Link></h1>
            <ul>
                <li><Link to="/aboutus">.1 About us</Link></li>
                <li><Link to="/services">.2 Services</Link></li>
                <li><Link to="/Contactus">.3 Contact us</Link></li>
            </ul>
        </StyledNav>
    )
}
const StyledNav = styled.div`
min-height: 10vh;
display: flex;
margin: auto;
justify-content: space-between;
align-items: center;
padding: 1rem 10rem;
background: #282828;
a{
    color: white;
    text-decoration: none;
    font-size: 2rem;
}
ul{
    display: flex;
}
h1{
    font-family: 'lobster',cursive;
    font-weight: lighter;
}
li{
    padding-left: 10rem;
    position: relative;
}
`
export default Nav;
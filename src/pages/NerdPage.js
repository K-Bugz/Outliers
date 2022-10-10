import React from "react";
import '../App.css';
import Footer from "../components/Footer";
import styled from "styled-components";

function NerdPage() {
    return (
        <div>
            <TopBanner>Welcome to the Nerd Page!</TopBanner>

            <Footer/>
        </div>
    )
}

const TopBanner = styled.div`
    background-color: greenyellow;
    font-size: 32px;
    height: 80px;
    line-height: 70px;
    text-align: center;
    border: 3px solid green;
`

export default NerdPage;
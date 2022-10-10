import React from "react";
import '../App.css';
import Footer from "../components/Footer";
import styled from "styled-components";

function SportsPage() {
    return (
        <div>
            <TopBanner>SportsPage</TopBanner>
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

export default SportsPage;
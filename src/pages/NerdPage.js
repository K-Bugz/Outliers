import React from "react";
import '../App.css';
// import styled from "styled-components";
import TopBanner from '../components/TopBanner'

function NerdPage() {
    return (
        <div>
            <TopBanner text= 'Welcome to the AboutPage!'/>
        </div>
    )
}

// const TopBanner = styled.div`
//     background-color: greenyellow;
//     font-size: 32px;
//     height: 50px;
//     line-height: 50px;
//     text-align: center;
//     border: 3px solid green;
// `

export default NerdPage;
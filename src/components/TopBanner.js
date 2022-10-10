import React from "react";
import styled from "styled-components";
import '../App.css';

function TopBanner(text) {
    return (
        <React.Fragment>
            <TopBannerContainer>
            Welcome to Outliers! Were we love the strange and unique.
            </TopBannerContainer>
        </React.Fragment>
    )
}


const TopBannerContainer = styled.div`
    background-color: #4bff1f;
    font-size: 32px;
    height: 80px;
    line-height: 70px;
    text-align: center;
    border: 3px solid #edd698;
`

export default TopBanner;
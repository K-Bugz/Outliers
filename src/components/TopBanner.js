import React from "react";
import styled from "styled-components";
import '../App.css';

function TopBanner(props) {
    const {text} = props
    return (
        <React.Fragment>
            <TopBannerContainer>
                {text}
            </TopBannerContainer>
        </React.Fragment>
    )
}


const TopBannerContainer = styled.div`
    background-color: #000000;
    color: #edd698;
    font-size: 32px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border: 3px solid #edd698;
`

export default TopBanner;
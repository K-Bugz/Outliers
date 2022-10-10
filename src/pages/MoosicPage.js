import React from "react";
import '../App.css';
import Footer from "../components/Footer";
import SoundBoardModal from "../components/modals/SoundBoardModal";
import styled from "styled-components";
// import {Howl, Howler} from 'Howler';

function MoosicPage() {

    const handleCowClick = async (e) => {
        console.log('meow')
        
        ('https://www.myinstants.com/en/instant/cow-moo/?utm_source=copy&utm_medium=share');
    };

    return (
        <div>
            <TopBanner>
                Moo-sic
            </TopBanner>
                <CowImg src={require('../images/cow1.png')} onClick={handleCowClick} 
                width="100" height="90" alt="Moo-sic Logo"></CowImg>
                {/* <ReactAudioPlayer src="'https://www.myinstants.com/en/instant/cow-moo/?utm_source=copy&utm_medium=share'" autoPlay controls/> */}
                <SoundBoardModal></SoundBoardModal>
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
const CowImg = styled.img`
    position: absolute;
    top: 11%;
    left: 41.5%;
`


export default MoosicPage;
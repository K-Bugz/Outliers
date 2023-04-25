import React from "react";
import '../App.css';
import SoundBoard from "../components/SoundBoard";
import TopBanner from '../components/TopBanner'
import styled from "styled-components";
import cowSound from '../images/cow-moo.mp3';

function MoosicPage() {

    const handleCowClick = async (e) => {
        console.log('Mooooooo!!!!!!')
        const audio = new Audio(cowSound);
        audio.play();
    };

    return (
        <div>
            <TopBanner text= 'Moo-sic'/>
                <CowImg className="mooCow" src={require('../images/cow1.png')} onClick={handleCowClick} width="100" height="90" alt="Moo-sic Logo"></CowImg>
                <SoundBoard/>
        </div>
    )
}

const CowImg = styled.img`
    
`


export default MoosicPage;
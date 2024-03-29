import React from "react";
import styled from "styled-components";

function SoundBoard({ closeModal }) {

    const mySounds  = [
        {id:1, src:"https://www.myinstants.com/instant/windows-xp-error-music/embed/"},
        {id:2, src:"https://www.myinstants.com/instant/pumped-up-kicks-remix/embed/"},
        {id:3, src:"https://www.myinstants.com/instant/thug-life-instrumental/embed/"},
    ]

    return(
        <Container>
            <div className="modalContainer">

                <div className="title">Sound Board!!!!</div>
                {mySounds.map((sound) => {
                    return (
                        <iframe title={sound.id} width="110" height="200" frameborder='0' scrolling='no' 
                        src={sound.src} ></iframe>
                    )
                    })}
            </div>
        </Container>
    )
}

const Container = styled.div`
  width: 100vw;
  height: 40vh;
  background-color: rgba(200, 200, 200);
  display: flex;
  justify-content: center;
  align-items: center;
`


export default SoundBoard;
import React from "react";
import styled from "styled-components";
import Modal from 'react-modal'; 


function SimpleModal({ closeModal }) {

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };

    return(
        <ModalBackground>
            <Modal className="modalContainer"
                    // onAfterOpen={afterOpenModal}
                    // onRequestClose={closeModal}
                    style={customStyles}
                >
                <button onClick={()=> closeModal(false)}> Go back! </button>
                <div className="title"></div>
                <h1>Welcome to Outlier!!!! </h1>
                <div className="body">
                    <p>A website all about the unique and odd!</p>
                </div>
                <div className="footer">
                    <button onClick={()=> closeModal(false)}>Go Back!</button>
                </div>
                
            </Modal>
        </ModalBackground>
    )
}

const ModalBackground = styled.div`
  width: 100vw;
  height: 40vh;
  background-color: rgba(200, 200, 200);
  display: flex;
  justify-content: center;
  align-items: center;
`


export default SimpleModal;
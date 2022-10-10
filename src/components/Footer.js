import React from "react";
import styled from 'styled-components';

function Footer() {
  return (
    <Container>
      <h1>This is footer</h1>
    </Container>
  );
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    padding: 20px;
    width: 100%;
    border-top: 5px;
    border-color: springgreen;
    box-sizing: border-box;
    background-color: black;
    color: white;
    position:fixed;
    bottom:0;
    left:0;
    height: 90px;
`

export default Footer;
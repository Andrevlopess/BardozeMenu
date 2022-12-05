import React from "react";
import styled, { keyframes } from "styled-components";
import { Keyframes } from "styled-components";
import LightTheme from "../../Themes/LightTheme";

const Container = styled.div`
 display: flex;
  justify-content: center;
  margin-top:60px;
  
  & div:nth-child(2) {
  animation-delay: 0.2s;
 } 

  & div:nth-child(3) {
  animation-delay: 0.4s;
 }
`
const bouncingLoader = keyframes`
 to {
    opacity: 0.1;
    transform: translateY(-16px);
  }
`
const Dots = styled.div`
 width: 16px;
  height: 16px;
  margin: 3px 6px;
  border-radius: 50%;
  background-color: ${LightTheme.color.primary.contrastText};
  opacity: 1;
  animation: ${bouncingLoader} 0.6s infinite alternate;
`



const DotsAnimation = (props) => {
    return (
        <Container>
            <Dots></Dots>
            <Dots></Dots>
            <Dots></Dots>
        </Container>
    );
};

export default DotsAnimation;
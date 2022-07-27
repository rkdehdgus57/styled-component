import React from "react";
import styled from "styled-components";

export default function StyledComponentsExample() {
    const Title = styled.h1`
        font-size: 1.5em;
        text-align: center;
        color: palevioletred;
    `

    const Wrapper = styled.section`
        padding: 4em;
        background: papayawhip;
    `

    const Button = styled.button`
      /* Adapt the colors based on primary prop */
      background: ${props => props.primary ? "palevioletred" : "white"};
      color: ${props => props.primary ? "white" : "palevioletred"};
      
      font-size: 1em;
      margin: 1em;
      padding: 0.25em 1em;
      border: 2px solid palevioletred;
      border-radius: 3px;
    `;

    return (
        <>
            <Wrapper>
                <Title>Hello World!</Title>
            </Wrapper>
            <Button onClick={() => alert('normal')}>Normal</Button>
            <Button primary onClick={() => alert('primary')}>Primary</Button>
        </>
    )
}

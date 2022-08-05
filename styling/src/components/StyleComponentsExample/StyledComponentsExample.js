import React from "react";
import styled from "styled-components";

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

const TomatoButton = styled(Button)`
      color: tomato;
      border-color: tomato;
    `;

const Input = styled.input.attrs((props) => ({
    type: "text",
    size: props.size || "1em",
}))`
  border: 2px solid palegoldenrod;
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

export default function StyledComponentsExample() {

    const reversedButton = props => <Button {...props} children={props.children.split('').reverse()}/>

    return (
        <>
            <Input placeholder={"A bigger text input"} size={"2em"} />
            <Wrapper>
                <Title>Hello World!</Title>
            </Wrapper>
            <Button onClick={() => alert('normal')}>Normal</Button>
            <Button primary onClick={() => alert('primary')}>Primary</Button>
            <TomatoButton>Tomato</TomatoButton>
            <br/>
            <Button as={"a"} href={"#"}>
                Link with Button styles
            </Button>
            <TomatoButton as={"a"} href={"#"}>
                Link with Tomato Button styles
            </TomatoButton>
            <br/>
            <Button as={reversedButton}>
                Custom Button with Normal Button styles
            </Button>
        </>
    )
}

/***
 Automatic critical CSS : 자동 style injects & 코드 스플릿
 No class name bugs: unique / overlap x / misspellings
 Easier deletion of CSS: tied to a specific component
 Simple dynamic styling: props / global theme
 Painless maintenance: styling affecting your component
 Automatic vendor prefixing: current standard only
 ***/

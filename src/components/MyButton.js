import React from "react";
import styled from "styled-components";

const MyButton = (props) => { // Define the props passed to the component
    // JJ - I Think that is better use destructuring to pass props
    return <Button isActive={props.isActive}>Click me!</Button>; // Pass the     prop to the styled button
};

export default MyButton;

// Style your button. Learn about conditional styling in the Styles and Props section
const Button = styled.button`
    background: ${ props => props.isActive ? "linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%)" : "grey"};
    padding: 12px 0;
    width: 200px;
    border: none;
    border-radius: 30px;
    color: white;
    font-weight: bold;
    font-family: Segoe UI, sans-serif;
`;
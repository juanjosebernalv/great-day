import React from 'react';
import useInput from '../hooks/useInput';
import styled from "styled-components";

const Form = () => {
    const email = useInput('');
    const password = useInput('');

    const submitForm = event => {
        event.preventDefault();
        console.log('email', email.value);
        console.log('password', password.value);
    }
    return (
        <FormWrapper onSubmit={submitForm}>
            <Title>Sign in</Title>
            <Input placeholder="Email" value={email.value} onChange={email.onChange}/>  {/* Method 1, passing each property */}
            <Input placeholder="Password" type="password" {...password}/> {/* Method 2, (Better) destructuring hook */}
            <Button type="submit">Sign in</Button>
        </FormWrapper>
    );
};

export default Form;

const FormWrapper = styled.form`
    display: grid;
    justify-content: center;
    gap: 20px;
    padding-bottom: 50px;
`;

const Title = styled.h1`
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 48px;
    color: blueviolet;
    text-align: center;
`;

const Input = styled.input`
    background: rgba(255, 255, 255, 0.2);
    border-radius: 30px;
    padding: 10px 20px;
    background-blend-mode: overlay;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0px 20px 40px rgba(31, 47, 71, 0.25), 0px 1px 5px rgba(0, 0, 0, 0.1), inset 0 0 0 0.5px rgba(255, 255, 255, 0.4);
    border: 1px solid rgba(0, 0, 0, 0.4);

    :focus {
        outline: none;
        border: 2px solid rgba(0, 255, 0, 0.4);
    }
`;

const Button = styled.button`
    background: linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%);
    padding: 12px 0;
    width: 200px;
    border: none;
    border-radius: 30px;
    color: white;
    font-weight: bold;
    font-family: Segoe UI, sans-serif;
    cursor: pointer;
    :focus {
        outline: none;
        border: 2px solid rgba(0, 255, 0, 0.4);
    }
    :hover {
        border: 1px solid rgba(255, 255, 0, 0.4);
        transform: translateX(10px);
    }
`;
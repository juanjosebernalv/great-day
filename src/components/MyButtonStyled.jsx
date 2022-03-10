import { useEffect, useState } from 'react';
import styled from "styled-components";

const MyButtonStyled = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        // Mounting

        return () => {
            // Cleanup function
            document.title = `You clicked ${count} times.`
        }
    }, [//Updating
    count
    ])

    return (
    <div>
        <Button onClick={() => setCount(count + 1)} >You Clicked {count} times</Button>
        <Button disabled>Sign in</Button>
    </div>
    )
};

export default MyButtonStyled;

const Button = styled.button`
  background: ${(props) =>
        props.disabled
        ? "grey"
        : "linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%)"};
  padding: 12px 0;
  width: 200px;
  border: none;
  border-radius: 30px;
  color: white;
  font-weight: bold;
  font-family: Segoe UI, sans-serif;
  cursor: pointer;
`;
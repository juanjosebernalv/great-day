import styled from "styled-components";

const MyButtonStyled = () => {
    return (
    <div>
        <Button>Sign in</Button>
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
`;
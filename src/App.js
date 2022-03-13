import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Menu from './components/Menu';
import MyPage from './components/MyPage';
import MyPageIntersectionObs from './components/MyPageIntersectionObs';
import Form from './Forms/Form';


const App = () => {
    const [advice, setAdvice] = useState("");

    useEffect(() => {
        const url = "https://api.adviceslip.com/advice";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json.slip.advice);
                setAdvice(json.slip.advice);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    return (
        // <Wrapper>
        //   <Menu></Menu>
        // </Wrapper>
        <>
            <Form></Form>
            <MyPage></MyPage>
            <MyPageIntersectionObs></MyPageIntersectionObs>
        </>
    );
};

export default App;

const Wrapper = styled.div`
    background-color: blueviolet;
`;

const Paragraph = styled.h2`
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 48px;
    text-align: center;
`;
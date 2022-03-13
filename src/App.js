import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from './components/Button';
import Menu from './components/Menu';
import MyPage from './components/MyPage';
import MyPageIntersectionObs from './components/MyPageIntersectionObs';
import Subtitle from './components/Subtitle';
import Form from './Forms/Form';
import { ThemeProvider } from './ThemeContext';

import backgroundImage from "./background.png";
import Dashboard from "./components/Dashboard";


const App = () => {
    return (
        <Wrapper>
            <Background src={backgroundImage} alt="background" />
            <Title>Fragments</Title>
            <Dashboard />
        </Wrapper>
    );
};

export default App;

const Wrapper = styled.div`
  padding-top: 150px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;
  text-align: center;
`;

const Background = styled.img`
  position: absolute;
  width: 100%;
  top: 0px;
  z-index: -1;
`;
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
import LazyLoad from "react-lazyload";


const App = () => {
    return (
        <Wrapper>
            <Background src={backgroundImage} alt="background" />
            <Title>Lazy Load</Title>
            <LazyLoad offset={100} height={200}>
                <Image src="https://images.ctfassets.net/ooa29xqb8tix/2KiUooJBmI26N6u5gr2rlm/e2bb070640fe2778e1a58d160335cbe7/React_Hooks_handbook_800x600_cover_new.png?w=400&q=50" />
            </LazyLoad>
            <LazyLoad offset={100} height={200} >
                <Image src="https://images.ctfassets.net/ooa29xqb8tix/2KiUooJBmI26N6u5gr2rlm/e2bb070640fe2778e1a58d160335cbe7/React_Hooks_handbook_800x600_cover_new.png?w=400&q=50" />
            </LazyLoad>
            <LazyLoad offset={-100} height={200}>
                <Image src="https://images.ctfassets.net/ooa29xqb8tix/2KiUooJBmI26N6u5gr2rlm/e2bb070640fe2778e1a58d160335cbe7/React_Hooks_handbook_800x600_cover_new.png?w=400&q=50" />
            </LazyLoad>
            {/* <Dashboard /> */}
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

const Image = styled.img`
  height: 200px;
  margin: 20px;
`;


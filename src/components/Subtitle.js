// Subtitle.js

import React from "react";
import styled from "styled-components";
import useTheme from "../ThemeContext";

const Subtitle = () => {
  const { theme } = useTheme();
  return (
    <MySubtitle color={theme.foreground}
    background={theme.background}>
        My current theme is {theme.background === "#eeeeee" ? "light" : "dark"}
    </MySubtitle>
  );
};

export default Subtitle;

const MySubtitle = styled.p`
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  font-weight: bold;
  font-family: Segoe UI, sans-serif;
`;
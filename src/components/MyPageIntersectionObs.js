import React, { useRef } from 'react';
import styled from "styled-components";
import useOnScreen from '../hooks/useOnScreen';

const MyPageIntersectionObs = () => {
    const ref = useRef(null);
    const isVisible = useOnScreen(ref);

    console.log(isVisible);

    return (
        <Wrapper ref={ref}>
        <Image
            isVisible={isVisible}
            src="https://images.ctfassets.net/ooa29xqb8tix/3PHS4tm6Xw2BEZ1WWIjwnk/24fa4d723fb257dcf480b2e487afef42/React_Hooks_handbook_200x150_cover_new.svg"
        />
        </Wrapper>
    );
};

export default MyPageIntersectionObs;

const Wrapper = styled.div`
  margin: 0 auto;
`;

const Image = styled.img`
  transition: 3s cubic-bezier(0.075, 0.82, 0.165, 1);
	display: ${(props) => (props.isVisible ? "static" : "none")};
  animation: ${(props) => props.isVisible && "scale 5s 1"};

  @keyframes scale {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.2;
    }
    100% {
      opacity: 1;
    }
  }
`;
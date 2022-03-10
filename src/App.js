import logo from './logo.svg';
import styled from "styled-components";
import './App.css';
import MyButtonComponent from './components/MyButtonComponent';
import MyButtonStyled from './components/MyButtonStyled';
import MyCard from './components/MyCard';
import NotificationCard from './components/NotificationCard';

import { menuData } from "./data/menuData";
import NavigationButton from "./components/NavigationButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <p>
          Hello World - Juan Jose.🏍️
        </p> */}
        {/* <MyButtonComponent></MyButtonComponent> */}
        <Wrapper>
            <ButtonsWrapper>
                {menuData.map((data) => {
                    return <NavigationButton image={data.image} title={data.title} />;
                })}
            </ButtonsWrapper>
        </Wrapper>

        <MyButtonStyled></MyButtonStyled>
        <MyCard></MyCard>
        <NotificationCard></NotificationCard>
      </header>
    </div>
  );
}

export default App;


const Wrapper = styled.div`
    padding-top: 150px;
    margin: 0 auto;
`;

const ButtonsWrapper = styled.div`
    display: flex;
    justify-items: space-between;
    justify-content: center;
`;
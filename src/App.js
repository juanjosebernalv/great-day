import logo from './logo.svg';
import './App.css';
import MyButtonComponent from './components/MyButtonComponent';
import MyButtonStyled from './components/MyButtonStyled';
import MyCard from './components/MyCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <p>
          Hello World - Juan Jose.🏍️
        </p> */}
        {/* <MyButtonComponent></MyButtonComponent> */}
        <MyButtonStyled></MyButtonStyled>
        <MyCard></MyCard>
      </header>
    </div>
  );
}

export default App;

import logo from './logo.png';
import './App.css';
import LandingPage from './landingPage/landingPage1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LandingPage/>
      </header>
    </div>
  );
}

export default App;

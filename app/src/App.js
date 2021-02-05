import logo from './logo.svg';
import './App.css';
import Pantry from './Pantry'

const HEADING = 'Welcome to Recipeasy! Get Started Here.';

function Header() {
  return (
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h2>{HEADING}</h2>
  </header>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <Pantry className="Pantry"/>
    </div>
  );
}

export default App;

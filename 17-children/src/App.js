import './App.css';
import Wrapper from './components/Wrapper';

function App() {
  return <div className="App">
    <Wrapper backgroundColor="green" fontSize="40px">
      <h2>The children inside of wrapper</h2>
      <button type="text">Hi Children!!!</button>
    </Wrapper>
    <Wrapper backgroundColor="blue">
      <h2>The children inside of wrapper</h2>
    </Wrapper>
  </div>;
}

export default App;

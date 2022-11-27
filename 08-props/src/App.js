import './App.css';
import Petinfo from './components/Petinfo';

function App() {
  return (
    <div className="App">
      <Petinfo animal='Murka' age={4} />
      <Petinfo animal='Torry' age={10} />
    </div>
  );
}

export default App;
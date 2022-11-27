import './App.css';
import Petinfo from './components/Petinfo';

function App() {
  return (
    <div className="App">
      <Petinfo animal='Murka' age={4} hasPet />
        {/* <Petinfo animal='Torry' age={10} />  */}
        <Petinfo animal='Torry' age={10} hasPet={false} /> 
    </div>
  );
}

export default App;
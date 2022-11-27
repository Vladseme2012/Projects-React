import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Button from './components/Button';
import ResetButton from './components/ResetButton';

function App() {
  const [count, setCount] = useState(0);
  const buttonStyle = { backgroundColor: 'lightgreen' };
  const incrementCount = () => {
    return setCount(count + 1);
  };

  const resetCounter = () => {
    return setCount(0);
  };

  return (
    <div className="App">
      <Counter count={count} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      {!!count && <ResetButton style={buttonStyle} onClick={resetCounter} />}
    </div>
  );
}

export default App;

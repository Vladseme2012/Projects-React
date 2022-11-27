import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Button from './components/Button';

const namesButtons = [
  'Click me!',
  'Click !',
  'My button!',
  'Clicker',
  'Cliick me again',
  'Push'
];

function App() {
  const [count, setCount] = useState(2);
  const incrementCount = () => {
    return setCount(count + 1);
  };

  return (
    <div className="App">
      <Counter count={count} />
      {/* <Button nameButton={namesButtons[0]} onClick={incrementCount} />
      <Button nameButton={namesButtons[1]} onClick={incrementCount} />
      <Button nameButton={namesButtons[2]} onClick={incrementCount} />
      <Button nameButton={namesButtons[3]} onClick={incrementCount} /> */}
      {namesButtons.map((nameButton) => {
        return <Button onClick={incrementCount} name={nameButton} key={nameButton} />;
      })}
    </div>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import About from './components/page1';
import Information from './components/page2';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />} path="/layout" />
        <Route element={<About />} path="/about" />
        <Route element={<Information />} path="/information" />
      </Routes>
    </div>
  );
}

export default App;

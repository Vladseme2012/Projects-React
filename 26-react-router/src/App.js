import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Components/About';
import Contacts from './Components/Contacts';
import NotFound from './Components/NotFound';
import Courses from './Components/Courses';
import SingleCourse from './Components/SingleCourse';
import MainLayout from './Components/Layouts/MainLayout';
import './App.css';
import Home from './Components/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index={true} element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:courseSlag" element={<SingleCourse />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

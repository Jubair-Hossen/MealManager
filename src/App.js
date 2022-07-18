import logo from './logo.svg';
import './App.css';
import Navigation from './Component/Navigation';
import { Route, Routes } from 'react-router-dom';
import Meals from './Pages/Meals';
import Home from './Pages/Home/Home';
function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/meals' element={<Meals />} />
      </Routes>
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Navigation from './Component/Navigation';
import { Route, Routes } from 'react-router-dom';
import Meals from './Pages/Meals';
import Home from './Pages/Home/Home';
import BajarCost from './Pages/BajarCost/BajarCost';
import Members from './Pages/Members/Members';
function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mealcost' element={<BajarCost />} />
        <Route path='/members' element={<Members />} />
        <Route path='/meals' element={<Meals />} />
      </Routes>
    </>
  );
}

export default App;

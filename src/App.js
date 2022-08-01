import logo from './logo.svg';
import './App.css';
import Navigation from './Component/Navigation';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import BajarCost from './Pages/BajarCost/BajarCost';
import Members from './Pages/Members/Members';
import Deposite from './Pages/Deposite/Deposite';
import SignUp from './Pages/SignUp/SignUp';
import SignIn from './Pages/SignIn/SingIn';
import RequireLogIn from './Component/RequireLogIn';
function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<RequireLogIn>
          <Home />
        </RequireLogIn>} />
        <Route path='/mealcost' element={<RequireLogIn>
          <BajarCost />
        </RequireLogIn>} />
        <Route path='/members' element={<RequireLogIn>
          <Members />
        </RequireLogIn>} />
        <Route path='/deposite' element={<RequireLogIn>
          <Deposite />
        </RequireLogIn>} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;

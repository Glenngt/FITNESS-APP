import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FitHome from './components/FitHome';
import Register from './components/Register';
import FitLogin from './components/FitLogin';
import Exercises from './components/Exercises';

function App() {
  return (

    <BrowserRouter>
    
          <Routes>

              <Route path='' element={<FitHome/>} />
              <Route path='/register' element={<Register/>} />
              <Route path='/login' element={<FitLogin/>} />
              <Route path='/exercise' element={<Exercises/>} />

          </Routes>

    </BrowserRouter>

  );
}

export default App;

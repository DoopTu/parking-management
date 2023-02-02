import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import { ToastContainer } from 'react-toastify';
import ForgottenPwd from './components/Forgotten-pwd';

function App() {
  return (
    <div className="App">
      <ToastContainer theme='colored' position='top-right'></ToastContainer>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/Forgotten-pwd' element={<ForgottenPwd/>}></Route>
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;

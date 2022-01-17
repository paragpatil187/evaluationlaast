import { Navbar } from './components/Navbar';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import {Home} from "./components/Home";
import {Login} from "./components/Login";
import {Admin} from "./components/Admin";
import {UserLogin} from "./components/UserLogin"
import { PrivateRoute } from './components/PrivateRoute';
import {Jobs} from "./components/Jobs"
function App() {
  return (
    <>
    <div className="App">
      <Navbar/>
      </div>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/admin" element={<PrivateRoute><Admin/></PrivateRoute>}></Route>
      <Route path="/jobs" element={<PrivateRoute><Jobs/></PrivateRoute>}></Route>
      <Route path="/userlogin" element={<UserLogin/>}></Route>

      </Routes>
    
    </>
  );
}

export default App;

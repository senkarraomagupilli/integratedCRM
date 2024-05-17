import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Signin from './components/Signin';
import TAteam from './components/TAteam';
import HRteam from './components/HRteam';
import HRhead from './components/HRhead';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/ta" element={<TAteam />} />
      <Route path="/hrteam" element={<HRteam />} />
      <Route path="/hrhead" element={<HRhead />} />
    </Routes>
  );
}

export default App;

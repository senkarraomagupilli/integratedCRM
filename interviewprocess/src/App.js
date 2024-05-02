import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Signin from './components/Signin';
import TA from './components/TA';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/ta" element={<TA />} />
    </Routes>
  );
}

export default App;

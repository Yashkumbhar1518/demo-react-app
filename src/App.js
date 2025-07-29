import "./App.css";
// import Login from './components/Login/Login';
import Register from "./components/Register/Register";
import Store from "./components/Context/Store";
// import ShivamLogin from './components/ShivamLogin';
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { Mycontext } from "./components/Context/Mycontext";
import Home from "./components/Home";
import Middlepage from "./components/Middle/Middlepage";
import OurServices from "./components/OurServices";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import Modal from "./components/Modal";

// import Login from "./components/Login/Login";


function App() {
  const { welcome } = useContext(Mycontext);
  console.log(welcome)
  return (
    <div>
    <BrowserRouter>
      {welcome ? <Navbar /> : null}
        <Toaster />
        
      <Routes>
          <Route path="/" element={<Register/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/home" element={<Home/>}/>
          <Route path="/service" element={<OurServices/>}/>
          <Route path="/contact" element={<Footer/>}/>
          <Route path='/card' element={<Modal/>}></Route>
          <Route exact path='/card/Electrician' element={<Modal service='Electrician'/>}></Route>
          <Route path='/card/Painting' element={<Modal service='Painter'/>}></Route>
          <Route path='/card/Carpenter' element={<Modal service='Carpenter'/>}></Route>
          <Route path='/card/Flooring' element={<Modal service='Flooring'/>}></Route>
          <Route path='/card/Cleaning' element={<Modal service='Cleaning'/>}></Route>
          <Route path='/card/Plumbing' element={<Modal service='Plumbing'/>}></Route>
          <Route path='/card/Remodeling' element={<Modal service='Remodeling'/>}></Route>
          <Route path='/card/Water Proofing' element={<Modal service='Water Proofing'/>}></Route>
      </Routes>
      
        
    </BrowserRouter>
    </div>
  );
}

export default App;

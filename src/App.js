// import logo from './logo.svg';
import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
// import Login from './pages/login';
// import Navbar from './pages/navbar';
// import Page1 from './pages/page1';
// import Page2 from './pages/page2';
// import Page3 from './pages/page3';
import Home from "./home";
// import About from "./pages/about";
import Navbar from "./pages/navbar";
import Login from "./pages/login";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import SignIn from "./pages/sign in";
import Footer from "./pages/footer";
import Content from "./pages/content";
import Address from "./pages/address";
import Contact from "./pages/contact";
import Service from "./pages/service";
import Pay from "./pages/pay";

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/content" element={<Content/>} />
        {/* <Route path="/service" element={<Service/>} /> */}
        <Route path="/contact" element={<Contact/>} />
        <Route path="/address" element={<Address/>} />
        <Route path="/pay" element={<Pay/>} />
        <Route path="/page1" element={<Page1/>} />
        <Route path="/page2" element={<Page2/>} />
        <Route path="/page3" element={<Page3/>} />
        <Route path="/footer" element={<Footer/>} />
      </Routes>
    </div>

  );
}

export default App;

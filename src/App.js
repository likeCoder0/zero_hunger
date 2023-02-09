import React from "react";
import "./App.css";
import { Routes, Route, Router } from "react-router-dom";
import Home from "./home";
import Navbar from "./pages/navbar";
import Login from "./pages/login";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import SignIn from "./pages/sign_in";
import Footer from "./pages/footer";
import Content from "./pages/content";
import Address from "./pages/address";
import Contact from "./pages/contact";
import Pay from "./pages/pay";
import Protect_routes from "./utils/protect_routes";
import { UserAuthContextProvider } from "./context/UserAuthContext";

function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
      <Routes>
          <Route path="/home" element={<Protect_routes>
                    <Home />
                  </Protect_routes>} />
          <Route path="/navbar" element={<Protect_routes><Navbar /></Protect_routes>} />
          <Route path="/content" element={<Protect_routes><Content /></Protect_routes>} />
          <Route path="/contact" element={<Protect_routes><Contact /></Protect_routes>} />
          <Route path="/address" element={<Protect_routes><Address /></Protect_routes>} />
          <Route path="/pay" element={<Protect_routes><Pay /></Protect_routes>} />
          <Route path="/page1" element={<Protect_routes><Page1 /></Protect_routes>} />
          <Route path="/page2" element={<Protect_routes><Page2 /></Protect_routes>} />
          <Route path="/page3" element={<Protect_routes><Page3 /></Protect_routes>} />
          <Route path="/footer" element={<Protect_routes><Footer /></Protect_routes>} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Login />} />
      </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;

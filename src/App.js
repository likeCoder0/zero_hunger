import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
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
import Cooked from "./pages/cooked";
import Grocery from "./pages/grocery";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";
import OrdersPage from "./pages/ViewOrder";
import ViewOrderDetails from "./pages/ViewOrderDetail";
import DashBoard from "./pages/DashBoard";

function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
      <Routes>
          <Route path="/navbar" element={<Protect_routes><Navbar /></Protect_routes>} />
          <Route path="/home" element={<Protect_routes><Home /></Protect_routes>} />
          <Route path="/dashBoard" element={<Protect_routes><DashBoard /></Protect_routes>} />
          <Route path="/list" element={<Protect_routes><ListPage /></Protect_routes>} />
          <Route path="/food/orders" element={<Protect_routes><OrdersPage /></Protect_routes>} />
          <Route path="/food/orders/:foodId" element={<Protect_routes><ViewOrderDetails /></Protect_routes>} />
          <Route path="/food/view/:foodId" element={<Protect_routes><DetailPage /></Protect_routes>} />
          <Route path="/cooked" element={<Protect_routes><Cooked /></Protect_routes>} />
          <Route path="/grocery" element={<Protect_routes><Grocery /></Protect_routes>} />
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

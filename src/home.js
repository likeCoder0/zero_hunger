import React from 'react'
import Content from './pages/content';
import Footer from './pages/footer';
// import Login from './pages/login';
// import {  Link } from "react-router-dom";
import Navbar from './pages/navbar';

const Home = () => {
  return (
    <>
    <Navbar/>
    <Content></Content>
    <Footer></Footer>
    </>
    )
}

export default Home;

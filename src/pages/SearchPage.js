import React from 'react'
import Navbar from './navbar';
import { Link } from "react-router-dom";

const SearchPage = () => {
  return (<>
   <Navbar></Navbar>
   <div className='search_page'>
    <div id="cover">
  <form className='search_form' method="get" action="">
    <div class="tb">
      <div class="td"><input className='search_input' type="text" placeholder="Search address" required/></div>
      <div class="td" id="s-cover">
      <Link to="/list">
        <button className='search_button' type="submit">
          <div id="s-circle"></div>
          <span></span>
        </button></Link>
      </div>
    </div>
  </form>
  </div>
</div></>
  )
}

export default SearchPage;
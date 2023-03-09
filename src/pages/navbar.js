import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GrLocation } from 'react-icons/gr';
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";

const Navbar = () => {
  const { logOut } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  const [show, setShow] = useState(false);

  return (
    <>
      <section className="navbar-bg">
        <nav class="navbar navbar-expand-lg navbar-light ">
          <div class="container">
            <Link class="navbar-brand" href="#">
              Zero Hunger
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}>
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/home">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/page1">
                    Donate
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/search">
                    Search
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/address">
                  <GrLocation /> Select your address
                  </Link>
                </li>
                {/* <li class="nav-item">
                  <Link class="nav-link" to="/service">
                    Services
                  </Link>
                </li> */}
                <li class="nav-item">
                  <Link class="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
              <form class="d-flex">
                <button class="btn  btn-style" type="submit" onClick={handleLogout}>
                  Log out
                </button>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;

import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="left-container text-start">
                <h1>TravRio</h1>
                {/* <div className="icons-container d-flex text-center ">
                 
                </div> */}
                <p className="mt-3 text-xl-start">
                  <small>
                    Email:<br/>najnin@gmail.com
                  </small>
                </p>
                <p className="mt-3">
                  <small>
                    Call:<br/>9185768538583
                  </small>
                </p>

                {/* <p className="mt-3">
                  <small>naz © . All rights reserved.</small>
                </p> */}
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu-container">
              
                <ul className="text-xl-start">
                <h6>Navigations</h6>
                  <li className="footer-menu">Home Page</li>
                  <li className="footer-menu">Services</li>
                  <li className="footer-menu">Therapist</li>
                  <li className="footer-menu">Contact us</li>
                  <li className="footer-menu"> About us</li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu-container">
                <ul className="text-xl-start">
                  <h6>My Accounts</h6>
                  <li className="footer-menu">Dashboard</li>
                  <li className="footer-menu">Applications</li>
                  <li className="footer-menu">Packages</li>
                  <li className="footer-menu">SignUp Page</li>
                  <li className="footer-menu"> About us</li>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="right-footer-container">
                <h3>Sign up for the newsletter</h3>
                <input
                  className="footer-input"
                  type="text"
                  placeholder="Enter Email"
                />
                <div className="phone d-flex align-items-center justify-content-center mt-4">
                 
                  <div>
                    <h5>+1 8 800 555 35 35</h5>
                  </div>
                </div>
                <div className="map d-flex align-items-center justify-content-center">
                 
                  <div>
                    <p>
                      Motijil, Dhaaka, Bangladesh,
                      <br /> 102 1st Avenue, Dhaka NY 100
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2">
                  <h5>© 2020 TravRio. Designd By naz. All Rights Reserved</h5>
                </div>
    </div>
  );
};

export default Footer;
/* eslint-disable prettier/prettier */
import React from 'react';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import Footer from 'examples/Footer';
import "./SignUp.css";
// import {Link} from "react-router-dom";

function SignUp() {
  return(
      <>
       <DashboardLayout>
      <DashboardNavbar />
      <div className="create-page-signUp">
        <div className="container">
          <h1 className="novel-info-signup"> Welcome to Fanfiction  </h1>
          <hr className="novel-line-signup" />
          <div className="form-div-signup">
            <form className="form-part">

            <div className="label-input-div-signup">
                <label  htmlFor="bookTitle" className="all-label"> Admin Name  </label> <br />
                <input
                  id="bookTitle"
                  className="create-book-inp"
                  type="text"
                  placeholder="Enter Name..."
                  maxLength="50"
                  required
                />
              </div>

              <div className="label-input-div-signup">
                <label  htmlFor="bookTitle" className="all-label"> E-mail </label> <br />
                <input
                  id="bookTitle"
                  className="create-book-inp-signup"
                  type="text"
                  placeholder="Enter E-mail..."
                  maxLength="50"
                  required
                />
              </div>

              <div className="label-input-div">
                <label  htmlFor="novelCategory"  className="all-label"> Password  </label> <br />
                <input
                  className="create-book-inp-signup"
                  type="password"
                  placeholder="Password..."
                  maxLength="50"
                  required
                />
              </div>

              <div className="btn-div-signup">
                <button  type="submit" className="create-button-login"> Sign Up  </button>
              </div>
            </form>

          </div>
        </div>
      </div>
       <Footer />
    </DashboardLayout>
      </>
  );
  }
export default SignUp;

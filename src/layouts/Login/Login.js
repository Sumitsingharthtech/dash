/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import Footer from 'examples/Footer';
import "./Login.css";
import { Link } from 'react-router-dom';
// import {Link} from "react-router-dom";


function Login() {

  const [enteredValue, setEnteredValue] = useState({
    email: "",
    password: ""
  })

  const onChangeHandler = (e) => {
    // e.preventDefault();
    setEnteredValue({...enteredValue, [e.target.email]: e.target.value});
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // console.log(enteredValue);
  }

  return (
    <>
      <DashboardLayout>
        <DashboardNavbar />
        <div className="create-page">
          <div className="container">
            <h1 className="novel-info"> Admin Login  </h1>
            <hr className="novel-line" />
            <div className="form-div">
              <form className="form-part" onSubmit={onSubmitHandler}>
                <div className="label-input-div">
                  <label htmlFor="bookTitle" className="all-label"> Email </label> <br />
                  <input
                    id="bookTitle"
                    name="email"
                    className="create-book-inp"
                    type="text"
                    placeholder="Enter email..."
                    maxLength="50"
                    onChange={onChangeHandler}
                    required
                  />
                </div>

                <div className="label-input-div">
                  <label htmlFor="novelCategory" className="all-label"> Password  </label> <br />
                  <input
                    className="create-book-inp"
                    type="password"
                    name="email"
                    onChange={onChangeHandler}
                    placeholder="Enter Password..."
                    maxLength="50"
                    required
                  />
                </div>

                <div className="btn-div">
                  <button type="submit" className="create-button-login"> Login Here  </button>
                </div>
              </form>

              <div className='bottom-btn-login'>
                <Link to="/signup">
                <button type='submit' className='register-btn-signup'> New to fanfiction <strong>Sign Up</strong>  </button>
                </Link>
              </div>

            </div>
          </div>
        </div>
        <Footer />
      </DashboardLayout>
    </>
  );
}
export default Login;

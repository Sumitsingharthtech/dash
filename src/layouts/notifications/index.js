/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import axios from "axios";
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import "./Notification.css";

function Notifications() {
  const [getAllBooks, setGetAllBooks] = useState([]);
 


  const GetAllBooksHandler = async () => {
    const result = await axios.get("http://103.171.181.46:2081/api/books");
    // console.log("data", result.data.data);
    setGetAllBooks(result.data.data);
    // SetLoading(true);
  };
  useEffect(() => {
    GetAllBooksHandler();
  }, []);
  return (
   <>
    <DashboardLayout>
      <DashboardNavbar />
    <div className="romance">
    <div className="lovestory">
        <div className="container">
          <div className="lovestory-image">
            <h1>Love Story</h1>
            <div className="row">
              {getAllBooks.slice(0,12).map((getloveStory) => (
                <div className="col-sm-6 col-md-4 col-lg-2">
                  <div className="lovestory-bookimage d-flex">
                    <img
                      className="bookCover2"
                      src={getloveStory.pic.resize_url}
                      alt="book cover2"
                      style={{marginRight: '10px'}}
                    />
                  </div> 
                  <div className="lovestory-bookname">
                    <h6> {getloveStory.title} </h6>
                    <p>{getloveStory.author}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* <Link to="/marriage"> 
            <h2>
              More
              <ImArrowRight2 />
            </h2>
       
            </Link> */}
            
          </div>
        </div>
      </div>
    </div>
    <div className="romance">
    <div className="romance1">
        <div className="container">
          <div className="lovestory-image">
            <h1>Romance</h1>
            <div className="row">
              {getAllBooks.slice(0,12).map((getloveStory) => (
                <div className="col-sm-6 col-md-4 col-lg-2">
                  <div className="lovestory-bookimage d-flex">
                    <img
                      className="bookCover3"
                      src={getloveStory.pic.resize_url}
                      alt="book cover2"
                      style={{marginRight: '10px'}}
                    />
                  </div> 
                  <div className="lovestory-bookname">
                    <h6> {getloveStory.title} </h6>
                    <p>{getloveStory.author}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* <Link to="/marriage"> 
            <h2>
              More
              <ImArrowRight2 />
            </h2>
       
            </Link> */}
            
          </div>
        </div>
      </div>
    </div>
    <div className="romance">
    <div className="Marriage">
        <div className="container">
          <div className="lovestory-image">
            <h1>Marriage</h1>
            <div className="row">
              {getAllBooks.slice(0,12).map((getloveStory) => (
                <div className="col-sm-6 col-md-4 col-lg-2">
                  <div className="lovestory-bookimage d-flex">
                    <img
                      className="bookCover4"
                      src={getloveStory.pic.resize_url}
                      alt="book cover2"
                      style={{marginRight: '10px'}}
                    />
                  </div> 
                  <div className="lovestory-bookname">
                    <h6> {getloveStory.title} </h6>
                    <p>{getloveStory.author}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* <Link to="/marriage"> 
            <h2>
              More
              <ImArrowRight2 />
            </h2>
       
            </Link> */}
            
          </div>
        </div>
      </div>
    </div>
    <div className="romance">
    <div className="WereWolf">
        <div className="container">
          <div className="lovestory-image">
            <h1>WereWolf</h1>
            <div className="row">
              {getAllBooks.slice(0,12).map((getloveStory) => (
                <div className="col-sm-6 col-md-4 col-lg-2">
                  <div className="lovestory-bookimage d-flex">
                    <img
                      className="bookCover5"
                      src={getloveStory.pic.resize_url}
                      alt="book cover2"
                      style={{marginRight: '10px'}}
                    />
                  </div> 
                  <div className="lovestory-bookname">
                    <h6> {getloveStory.title} </h6>
                    <p>{getloveStory.author}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* <Link to="/marriage"> 
            <h2>
              More
              <ImArrowRight2 />
            </h2>
       
            </Link> */}
            
          </div>
        </div>
      </div>
    </div>
    <div className="romance">
    <div className="CEO">
        <div className="container">
          <div className="lovestory-image">
            <h1>CEO</h1>
            <div className="row">
              {getAllBooks.slice(0,12).map((getloveStory) => (
                <div className="col-sm-6 col-md-4 col-lg-2">
                  <div className="lovestory-bookimage d-flex">
                    <img
                      className="bookCover6"
                      src={getloveStory.pic.resize_url}
                      alt="book cover2"
                      style={{marginRight: '10px'}}
                    />
                  </div> 
                  <div className="lovestory-bookname">
                    <h6> {getloveStory.title} </h6>
                    <p>{getloveStory.author}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* <Link to="/marriage"> 
            <h2>
              More
              <ImArrowRight2 />
            </h2>
       
            </Link> */}
            
          </div>
        </div>
      </div>
    </div>
      <Footer />
    </DashboardLayout>
   </>
  );
}

export default Notifications;


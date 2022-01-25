/* eslint-disable prettier/prettier */
import React from "react";
import './BookCategory.css';
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import Button from '@mui/material/Button';

function BookCategory() {
  return (
    <>
      <DashboardLayout>
        <DashboardNavbar />


       <div className="main-btn-div-save">
       <div className="book-category-btn">
            <Button style={{color: "white", float: "left", }}
             variant="contained" > Edit  </Button>
        </div>
        <div className="book-category-btn1">
        <Button style={{color: "white", float: "left"}}
             variant="contained" > Save   </Button>
        </div>
       </div>

        <div className="romaceCategory">
            <p>Romance</p>
        </div>
        <div className="romaceCategory">
            <p>CEO</p>
        </div>
        <div className="romaceCategory">
            <p>Marriage</p>
        </div>
        <div className="romaceCategory">
            <p>Fantasy </p>
        </div>
        <div className="romaceCategory">
            <p>WareWolf </p>
        </div>
        <div className="romaceCategory">
            <p>Paranormal</p>
        </div>
        <Footer />
      </DashboardLayout>
    </>
  );
}

export default BookCategory;

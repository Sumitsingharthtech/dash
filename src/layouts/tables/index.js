/* eslint-disable prettier/prettier */
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
// import StarsRating from "stars-rating";
import './CreateBook.css'

function Tables() {
  // const ratingChanged = () => {
  // };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div className="create-page">
        <div className="container">
          <h1 className="novel-info"> Book Category  </h1>
          <hr className="novel-line" />
          <div className="form-div">
            <form className="form-part">
              <div className="label-input-div">
                <label  htmlFor="bookTitle" className="all-label"> Book Title </label> <br />
                <input
                  id="bookTitle"
                  className="create-book-inp"
                  type="text"
                  placeholder="Chapter titles sholud be within 50 characters."
                  maxLength="50"
                  required
                />
              </div>

              <div className="label-input-div">
                <label  htmlFor="novelCategory"  className="all-label"> Novel Category </label> <br />
                <select className="select-type">
                 <option className="opt-novel-type" placeholder="Original" required >
                    Category
                  </option>
                  <option className="opt-novel-type"> Romance </option>
                  <option className="opt-novel-type"> CEO </option>
                  <option className="opt-novel-type"> Marriage </option>
                  <option className="opt-novel-type"> Paranormal </option>
                  <option className="opt-novel-type"> Fantasy </option>
                  <option className="opt-novel-type"> Werewolf </option>
                </select>
              </div>

              <div className="label-input-div">
                <label htmlFor="language"  className="all-label"> Language </label> <br />
                <select className="language-selection"  required>
                  <option className="lang-point"> English </option>
                  <option className="lang-point"> Hindi </option>
                </select>
              </div>

              <div className="label-input-div">
                <label  htmlFor="synopsis"  className="all-label"> Upload Book </label> <br/>
                 <input className="create-book-inp" type="file" />
              </div>

              <div className="label-input-div">
                <label  htmlFor="synopsis"  className="all-label"> Upload Book </label>
                <p className="synopsis-para">
                  Please Write a description for your story with 20 to 300 words{" "}
                </p>
                <textarea
                  className="text-area-1"
                  cols="30"
                  rows="5"
                  maxLength="600"
                  placeholder="Description......."
                  />
                 
              </div>

              <div className="btn-div">
                <button  type="submit" className="create-button"> Upload </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;

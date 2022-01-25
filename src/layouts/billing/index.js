/* eslint-disable prettier/prettier */
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function Billing() {
  return (
    <>
    <DashboardLayout>
      <DashboardNavbar absolute isMini />
      <div className="create-page">
        <div className="container">
          <h1 className="novel-info"> Contest Details   </h1>
          <hr className="novel-line" />
          <div className="form-div">
            <form className="form-part">
              <div className="label-input-div">
                <label  htmlFor="bookTitle" className="all-label"> Contest  Title   </label> <br />
                <input
                  id="bookTitle"
                  className="create-book-inp"
                  type="text"
                  placeholder="Enter Contest..."
                  maxLength="50"
                  required
                />
              </div>

              <div className="label-input-div">
                <label  htmlFor="bookTitle" className="all-label"> Image   </label> <br />
                <input
                  id="bookTitle"
                  className="create-book-inp"
                  type="file"
                  maxLength="50"
                  required
                />
              </div>


              <div className="label-input-div">
                <label  htmlFor="novelCategory"  className="all-label"> Start Date  </label> <br />
                <input
                  className="create-book-inp"
                  type="date"
                  placeholder="Start date"
                  maxLength="50"
                  required
                />
              </div>

              <div className="label-input-div">
                <label  htmlFor="novelCategory"  className="all-label"> End Date   </label> <br />
                <input
                  className="create-book-inp"
                  type="date"
                  placeholder="Start date"
                  maxLength="50"
                  required
                />
              </div>

              <div className="label-input-div">
                <label  htmlFor="synopsis"  className="all-label"> Contest Description  </label>
              
                <textarea
               style={{border: "1px solid gray"}}
                  className="text-area-1"
                  cols="30"
                  rows="5"
                  placeholder="Contest Description......."
                  />
                 
              </div>

              <div className="btn-div">
                <button  type="submit" className="create-button"> Add Contest    </button>
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
export default Billing;

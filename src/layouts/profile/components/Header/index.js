/* eslint-disable prettier/prettier */
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Footer from "examples/Footer";
import "./Admin.css";


function index() {
  return (
    <>
      <div className="create-page">
        <div className="container">
          <h1 className="novel-info"> Admin  Profile  </h1>
          <hr className="novel-line" />
          <div className="form-div">
            <form className="form-part">
              <div className="label-input-div">
                <label  htmlFor="bookTitle" className="all-label"> Admin  Name  </label> <br />
                <input
                  id="bookTitle"
                  className="create-book-inp"
                  type="text"
                  placeholder="Enter name..."
                  maxLength="50"
                  required
                />
              </div>

              <div className="label-input-div">
                <label  htmlFor="novelCategory"  className="all-label"> E-mail </label> <br />
                <input
                  className="create-book-inp"
                  type="text"
                  placeholder="E-mail..."
                  maxLength="50"
                  required
                />
              </div>
              
              <div className="label-input-div">
              <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="other"
        />
      </RadioGroup>
    </FormControl>
              </div>

              <div className="label-input-div">
                <label  htmlFor="bookTitle" className="all-label"> User Address   </label> <br />
                <input
                  id="bookTitle"
                  className="create-book-inp"
                  type="text"
                  placeholder="Enter Address..."
                  maxLength="50"
                  required
                />
              </div>

              <div className="label-input-div">
                <label  htmlFor="bookTitle" className="all-label"> Phone  </label> <br />
                <input
                  id="bookTitle"
                  className="create-book-inp"
                  type="text"
                  placeholder="Phone "
                  maxLength="50"
                  required
                />
              </div>

              <div className="btn-div">
                <button  type="submit" className="create-button"> Update Profile  </button>
              </div>
              
            </form>
          </div>
        </div>
      </div>
      <Footer />
      </>
  );
}
export default index;

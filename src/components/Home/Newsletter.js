import React, { useState } from "react";
import $ from "jquery";
import axios from "axios";
import "../../styles/Newsletter.scss";
//Assets
import Arrow from "../../assets/Home/2-How we make an impact/Arrow.png";
import successPic from "../../assets/Home/6-Newsletter/Success Pic.png";

function Newsletter() {

  const [values, setValues] = useState({
    email: "",
    error: "",
    success: false,
  });

  const { email, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
      // console.log(values);
    event.preventDefault();

    axios.post("https://client-hydrofresh.herokuapp.com/", {email})
    .then((values) => {
      console.log(values, email);
      if (values.error) {
        setValues({ ...values, error: values.error, success: false });
        console.log(values.error, values.success);
      } else {
        setValues({
          ...values,
          email: "",
          error: "",
          success: true,
        });
      }
    })
      .catch(error => {
            console.log('Error fetching and parsing data', error);
     });
  };
  // console.log(values);

  var closesuccessMsg = $('.newsletter__wholeSuccessMsg');
    
    const handlesuccessMsg = ((e) => {
        e.persist();
        
        closesuccessMsg.css({
            'transition': "0.7s ease",
            'opacity': 0,
            'z-index': -1
        });
    });

  const successMessage = () => {

    return (
      <div className="newsletter__wholeSuccessMsg" style={{ display: values.success ? true : "none" }} >
        <div className="newsletter__successMessage--background"></div>
        <div className="scale-in-top newsletter__successMessage">
          <div className="newsletter__successMsg--closeBtn" onClick={handlesuccessMsg}>
          </div>
          <img src={successPic} className="newsletter__successMsg--Pic" />
          <p className="newsletter__successMsg--text">Congrats! You are now subscribed. 🎉</p>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <span className="newsletter__errMessage" style={{ display: values.error ? "" : "none" }} >
        Oops! {error}
      </span>
    );
  };


  return (
    <>
    <div className="newsletterSection">
      <p className="newsletter__newsletterHeading">NEWSLETTER</p>

      <div className="newsletter__firstHeading">
        <span className="newsletter__firstHeading--subscribe">Subscribe</span>
        <span className="newsletter__firstHeading--toGet">to get</span>
      </div>
      <div>
        <p className="newsletter__secondHeading--latestUpdates">the latest updates</p>
      </div>

      <div className="newsletter__emailPart">
          <form>
            
              <input
              className="newsletter__emailBox"
                onChange={handleChange("email")}
                type="email"
                value={email}
                placeholder="Email address"
              />

              <button className="newsletter__subscribeBtn" onClick={onSubmit}>
                <img id="newsletter__subscribeBtn--arrow" src={Arrow} alt="->"/> Subscribe
              </button>

          </form>
          {successMessage()}
          {errorMessage()}
        </div>
      {/* <p>{JSON.stringify(values)}</p> */}
    </div>

   </>
  );
}

export default Newsletter;

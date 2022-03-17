import React from "react";
import './Footer.css'

function Footer() {
  return (
    <div className="p-5 mfooter">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
          <h5 className="footer-head">Services</h5>
              <div>
                  <p className="footer-pst-item item"><i className="fa fa-check text-white p-2"></i>Blood Check</p>
                  <p className="footer-pst-item item"><i className="fa fa-ambulance text-white p-2"></i>Transportation</p>
                  <p className="footer-pst-item item"><i className="fa fa-television text-white p-2"></i>Blood Screening</p>
                  <p className="footer-pst-item item"><i className="fa fa-user-md text-white p-2"></i>Transfussion</p>
              </div>
          </div>
          <div className="col-md-4">
              <h5 className="footer-head">Countries</h5>
              <div>
                  <p className="footer-pst-item item"><i className="fa fa-paw text-white p-2"></i>United States</p>
                  <p className="footer-pst-item item"><i className="fa fa-paw text-white p-2"></i>Canada</p>
                  <p className="footer-pst-item item"><i className="fa fa-paw text-white p-2"></i>United Kingdom</p>
                  <p className="footer-pst-item item"><i className="fa fa-paw text-white p-2"></i>Brazil</p>
              </div>
          </div>
          <div className="col-md-4">
          <h5 className="footer-head">Social</h5>
              <div>
                  <p className="footer-pst-item item"><i className="fa fa-facebook text-white p-2"></i>Facebook</p>
                  <p className="footer-pst-item item"><i className="fa fa-instagram text-white p-2"></i>Instagram</p>
                  <p className="footer-pst-item item"><i className="fa fa-twitter text-white p-2"></i>Twitter</p>
                  <p className="footer-pst-item item"><i className="fa fa-telegram text-white p-2"></i>Telegram</p>
              </div>
          </div>
        </div>
        <hr />
        <div className="row py-3">
            <div className="col-12">
                <p>
                  &copy; {new Date().getFullYear()} Blood Bank Inc | All Rights Reserved
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

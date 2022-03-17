import React from "react";

function Contact() {
  return (
    <div className="container mt-5 p-3">
      <div className="row justify-content-center">
        <h2 className="text-center mt-3">Contact Us</h2>
      </div>
      <div className="row">
        <div className="col-md-6 px-3">
          <div className="mt-3 p-2 bg-secondary text-white font-weight-bold rounded">
            <div className="">
              <i className="fa fa-phone">
                <span className="px-2">Phone:</span>
              </i>
              <span className="px-2">+111 1111 1111</span>
            </div>
          </div>
          <div className="mt-3 p-2 bg-secondary text-white font-weight-bold rounded">
            <div className="">
              <i className="fa fa-envelope">
                <span className="px-2">Email:</span>
              </i>
              <span className="px-2">info@bloodbk.com</span>
            </div>
          </div>
          <div className="mt-3 p-2 bg-secondary text-white font-weight-bold rounded">
            <div className="">
              <i className="fa fa-map-marker">
                <span className="px-2">Headquarters:</span>
              </i>
              <span className="px-2">California , USA</span>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mt-3 px-4">
            <div className="text-center">
              Send us a message?
            </div>
            <div>
            <form action="" className="form mt-3">
              <div className="form-group">
              <h5 className="text-dark font-weight-bold">Name</h5>
                <input placeholder="Your Name" name="name" required className="form-control" type="text" />
              </div>
              <div className="form-group mt-2">
                <h5 className="text-dark font-weight-bold">Email</h5>
                <input placeholder="Your Email" name="email" required className="form-control" type="email" />
              </div>
              <div className="form-group mt-2">
              <h5 className="text-dark font-weight-bold">Message</h5>
                <textarea 
                required
                placeholder="Your Message"
                  rows="5"
                  name="message"
                  className="form-control"
                  type="text"
                ></textarea>
              </div>
              <div className="form-group my-4">
                  <button type="submit" className="btn btn-outline-dark w-100">Send Message</button>
              </div>
            </form>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="alert alert-primary rounded p-3 my-5 text-center">
          Please feel free to contact us via all the provided methods!
        </div>
      </div>
    </div>
  );
}

export default Contact;

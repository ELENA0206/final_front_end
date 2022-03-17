import React from "react";
import "./Information.css";

function Information() {
  return (
    <div className="container mt-5 p-3">
      {/* start what to do before donation  */}
      <div className="row">
        <div className="col-md-12">
          <div className="alert alert-secondary rounded p-3 my-5">
            <div className="row justify-content-center">
              <div className="p-3 text-center">
                <h4>What to do before donation?</h4>
              </div>
              <div className="col-md-3 h-50 m-2">
                <div className="card before-card">
                  <div className="m-2 text-center p-4">
                    <i className="fa fa-calendar icon"></i>
                  </div>
                  <div className="m-2 text-center">
                    <h3 className="text-dark">Plan for an Appointment</h3>
                  </div>
                  <div className="m-2 text-center">
                    <p className="text-muted">
                      Find the best time for you to do the donation
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 h-50 m-2">
                <div className="card before-card">
                  <div className="m-2 text-center p-4">
                    <i className="fa fa-cutlery icon"></i>
                  </div>
                  <div className="m-2 text-center">
                    <h3 className="text-dark">
                      Have a proper nutrition or diet
                    </h3>
                  </div>
                  <div className="m-2 text-center">
                    <p className="text-muted">
                      Majorly have food rich in iron such as spinach and fish.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 h-50 m-2">
                <div className="card before-card">
                  <div className="m-2 text-center p-4">
                    <i className="fa fa-bed icon"></i>
                  </div>
                  <div className="m-2 text-center">
                    <h3 className="text-dark">Have a good rest and hydrate</h3>
                  </div>
                  <div className="m-2 text-center">
                    <p className="text-muted">
                      Take extra liquids and sleep well before donation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end what to do before donation  */}

      {/* start what to do during donation  */}
      <div className="row">
        <div className="col-md-12">
          <div className="alert alert-primary rounded p-3 my-3">
            <div className="row justify-content-center">
              <div className="p-3 text-center">
                <h4 className="text-dark">What to do during donation</h4>
              </div>
              <div className="col-md-3 h-50 m-2">
                <div className="card before-card">
                  <div className="m-2 text-center p-4">
                    <i className="fa fa-file icon"></i>
                  </div>
                  <div className="m-2 text-center">
                    <h3 className="text-dark">Carry some documents</h3>
                  </div>
                  <div className="m-2 text-center">
                    <p className="text-muted">
                      Have a document to prove eligibilty for donation
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 h-50 m-2">
                <div className="card before-card">
                  <div className="m-2 text-center p-4">
                    <i className="fa fa-id-card icon"></i>
                  </div>
                  <div className="m-2 text-center">
                    <h3 className="text-dark">Have your ID card</h3>
                  </div>
                  <div className="m-2 text-center">
                    <p className="text-muted">
                      This may involve DL and donation forms
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 h-50 m-2">
                <div className="card before-card">
                  <div className="m-2 text-center p-4">
                    <i className="fa fa-medkit icon"></i>
                  </div>
                  <div className="m-2 text-center">
                    <h3 className="text-dark">Medical Status</h3>
                  </div>
                  <div className="m-2 text-center">
                    <p className="text-muted">
                      Information about any medicines you are taking
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end what to do during donation  */}

      {/* start what to do after donation  */}
      <div className="row">
        <div className="col-md-12">
          <div className="alert alert-secondary rounded p-3 my-5">
            <div className="row justify-content-center">
              <div className="p-3 text-center">
                <h4>What to do after donation?</h4>
              </div>
              <div className="col-md-3 h-50 m-2">
                <div className="card before-card">
                  <div className="m-2 text-center p-4">
                    <i className="fa fa-hotel icon"></i>
                  </div>
                  <div className="m-2 text-center">
                    <h3 className="text-dark">Relax a bit</h3>
                  </div>
                  <div className="m-2 text-center">
                    <p className="text-muted">
                      Relax and have some snacks such as cookies
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 h-50 m-2">
                <div className="card before-card">
                  <div className="m-2 text-center p-4">
                    <i className="fa fa-newspaper-o icon"></i>
                  </div>
                  <div className="m-2 text-center">
                    <h3 className="text-dark">Spread the news</h3>
                  </div>
                  <div className="m-2 text-center">
                    <p className="text-muted">
                      Let other know that they can donate as well
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 h-50 m-2">
                <div className="card before-card">
                  <div className="m-2 text-center p-4">
                    <i className="fa fa-coffee icon"></i>
                  </div>
                  <div className="m-2 text-center">
                    <h3 className="text-dark">More liquids within 24 hours.</h3>
                  </div>
                  <div className="m-2 text-center">
                    <p className="text-muted">
                      Take extra liquids within 24 hours and avoid alcohol
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end what to do after donation  */}
    </div>
  );
}

export default Information;

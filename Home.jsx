import React from "react";
import { useNavigate } from "react-router-dom";
import './Home.css';

function Home() {

  let navigate = useNavigate();

  return (
    <div className="container mt-5 pt-3">
       <div className="row main-page">
          <div className="col-12">
             <div className="h1 main-page-welcome">Blood Bank Application</div>
             <img className="donation-image w-100" src="/donation.jpg" alt="" />
          </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="pt-3">
            <div className="card p-2 m-2 shadow rounded">
              <div className="card-body">
                <div className="alert alert-primary text-center">
                  <p className="h6">
                    <i className="fa fa-paw fa-paw mx-2"></i>
                    Welcome to Blood Bank Application ! The following sections
                    gives more info about blood donation.
                  </p>
                </div>
                <div className="card shadow-sm my-4 p-2">
                  <h3>
                    {" "}
                    <span>
                      <i className="fa fa-info-circle" aria-hidden="true"></i>
                    </span>{" "}
                    Why blood donation is important
                  </h3>
                  <div className="p-2">
                    <ul className="fa-ul">
                      <li>
                        <i className="fa-li fa fa-check text-primary"></i>
                        Safe blood saves lives. Blood is needed by women with complications during pregnancy and childbirth, children with severe anaemia, often resulting from malaria or malnutrition, accident victims and surgical and cancer patients.
                      </li>
                      <li>
                        <i className="fa-li fa fa-check text-primary"></i>
                        There is a constant need for a regular supply of blood because it can be stored only for a limited period of time before use. Regular blood donation by a sufficient number of healthy people is needed to ensure that blood will always be available whenever and wherever it is needed.
                      </li>
                      <li>
                        <i className="fa-li fa fa-check text-primary"></i>
                        Blood is the most precious gift that anyone can give to another person – the gift of life. A decision to donate your blood can save a life, or even several if your blood is separated into its components – red cells, platelets and plasma – which can be used individually for patients with specific conditions.
                      </li>
                    </ul>
                  </div>
                  <div className="">
                  <button className="float-end btn btn-outline-primary btn-sm px-5" onClick={()=>{navigate('/about')}}>More Info?</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

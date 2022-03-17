import React from "react";

function About() {
  return (
    <div className="container mt-5 p-3">
      <div className="row pt-2">
        <div className="h3 text-center">About Blood Donation proccess</div>
      </div>
      <div className="row">
        <div className="p-2">
          <p className="h5">
            Blood donation process usually takes aroud 10 minutes. From the time
            you arrive until you leave it is usually about 25 minutes. The extra
            minutes are spent on a few questions and also preparation.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="w-100 h-100">
            <img className="w-100 h-100" src="blood.jpg" alt="" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="m-1">
            <div className="h5">Register first</div>
            <p>
              You will be asked to register and also provide your identification
              documents. You will be asked to provide details about you
              including physical address and email address.
            </p>
            <div className="h5">Your Health History</div>
            <p>
              You will attend a private and a confidential interview where you
              will answer questions such as your health history and recently
              visited places. <br />
              You will also give information any madecines you have taken
              recently.
            </p>
          </div>
        </div>
        <div>
          <div className="h5 mt-3">The Donation</div>
          <p>
            Once you pass the above stages, it is now time to donate blood. The
            first step is to cleanse the area on the arm and insert a clean
            needle to draw the blood. This process only takes about 7 - 10
            minutes while your are seated or lying comfortably. Once the process
            is over, the medical officer will then place a bandage on your harm.
            This is simply to cover the area where the needle was inserted.
          </p>
        </div>
        <div>
          <div className="h5 mt-3">Refreshment</div>
          <p>
            After donation is complete, you may need to relax and have some
            snacks. After a few minutes around 15, you can now resume your dialy
            routine. Spread the news to your friends. Explain about the
            experince and that you saved lives. Inspire them to become donors.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

import React from 'react';

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-7 col-lg-7">
            <h1 className="mt-lg-5">
              Get started, <br /> register and get job
            </h1>
            <p>
              Want to post a job and access database Smart Match finds relevant
              candidates auto-matched to your keywords.
            </p>
            <div className="mb-5">
              <span>RECRUITERS</span>
              <span>ADVERtiser</span>
            </div>
          </div>
          <div className="col-sm-12 col-md-5 col-lg-5">
            <div className="card card-body border-0 shadow">
              <h3>Job Seekers</h3>
              <form>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your Password"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your Password"
                  />
                </div>
                <button type="submit" className="btn btn-block">
                  Signup
                </button>
              </form>
              <p>Already register? Login</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

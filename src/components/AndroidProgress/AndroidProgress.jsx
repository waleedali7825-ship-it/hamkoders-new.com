import React from "react";
import "./AndroidProgress.css";

const AndroidProgress = () => {
  return (
    <section className="android-progress-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="android-progess-sec-main">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="android-progress-box">
                    <h3>50%</h3>
                    <h4>App Developers</h4>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="android-progress-box">
                    <div className="android-progress-box">
                      <h3>100+</h3>
                      <h4>Live Apps</h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="android-progress-box">
                    <div className="android-progress-box">
                      <h3>15+</h3>
                      <h4>Industries Covered</h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="android-progress-box">
                    <div className="android-progress-box">
                      <h3>75+</h3>
                      <h4>Clutch Reviews</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AndroidProgress;

import React from "react";
import "../styles/InfoSection.css";

function InfoSection() {
  return (
    <div className="container">
      <div className="container-small">
        <div className="text">
          <div className="max-width-xlarge align-center">
            <div className="margin-bottom margin-small">
              <h1>
                Double the hires, half the effort
                <br />
              </h1>
            </div>
            <p className="text-size-medium-2">
              Open conversations and nurture relationships at scale and be the
              first choice when your ideal candidate is ready to explore.
              <br />
            </p>
            <div className="margin-top margin-medium">
              <button type="button" className="btn btn-outline-secondary">
                {/* <a href="/kula-outreach" > */}
                View Kula Outreach
                {/* </a> */}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="left">
        <div className="text-weight-semibold">
          <span className="text-span-11">Kula Outreach</span>
        </div>
      </div> */}
    </div>
  );
}

export default InfoSection;

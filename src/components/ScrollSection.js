import React, { useEffect } from "react";
import PropTypes from "prop-types";
// import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { connect } from "react-redux";
import getItem from "../actions/data";
import OnScreen from "onscreen";
import getVideoUrl from "../actions/videos";
import "../styles/ScrollSection.css"
const os = new OnScreen();

const ScrollSection = ({ getItem, items, getVideoUrl }) => {
  useEffect(() => {
    getItem();
  }, [getItem]);

  const v1 =
    "https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6341303c29c5340961dc9ae6_Mco-1-transcode.mp4";
  const v2 =
    "https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63413ff244f1dc616b7148a0_Mco-transcode.mp4";
  const v3 =
    "https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63455a67996ba248148c4e31_add-options%20(3)-transcode.mp4";

  os.on("enter", "#panel1", () => {
    getVideoUrl(v1);
  });
  os.on("enter", "#panel2", () => {
    getVideoUrl(v2);
  });
  os.on("enter", "#panel3", () => {
    getVideoUrl(v3);
  });


  return (
    <div className="content" style={{ width: "75%", display: "flex" }}>
      {items.map((item, index) => (
        <div className="container" id={`panel${index+1}`} key={index}>
          <div style={{ backgroundColor: "White", width: "100%" }}>
            <Card className="mb-2 border-0">
              <Card.Body>
                <Card.Title style={{ fontSize: "2rem" }}>
                  <div className="left">
                    <div className="text-weight-semibold">
                      <span className="text-span-11">{item.heading}</span>
                    </div>
                  </div>
                </Card.Title>
                <h2
                  style={{
                    fontWeight: "600",
                    fontSize: "3rem",
                    marginTop: "35px"
                  }}
                >
                  {item.subHeading}
                </h2>
                <Card.Text
                  style={{
                    // fontSize: "1.5rem",
                    marginTop: "10%",
                    color: "#4d4d4d",
                    fontSize: "1rem !important"
                  }}
                >
                  {item.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
};

ScrollSection.propTypes = {
  getItem: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  getVideoUrl: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  items: state.item,
});
export default connect(mapStateToProps, { getItem, getVideoUrl })(ScrollSection);

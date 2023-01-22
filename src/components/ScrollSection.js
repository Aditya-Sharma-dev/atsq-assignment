import React, { useEffect } from "react";
import PropTypes from "prop-types";
// import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { connect } from "react-redux";
import getItem from "../actions/data";

const ScrollSection = ({ getItem, items }) => {
  useEffect(() => {
    getItem();
  }, [getItem]);

  return (
    <div className="content" style={{ width: "90%" }}>
      {items.map((item, index) => (
        <div className="container" id="panel1" key={index}>
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
};

const mapStateToProps = (state) => ({
  items: state.item,
});
export default connect(mapStateToProps, { getItem })(ScrollSection);

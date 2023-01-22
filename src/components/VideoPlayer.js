import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../styles/VideoPlayer.css"

const VideoPlayer = ({ url }) => {
  return (
    // <div className="">
    <div
      className="videoDiv"
      style={{ width: "95%", height: "80%", contain: "inherit" }}
    >
      <video
        style={{
          width: "100%",
          borderRadius: "40px",
        }}
        autoPlay
        muted
        loop
        // object-fit
        src={url}
      ></video>
    </div>
    // </div>
  );
};

VideoPlayer.propTypes = {
  url: PropTypes.string,
};
const mapStateToProps = (state) => ({
  url: state.videoUrl,
});

export default connect(mapStateToProps)(VideoPlayer);

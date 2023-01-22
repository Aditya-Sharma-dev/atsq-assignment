import React from "react";
import PropTypes from "prop-types";

const VideoPlayer = (props) => {
  return (
    // <div className="">
      <div className="" style={{ width: "95%", height : "80%", contain:"inherit"}}>
        <video
          style={{
            width: "100%",
            borderRadius: "40px",
          }}
          autoPlay
          muted
          loop
          object-fit
          src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6341303c29c5340961dc9ae6_Mco-1-transcode.mp4"
        ></video>
      </div>
    // </div>
  );
};

VideoPlayer.propTypes = {};

export default VideoPlayer;
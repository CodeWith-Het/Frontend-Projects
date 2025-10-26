import React from "react";
import mainvideo from "./mainvideo.mp4";

const Video = () => {
  return (
    <video
      className="h-full w-full object-cover"
      autoPlay
      loop
      muted
      playsInline
      src={mainvideo}
    />
  );
};

export default Video;

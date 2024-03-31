import React, { useEffect } from 'react';
import ScrollMagic from 'scrollmagic';
import video from '../../assets/video/intro.mp4';



 const VideoComponent = () => {
    function handleVideoEnd(){
        window.location.href = '/';
    }


    return (
      <div>
        <video  width="100%" autoPlay muted onEnded={handleVideoEnd}>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  };

export default VideoComponent;


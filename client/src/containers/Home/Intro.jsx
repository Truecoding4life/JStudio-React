import React, { useEffect } from 'react';
import ScrollMagic from 'scrollmagic';
import video from '../../assets/video/intro.mp4';



 const VideoComponent = ({handleVideoEnd}) => {
   

    return (
      <div>
        <video style={{ height:'100vh', width:'100%', backgroundColor:'black', objectFit:'cover'}}    autoPlay muted onEnded={handleVideoEnd}>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  };

export default VideoComponent;


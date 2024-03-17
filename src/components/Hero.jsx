import MarginLeftContainer from "./UI/MarginLeftContainer";
import heroVideoMobile from "../assets/heroVideoMobile.mp4";
import heroVideoDesktop from "../assets/heroVideoDesktop.mp4";
import { useState } from "react";
const Hero = () => {
  return (
    <div className="relative h-72 w-full lg:h-96 ">
      <video
        autoPlay
        loop
        muted
        className="absolute right-0 h-full w-full object-cover object-center"
      >
        <source
          src={heroVideoDesktop}
          type="video/mp4"
          media="(min-width: 769px)"
        />
        <source
          src={heroVideoMobile}
          type="video/mp4"
          media="(max-width: 768px)"
        />
        Your browser does not support the video tag or the file format of this
        video.
      </video>

      <div className="absolute h-full w-full bg-gradient-to-r from-primary-color/100 to-primary-color/40"></div>

      <MarginLeftContainer>
        <div className="absolute top-[25%] flex flex-col items-start justify-center gap-10 py-3 text-primary-text-color ">
          <h1 className="text-2xl font-bold">
            Welcome to our football books library!
          </h1>
          <p className="text-lg">
            Check out our collection of the latest books about your favorite
            football clubs
          </p>
        </div>
      </MarginLeftContainer>
    </div>
  );
};
export default Hero;

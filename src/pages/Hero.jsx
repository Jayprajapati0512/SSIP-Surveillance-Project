/* eslint-disable no-unused-vars */
import React from 'react';

const Hero = () => {
  return (
    <div className="w-screen h-screen flex">
      {/* Left Section */}
      <div className="left w-[60%] h-screen overflow-y-scroll scroll-hide p-5">
        <h1 className="text-3xl font-bold text-white mb-5">Live Surveillance: Anomaly Detection in Progress</h1>

        {/* Camera Feeds (Same Video) */}
        <div className="accessed-camera h-[45vh] w-full flex justify-between flex-wrap">
          {/* Camera 1 */}
          <div className="one h-[45vh] w-[45%] bg-gray-700 rounded-lg flex items-center justify-center text-white">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/AB-I3vsUk6g"
              title="Camera 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Camera 2 */}
          <div className="two h-[45vh] w-[45%] bg-gray-700 rounded-lg flex items-center justify-center text-white">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/AB-I3vsUk6g"
              title="Camera 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-white mt-8">Present Alerts</h1>

        {/* Alerts (Same Video) */}
        <div className="container flex flex-wrap justify-center gap-3">
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="one m-3 h-[35vh] min-w-[220px] w-[28%] bg-red-500 text-white flex items-center justify-center rounded-lg">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/AB-I3vsUk6g"
                title={`Alert Video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section (Same Video Twice) */}
      <div className="right w-[50%] flex flex-col items-center justify-center bg-black">
        <div className="container m-5 h-[45%] w-[90%] flex items-center justify-center">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/AB-I3vsUk6g"
            title="Main Video 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="container m-5 h-[45%] w-[90%] flex items-center justify-center">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/AB-I3vsUk6g"
            title="Main Video 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Hero;

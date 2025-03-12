/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const PastIncidents = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null);

  const cameras = {
    Gujarat: {
      Ahmedabad: [
        {
          id: 1,
          name: "Camera 101",
          eventDate: "2024-02-15",
          videoLink: "https://youtu.be/O_gv4_N_w3Y",
        },
        {
          id: 2,
          name: "Camera 102",
          eventDate: "2024-01-10",
          videoLink: "https://example.com/video2.mp4",
        },
      ],
      Surat: [
        {
          id: 3,
          name: "Camera 103",
          eventDate: "2023-12-05",
          videoLink: "https://example.com/video3.mp4",
        },
        {
          id: 4,
          name: "Camera 104",
          eventDate: "2024-03-02",
          videoLink: "https://example.com/video4.mp4",
        },
      ],
      Vadodara: [
        {
          id: 5,
          name: "Camera 105",
          eventDate: "2024-01-22",
          videoLink: "https://example.com/video5.mp4",
        },
        {
          id: 6,
          name: "Camera 106",
          eventDate: "2023-11-30",
          videoLink: "https://example.com/video6.mp4",
        },
      ],
    },
  };

  const filteredCameras = cameras[selectedState]?.[selectedCity] || [];

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedCity("");
    setSelectedVideo(null);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    setSelectedVideo(null);
  };

  const handleVideoPlay = (videoLink) => {
    setSelectedVideo(videoLink);
  };

  return (
    <div className="flex w-full h-screen text-white">
      {/* Left Section */}
      <div className="left w-[50%] p-5">
        <h1 className="text-4xl font-bold text-center my-5">Previous Incidents</h1>

        {/* State Dropdown */}
        <div className="mx-5 border px-10 py-3 border-cyan-500 rounded-xl">
          <label className="text-xl" htmlFor="states">Choose a State: </label>
          <select
            className="ml-5 px-5 py-1 border border-blue-950 outline-blue-800"
            id="states"
            value={selectedState}
            onChange={handleStateChange}
          >
            <option className="text-black" value="">--Select State--</option>
            <option className="text-black" value="Gujarat">Gujarat</option>
          </select>
        </div>

        {/* City Dropdown */}
        {selectedState && (
          <div className="mx-5 border px-10 py-3 border-cyan-500 rounded-xl mt-4">
            <label className="text-xl" htmlFor="cities">Choose a City: </label>
            <select
              className="ml-5 px-5 py-1 border border-blue-950 outline-blue-800"
              id="cities"
              value={selectedCity}
              onChange={handleCityChange}
            >
              <option className="text-black" value="">--Select City--</option>
              {Object.keys(cameras[selectedState] || {}).map((city, index) => (
                <option className="text-black" key={index} value={city}>{city}</option>
              ))}
            </select>
          </div>
        )}

        {/* Incident List */}
        <div>
          <h2 className="text-3xl text-center mt-10 font-semibold mb-5">
            Previous Incidents in {selectedCity || "Selected City"}
          </h2>
          {selectedCity ? (
            filteredCameras.length > 0 ? (
              <ul>
                {filteredCameras.map((camera) => (
                  <li
                    key={camera.id}
                    className="border-2 flex justify-between px-2 py-3 items-center"
                  >
                    <div>
                      <strong>{camera.name}</strong> <br />
                      <small>Incident Date: {camera.eventDate}</small>
                    </div>
                    <button
                      className="px-3 py-1 bg-cyan-600 hover:bg-cyan-500 rounded-lg"
                      onClick={() => handleVideoPlay(camera.videoLink)}
                    >
                      Watch Video
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center mt-5 text-gray-400">No past incidents found for this city.</p>
            )
          ) : (
            <p className="text-center mt-5 text-gray-400">Please select a state and city.</p>
          )}
        </div>
      </div>

      {/* Right Section (Video Player) */}
      <div className="right w-[50%] flex justify-center items-center bg-gray-800 p-5">
        {selectedVideo ? (
          selectedVideo.includes("youtube") ? (
            <iframe
              width="600"
              height="350"
              src={selectedVideo.replace("youtu.be/", "www.youtube.com/embed/")}
              title="Incident Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          ) : (
            <video width="600" controls>
              <source src={selectedVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )
        ) : (
          <p className="text-center text-gray-400">Select a video to watch.</p>
        )}
      </div>
    </div>
  );
};

export default PastIncidents;

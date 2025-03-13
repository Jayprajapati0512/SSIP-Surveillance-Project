/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const PastIncidents = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const cameras = {
    Gujarat: {
      Ahmedabad: [
        {
          id: 1,
          name: "Camera 101",
          eventDate: "2024-02-15",
          photoLink: "/Photo/damage2.jpg",
        },
        {
          id: 2,
          name: "Camera 102",
          eventDate: "2024-01-10",
          photoLink: "/Photo/damage2.jpg",
        },
      ],
      Surat: [
        {
          id: 3,
          name: "Camera 103",
          eventDate: "2023-12-05",
          photoLink: "/Photo/damage2.jpg",
        },
        {
          id: 4,
          name: "Camera 104",
          eventDate: "2024-03-02",
          photoLink: "/Photo/damage2.jpg",
        },
      ],
      Vadodara: [
        {
          id: 5,
          name: "Camera 105",
          eventDate: "2024-01-22",
          photoLink: "/Photo/damage2.jpg",
        },
        {
          id: 6,
          name: "Camera 106",
          eventDate: "2023-11-30",
          photoLink: "/Photo/damage2.jpg",
        },
      ],
    },
  };

  const filteredCameras = cameras[selectedState]?.[selectedCity] || [];

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedCity("");
    setSelectedPhoto(null);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    setSelectedPhoto(null);
  };

  const handlePhotoView = (photoLink) => {
    setSelectedPhoto(photoLink);
  };

  return (
    <div className="flex w-full h-screen text-white">
      {/* Left Section */}
      <div className="left w-[50%] p-5">
        <h1 className="text-4xl font-bold text-center my-5">Previous Workflow</h1>

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
            Previous Work in {selectedCity || "Selected City"}
          </h2>
          {selectedCity ? (
            filteredCameras.length > 0 ? (
              <ul>
                {filteredCameras.map((camera) => (
                  <li
                    key={camera.id}
                    className="border-[1px] m-2 flex justify-between px-2 py-3 items-center"
                  >
                    <div>
                      <strong>{camera.name}</strong> <br />
                      <small>WorkDone Date: {camera.eventDate}</small>
                    </div>
                    <button
                      className="px-3 py-1 bg-cyan-600 hover:bg-cyan-500 rounded-lg"
                      onClick={() => handlePhotoView(camera.photoLink)}
                    >
                      See Photo
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center mt-5 text-gray-400">No past Workflow found for this city.</p>
            )
          ) : (
            <p className="text-center mt-5 text-gray-400">Please select a state and city.</p>
          )}
        </div>
      </div>

      {/* Right Section (Photo Viewer) */}
      <div className="right relative w-[50%] flex justify-center items-center bg-gray-800 p-10">
        {selectedPhoto ? (
          <img src={selectedPhoto} alt="Incident" className="w-[75%] h-[75%] object-cover rounded-lg shadow-lg" />
        ) : (
          <p className="text-center text-gray-400">Select a Photo to view.</p>
        )}
      </div>
    </div>
  );
};

export default PastIncidents;

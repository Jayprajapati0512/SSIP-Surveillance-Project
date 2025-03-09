/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Settings = () => {
  // State for settings
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("English");
  const [fontSize, setFontSize] = useState("medium");
  const [privacy, setPrivacy] = useState("public");

  // Reset to default settings
  const resetSettings = () => {
    setNotifications(true);
    setDarkMode(false);
    setLanguage("English");
    setFontSize("medium");
    setPrivacy("public");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-3xl font-bold text-center mb-4">⚙️ Settings</h1>
        <p className="text-gray-400 text-center">Modify your preferences here.</p>

        {/* Enable Notifications */}
        <div className="mt-4 flex justify-between items-center">
          <label className="text-lg">🔔 Enable Notifications:</label>
          <input
            type="checkbox"
            className="w-5 h-5 cursor-pointer"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
          />
        </div>

        {/* Dark Mode */}
        <div className="mt-4 flex justify-between items-center">
          <label className="text-lg">🌙 Dark Mode:</label>
          <input
            type="checkbox"
            className="w-5 h-5 cursor-pointer"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </div>

        {/* Language Selection */}
        <div className="mt-4">
          <label className="block mb-2 text-lg">🌎 Language:</label>
          <select
            className="w-full p-2 rounded bg-gray-700 text-white"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option>English</option>
            <option>Español</option>
            <option>Français</option>
            <option>Deutsch</option>
          </select>
        </div>

        {/* Font Size Selection */}
        <div className="mt-4">
          <label className="block mb-2 text-lg">🔠 Font Size:</label>
          <select
            className="w-full p-2 rounded bg-gray-700 text-white"
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
          >
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </div>

        {/* Privacy Settings */}
        <div className="mt-4">
          <label className="block mb-2 text-lg">🔒 Privacy Settings:</label>
          <select
            className="w-full p-2 rounded bg-gray-700 text-white"
            value={privacy}
            onChange={(e) => setPrivacy(e.target.value)}
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
            <option value="friends-only">Friends Only</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-3">
          <button className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
            Save Settings
          </button>
          <button
            className="w-full px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg"
            onClick={resetSettings}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;

import React, { useState } from "react";

function RegistrationForm() {
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage("Thanks for donating blood!");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <div className="relative flex items-center justify-center h-screen ">
      {message && (
        <div className="absolute w-full text-center top-4">
          <div className="inline-block px-4 py-2 text-sm text-white bg-green-500 rounded-lg shadow-lg">
            {message}
          </div>
        </div>
      )}

      <div className="p-6 bg-white rounded-lg shadow-md w-80">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="district"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Select District
            </label>
            <input
              type="text"
              id="district"
              className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            ></input>
          </div>

          <div className="mb-4">
            <label
              htmlFor="bloodGroup"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Select Blood Group
            </label>
            <select
              id="bloodGroup"
              className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <option value="">Select</option>
              <option value="+A">+A</option>
              <option value="+B">+B</option>
              <option value="+AB">+AB</option>
              <option value="O">O</option>
              <option value="-A">-A</option>
              <option value="-B">-B</option>
              <option value="-AB">-AB</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="name"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="contactNumber"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Contact Number
            </label>
            <input
              type="text"
              id="contactNumber"
              placeholder="Enter contact number"
              className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="whatsappNumber"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              WhatsApp Number
            </label>
            <input
              type="text"
              id="whatsappNumber"
              placeholder="Enter WhatsApp number"
              className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="pincode"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Enter Pincode
            </label>
            <input
              type="text"
              id="pincode"
              placeholder="Enter pincode"
              className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 text-white transition duration-300 bg-green-500 rounded-lg hover:bg-green-600"
          >
            Register To Donor
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;

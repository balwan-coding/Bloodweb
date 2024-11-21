import React, { useState } from "react";
import { mockDonors } from "./DummyData";
import DonorCard from "./DonorCard";
function NeedBlood() {
  const [formData, setFormData] = useState({
    district: "",
    bloodGroup: "",
    pin: "",
  });

  const [donors, setDonors] = useState([]);
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const fillterDonor = mockDonors.filter(
      (donor) => donor.bloodGroup === formData.bloodGroup
    );
    setDonors(fillterDonor);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="flex flex-col gap-3 p-4 bg-white rounded-lg">
        <label htmlFor="district">District</label>
        <input
          className="p-1 border border-black rounded-md"
          type="text"
          id="district"
        />
        <label htmlFor="bloodGroup">Blood Group</label>
        <select
          className="p-1 border border-black rounded-md"
          id="bloodGroup"
          value={formData.bloodGroup}
          onChange={handleChange}
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
        <label htmlFor="pin">Pincode</label>
        <input
          className="p-1 border border-black rounded-md"
          type="number"
          id="pin"
          value={formData.pin}
          onChange={handleChange}
        />
        <button
          className="p-2 bg-green-400 rounded-full hover:bg-green-700"
          onClick={handleSubmit}
        >
          Find
        </button>
      </div>
      <div className="mt-6">
        {donors.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {donors.map((donor, index) => (
              <DonorCard key={index} donor={donor} />
            ))}
          </div>
        ) : (
          <p className="mt-4 text-black">
            No donors found for the selected criteria.
          </p>
        )}
      </div>
    </div>
  );
}

export default NeedBlood;

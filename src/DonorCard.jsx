import React from "react";
import { FcCallback } from "react-icons/fc";

function DonorCard({ donor }) {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
      <div>
        <h3 className="text-lg font-bold">{donor.name}</h3>
        <p>Blood Group: {donor.bloodGroup}</p>
        <p>District: {donor.district}</p>
      </div>
      <p>
        <FcCallback className="text-5xl" />
      </p>
    </div>
  );
}

export default DonorCard;

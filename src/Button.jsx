import React from "react";

function Button({ ...props }) {
  return (
    <button
      {...props}
      className="p-5 text-4xl font-bold text-white bg-red-500 rounded-full hover:bg-red-700"
    ></button>
  );
}

export default Button;

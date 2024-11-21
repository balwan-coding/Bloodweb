import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex gap-3 p-3 bg-red-600">
      <Link className="text-white hover:font-semibold" to="/">
        Home
      </Link>
      <Link className="text-white hover:font-semibold" to="">
        About
      </Link>
      <Link className="text-white hover:font-semibold" to="">
        Contect
      </Link>
    </div>
  );
}

export default Navbar;

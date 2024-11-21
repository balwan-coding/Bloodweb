import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-8 ">
      <Button>
        <Link to="/NeedBlood">I need Blood</Link>
      </Button>
      <p className="text-5xl font-bold text-red-600">OR</p>
      <Button>
        <Link to="/RegistrationForm">Register as Donor</Link>
      </Button>
    </div>
  );
}

export default HomePage;

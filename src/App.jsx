import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Navbar from "./Navbar";
import NeedBlood from "./NeedBlood";
import RegistrationForm from "./RegistrationForm";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path="/NeedBlood" element={<NeedBlood />}></Route>
        <Route path="/RegistrationForm" element={<RegistrationForm />}></Route>
      </Routes>
    </>
  );
}

export default App;

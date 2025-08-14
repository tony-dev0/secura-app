import { Routes, Route } from "react-router-dom";
import GetStarted from "./get-started";
import SignupForm from "./signup-form";
import Verification from "./verification";
import Profile from "./profile";

const SignupRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<GetStarted />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/verify" element={<Verification />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default SignupRoutes;

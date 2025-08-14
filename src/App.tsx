import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SignupRoutes from "./pages/signup";
import RideHistory from "./pages/history/ride-history";
import Account from "./pages/profile/account";
import Emergency from "./pages/emergency/emergency";
import Errorpage from "./pages/errorpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<SignupRoutes />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ride-history" element={<RideHistory />} />
        <Route path="/account" element={<Account />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

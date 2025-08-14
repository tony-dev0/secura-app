import { BrowserRouter, Routes, Route } from "react-router-dom";
import MapLayout from "./layout/MapLayout";
import Home from "./pages/home";
import PickupLocation from "./pages/pickup-location";
import SearchingRide from "./pages/searching-ride";
import DriverFound from "./pages/driver-found";
import DriverApproaching from "./pages/driver-approaching";
import PaymentMethod from "./pages/payment-method";
import PayWithCard from "./pages/pay-with-card";
import SignupRoutes from "./pages/signup";
import RideHistory from "./pages/history/ride-history";
import Account from "./pages/profile/account";
import Emergency from "./pages/emergency/emergency";
import ConfirmPin from "./pages/ride/confirm-pin";
import HeadingToDestination from "./pages/ride/heading-to-destination";
import TripCompleted from "./pages/ride/trip-completed";
import BecomeADriver from "./pages/driver/become-a-driver";
import Errorpage from "./pages/errorpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<SignupRoutes />} />
        <Route path="/ride-history" element={<RideHistory />} />
        <Route path="/account" element={<Account />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/become-a-driver" element={<BecomeADriver />} />
        <Route element={<MapLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/pickup-location" element={<PickupLocation />} />
          <Route path="/searching-ride" element={<SearchingRide />} />
          <Route path="/driver-found" element={<DriverFound />} />
          <Route path="/confirm-pin" element={<ConfirmPin />} />
          <Route path="/driver-approaching" element={<DriverApproaching />} />
          <Route
            path="/heading-to-destination"
            element={<HeadingToDestination />}
          />
          <Route path="/trip-completed" element={<TripCompleted />} />
          <Route path="/payment-method" element={<PaymentMethod />} />
          <Route path="/pay-with-card" element={<PayWithCard />} />
        </Route>
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

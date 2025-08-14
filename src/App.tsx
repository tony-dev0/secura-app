import { BrowserRouter, Routes, Route } from "react-router-dom";
import MapLayout from "./layout/MapLayout";
import Home from "./pages/home";
// import Emergency from "./pages/emergency";
// import RideHistory from "./pages/ride-history";
// import Account from "./pages/account";
import PickupLocation from "./pages/pickup-location";
import SearchingRide from "./pages/searching-ride";
import DriverFound from "./pages/driver-found";
import DriverApproaching from "./pages/driver-approaching";
import DriverLocation from "./pages/driver-location";
import HeadingDestination from "./pages/heading-destination";
import Arrival from "./pages/arrival";
import PaymentMethod from "./pages/payment-method";
import PayWithCard from "./pages/pay-with-card";
import Errorpage from "./pages/errorpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MapLayout />}>
          <Route path="/home" element={<Home />} />
          {/* <Route path="/emergency" element={<Emergency />} />
          <Route path="/ride-history" element={<RideHistory />} />
          <Route path="/account" element={<Account />} /> */}
          <Route path="/pickup-location" element={<PickupLocation />} />
          <Route path="/searching-ride" element={<SearchingRide />} />
          <Route path="/driver-found" element={<DriverFound />} />
          <Route path="/driver-approaching" element={<DriverApproaching />} />
          <Route path="/driver-location" element={<DriverLocation />} />
          <Route path="/heading-destination" element={<HeadingDestination />} />
          <Route path="/arrival" element={<Arrival />} />
          <Route path="/payment-method" element={<PaymentMethod />} />
          <Route path="/pay-with-card" element={<PayWithCard />} />
        </Route>
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

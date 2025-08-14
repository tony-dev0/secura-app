import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import MapWithRoute from "../components/MapWithRoute";

const MapLayout = () => {
  return (
    <div className="max-w-[450px] mx-auto">
      <div className="">
        <MapWithRoute />
      </div>
      <div className="px-3 content bg-white rounded-t-2xl">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MapLayout;

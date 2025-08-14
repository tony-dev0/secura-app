import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import MapWithRoute from "../components/MapWithRoute";

const MapLayout = () => {
  return (
    <div className="max-w-[768px] mx-auto h-screen flex flex-col overflow-auto">
      <div>
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

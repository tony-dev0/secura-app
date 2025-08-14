import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import MapWithRoute from "../components/MapWithRoute";

const MapLayout = () => {
  return (
    <div className="max-w-[450px] mx-auto">
      <div className="">
        <div className="bg-gray-300 h-[100vh]"></div>
        {/* <MapWithRoute gomapsApiKey={import.meta.env.VITE_GOMAPS_API_KEY} /> */}
      </div>

      <div className="px-3 content bg-white rounded-t-2xl">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MapLayout;

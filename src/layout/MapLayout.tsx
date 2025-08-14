import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import MapWithRoute from "../components/MapWithRoute";

const MapLayout = () => {
  return (
    <div
      className="max-w-[430px] mx-auto h-screen flex flex-col"
      style={{
        maxWidth: "430px",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ flex: "1 1 60%", minHeight: 0 }}>
        <MapWithRoute />
      </div>
      <div
        className="px-3 content bg-white rounded-t-2xl"
        style={{ flex: "0 1 30%", minHeight: 0, overflow: "auto" }}
      >
        <Outlet />
      </div>
      <div style={{ flex: "0 0 auto" }}>
        <Footer />
      </div>
    </div>
  );
};

export default MapLayout;

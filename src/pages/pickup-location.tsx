import { Link } from "react-router-dom";

const PickupLocation = () => {
  return (
    <div className="mt-7 mb-3">
      <h4 className="font-bold text-xl mb-3 mt-3">Driver</h4>
      <div className="w-full flex justify-around bg-[#eeeeee] p-3 rounded-xl">
        <div className="driver flex flex-col items-center">
          <img src="/car.png" alt="Driver" className="w-4 h-4" />
          <span className="text-xs font-semibold">Male</span>
        </div>
        <div className="driver flex flex-col items-center active">
          <img src="/car.png" alt="Driver" className="w-4 h-4" />
          <span className="text-xs font-semibold">Random</span>
        </div>
        <div className="driver flex flex-col items-center">
          <img src="/car.png" alt="Driver" className="w-4 h-4" />
          <span className="text-xs font-semibold">Female</span>
        </div>
      </div>
      <Link to={"/searching-ride"}>
        <h4 className="text-center font-semibold mt-5">
          <button className="bg-[#83E0C4] px-10 py-2 rounded-lg">Next</button>
        </h4>
      </Link>
    </div>
  );
};

export default PickupLocation;

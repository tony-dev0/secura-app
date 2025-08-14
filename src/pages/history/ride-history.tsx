import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const RideHistory = () => {
  const [activeTab, setActiveTab] = useState("Ongoing");

  const tabs = ["All", "Ongoing", "Completed", "Canceled"];

  const rideData = [
    {
      date: "09 Aug 25",
      rides: [
        { location: "Obasanjo Road", price: "NGN 5,300", status: "Completed" },
        { location: "Gym House", price: "NGN 3,300", status: "Completed" },
        {
          location: "Kingsley Street",
          price: "NGN 3,900",
          status: "Completed",
        },
        { location: "Mile 7", price: "NGN 3,900", status: "Completed" },
      ],
    },
    {
      date: "07 Aug 25",
      rides: [
        {
          location: "Kingsley Street",
          price: "NGN 3,900",
          status: "Completed",
        },
      ],
    },
  ];

  const getFilteredData = () => {
    if (activeTab === "All") return rideData;

    return rideData
      .map((dayData) => ({
        ...dayData,
        rides: dayData.rides.filter((ride) => ride.status === activeTab),
      }))
      .filter((dayData) => dayData.rides.length > 0);
  };

  const filteredData = getFilteredData();
  const hasAnyRides = filteredData.some((dayData) => dayData.rides.length > 0);

  const EmptyState = () => (
    <div className="flex-1 flex flex-col items-center justify-center py-16">
      <div className="w-[151px] h-[151px] rounded-full border-4 border-gray-200 flex items-center justify-center mb-2">
        <img src="/icons/fluent-mdl2_error-badge.svg" />
      </div>
      <p className="text-[#EBEBEB] text-xl font-extrabold">None Available</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-white flex flex-col max-w-[768px] mx-auto px-4 py-6">
      <div className="flex items-center mb-4">
        <Link to="/home" className="mr-4">
          <ArrowLeft className=" text-black" />
        </Link>
      </div>
      <div>
        <h1 className="text-[28px] font-extrabold text-black pb-6">
          Ride History
        </h1>
      </div>

      <div className="flex space-x-2 mb-8 overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`p-2.5 rounded-3xl text-[10px] font-medium transition-colors ${
              activeTab === tab
                ? "bg-black text-white"
                : "bg-[#EBEBEB] text-black hover:bg-[#EBEBEB]/80"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex-1 mt-6">
        {!hasAnyRides ? (
          <EmptyState />
        ) : (
          filteredData.map((dayData, dayIndex) => (
            <div key={dayIndex} className="mb-6">
              <h2 className="text-lg font-bold text-black mb-2">
                {dayData.date}
              </h2>

              <div className="space-y-3">
                {dayData.rides.map((ride, rideIndex) => (
                  <div
                    key={rideIndex}
                    className="flex items-center justify-between bg-[#E3E1E1]/30 rounded-xl px-6 py-5 h-fit"
                  >
                    <div className="flex items-center space-x-1">
                      <div className="w-10 h-10 p-1 bg-[#333333]/10 rounded-full flex items-center justify-center">
                        <img src="/icons/mingcute_car-line.svg" />
                      </div>
                      <span className="font-bold text-base text-black">
                        {ride.location}
                      </span>
                    </div>
                    <span className="font-bold text-black/70 text-base">
                      {ride.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RideHistory;

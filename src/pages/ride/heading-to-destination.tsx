import { useNavigate } from "react-router-dom";

const HeadingToDestination = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-7 mb-3">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-extrabold text-black mb-2">
          Heading to your Destination
        </h1>
        <p className="text-[#4D4D4D] font-semibold text-base mb-1">
          Lawrence Peter . Red Toyota Camry
        </p>
        <p className="text-[#4D4D4D] text-sm mb-1">
          Will Arrive at your Destination in Approximately <br /> 12 mins
        </p>
      </div>

      <div className="space-y-4">
        <button
          onClick={() => navigate("/emergency")}
          className="w-full py-4 px-6 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
        >
          Emergency Contact
        </button>

        <button
          onClick={() => navigate("/trip-completed")}
          className="w-full py-4 px-6 bg-[#64D8B5]/50 text-black rounded-full font-extrabold hover:bg-[#64D8B5]/70 transition-colors"
        >
          Live Trip Sharing
        </button>
      </div>
    </div>
  );
};

export default HeadingToDestination;

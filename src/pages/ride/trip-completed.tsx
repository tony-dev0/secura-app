import { Clock, MapPin, Gauge, Star } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

const TripCompleted = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (starIndex: number) => {
    setRating(starIndex + 1);
  };

  const handleReview = () => {
    if (!rating) {
      toast("Kindly rate the driver.");
      return;
    }
    toast.success("Thank you for the review!");
    setTimeout(() => {
      window.location.href = "/home";
    }, 4000);
  };

  return (
    <div className="mt-7 mb-3">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-extrabold text-black mb-1">
          You have arrived
        </h1>
        <h2 className="text-base font-bold text-black mb-1">Gym House</h2>
        <p className="text-[#4D4D4D] text-sm">12 Gym house Street, Lagos</p>
      </div>

      <div className="flex justify-center gap-8 mb-8">
        <div className="text-center">
          <div className="w-[50px] h-[50px] p-1 bg-[#64D8B5]/10 rounded-full flex items-center justify-center mb-2 mx-auto">
            <Clock className="w-[18px] h-[18px] text-black" />
          </div>
          <p className="text-base font-bold text-black">12 mins</p>
          <p className="text-xs text-[#4D4D4D]">Ride Time</p>
        </div>

        <div className="text-center">
          <div className="w-[50px] h-[50px] p-1 bg-[#64D8B5]/10 rounded-full flex items-center justify-center mb-2 mx-auto">
            <MapPin className="w-[18px] h-[18px] text-black" />
          </div>
          <p className="text-base font-bold text-black">2.5km</p>
          <p className="text-sm text-[#4D4D4D]">Bus Distance</p>
        </div>

        <div className="text-center">
          <div className="w-[50px] h-[50px] p-1 bg-[#64D8B5]/10 rounded-full flex items-center justify-center mb-2 mx-auto">
            <Gauge className="w-[18px] h-[18px] text-black" />
          </div>
          <p className="text-base font-bold text-black">30km/h</p>
          <p className="text-sm text-[#4D4D4D]">Avg Speed</p>
        </div>
      </div>

      <div className="flex justify-center gap-6 mb-8">
        {[1, 2, 3, 4, 5].map((star, index) => (
          <Star
            key={star}
            onClick={() => handleStarClick(index)}
            className={`w-8 h-8 cursor-pointer transition-colors ${
              index < rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-transparent fill-black/30 hover:text-yellow-400"
            }`}
          />
        ))}
      </div>
      <div className="mb-8">
        <button
          className="w-full bg-[#64D8B5]/50 hover:bg-[#64D8B5]/70 text-black font-extrabold py-4 rounded-[48px] transition-colors"
          onClick={handleReview}
        >
          Review Driver
        </button>
      </div>

      <br />
      <br />
    </div>
  );
};

export default TripCompleted;

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SearchingRide = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/driver-found");
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <div className="flex flex-col items-center justify-center h-full my-10">
      <h4 className="font-bold mb-3 mt-3">Searching for Ride...</h4>
      <style>{`
        .ripple {
          position: relative;
          width: 64px;
          height: 64px;
        }
        .ripple div {
          position: absolute;
          border: 4px solid black;
          opacity: 1;
          border-radius: 50%;
          animation: ripple 1.2s cubic-bezier(0, 0.2, 0.8, 1) infinite;
        }
        .ripple div:nth-child(2) {
          animation-delay: -0.6s;
        }
        @keyframes ripple {
          0% {
            top: 28px;
            left: 28px;
            width: 0;
            height: 0;
            opacity: 1;
          }
          100% {
            top: -1px;
            left: -1px;
            width: 58px;
            height: 58px;
            opacity: 0;
          }
        }
      `}</style>
      <div className="ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default SearchingRide;

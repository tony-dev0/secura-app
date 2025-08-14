const DriverApproaching = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full my-7">
      <h4 className="font-bold mb-3 mt-3">
        Driver is Heading to your location
      </h4>
      <h5 className="text-sm mb-3">Red Toyota Camry 2008</h5>
      <h6 className="text-xs mb-3">Driver will arrive in 5 mins...</h6>

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
      <h4 className="text-center font-semibold text-white mt-6 mb-2">
        <button className="bg-black px-10 py-2 rounded-lg">Cancel Ride</button>
      </h4>
    </div>
  );
};

export default DriverApproaching;

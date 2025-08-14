import { Link } from "react-router-dom";

const BecomeADriver = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col max-w-[768px] mx-auto relative">
      <div className="h-[50vh] relative overflow-hidden">
        <img
          src="/young-black-businessman-test-drive-new-car-rich-african-american-man 2 (1).png"
          className="w-full h-full object-cover"
          alt="Driver"
        />
      </div>

      <div className="absolute top-0 left-0 right-0 h-[50vh] bg-gradient-to-b from-transparent via-transparent to-[#FFFDFD] pointer-events-none"></div>

      <div className="flex-1 bg-white px-6 py-8 flex flex-col justify-center relative z-10">
        <div className="flex justify-center mb-8">
          <div className="flex flex-col items-center">
            <div className="w-13 h-13 ">
              <img src="/icons/secura_logo.svg" />
            </div>
            <span className="text-black font-extrabold text-base">Secura</span>
          </div>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-xl font-extrabold text-black mb-4 leading-tight">
            Drive With Secura <br /> Coming Soon
          </h1>
          <p className="text-black text-[12px] font-medium leading-3.5 px-2">
            We're putting the final touches on a safer, smarter way to drive
            with Secura. Driver sign-up isn't live yet, but it will be worth the
            wait. In the meantime, explore the rider flow and get a feel for
            what's ahead. Stay tuned you'll be the first to know when driving
            with Secura goes live.
          </p>
        </div>

        <div className="">
          <Link to="/home">
            <button className="w-full bg-black text-white font-bold py-4 rounded-full transition-colors hover:bg-gray-800 mb-4">
              Become A Rider
            </button>
          </Link>
          <Link to="/home">
            <button className="w-full bg-gray-200 text-gray-700 font-bold py-4 rounded-full transition-colors hover:bg-gray-300">
              Back To Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BecomeADriver;

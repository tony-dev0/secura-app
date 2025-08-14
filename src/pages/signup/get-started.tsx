import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const GetStarted = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center max-w-[768px] mx-auto">
        <div className="flex flex-col space-y-2">
          <div className="animate-pulse">
            <img src="/icons/secura_logo.svg" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col max-w-[768px] mx-auto px-4 py-6">
      <div className="flex-1 flex flex-col justify-center items-center text-center">
        <div className="mb-16">
          <div className="flex flex-col space-y-2 items-center">
            <img src="/icons/secura_logo.svg" />
          </div>
        </div>

        <div className="mb-12">
          <h1 className="text-[32px] font-bold text-black">
            Let's Get Started!
          </h1>
          <p className="text-black text-base">Let's dive into your account!</p>
        </div>

        <div className="w-full space-y-4">
          <button className="w-full h-fit py-4 px-6 border border-black/20 rounded-full flex items-center justify-center space-x-1 text-sm font-semibold">
            <img src="/icons/devicon_google.svg" alt="google icon" />
            <span className="">Continue with Google</span>
          </button>

          <Link to="/signup" className="block">
            <button className="w-full h-fit py-4 px-8 bg-black text-white rounded-full font-semibold text-sm">
              Sign up
            </button>
          </Link>

          <button className="w-full h-fit py-4 px-6 bg-black/10 text-black border border-black/10 rounded-full font-semibold text-sm">
            Sign in
          </button>
        </div>
      </div>

      <div className="pb-8">
        <p className="text-[10px] text-black/60 text-center leading-relaxed">
          By signing up, you agree to our{" "}
          <span className="underline">Terms & Conditions</span>, acknowledge our{" "}
          <span className="underline">Privacy Policy</span>, and confirm that
          you're over 18. We may send promotions related to our services - you
          can unsubscribe anytime in Communication Settings under your profile.
        </p>
      </div>
    </div>
  );
};

export default GetStarted;

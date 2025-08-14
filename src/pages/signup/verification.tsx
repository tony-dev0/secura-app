import { ArrowLeft } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Modal from "./modal";

const Verification = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [resendTimer, setResendTimer] = useState(30);
  const [showModal, setShowModal] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  const handleInputChange = (index: number, value: string) => {
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 3) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const isComplete = otp.every((digit) => digit !== "");

  const handleRequestCallBack = () => {
    setShowModal(false);
    // Handle call back request logic here
  };

  const handleEditPhoneNumber = () => {
    setShowModal(false);
    window.location.href = "/signup";

    // Navigate back to phone number screen or handle edit logic
  };

  return (
    <div className="min-h-screen bg-white flex flex-col max-w-[768px] mx-auto px-4 relative py-6 md:py-16">
      <div className="pb-6">
        <Link to="/signup" className="inline-block">
          <ArrowLeft />
        </Link>
      </div>

      <div className="flex-1">
        <div className="mb-12">
          <h1 className="text-[28px] font-extrabold text-black mb-3">
            Enter OTP code
          </h1>
          <p className="text-black/30 text-sm">
            Check your messages! we have sent a one - time password to{" "}
            <span className="font-semibold">+234 (0) 8123 45 6789</span>. Enter
            the code below to verify your account and continue.
          </p>
        </div>

        <div className="mb-8">
          <div className="grid grid-cols-4 gap-2">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="h-16.5 text-center text-xl font-medium  bg-black/10 rounded-xl focus:border-2 focus:border-black focus:outline-none"
              />
            ))}
          </div>
        </div>

        <div className="mb-8">
          <p className="text-black/30 text-sm mb-4">
            Resend code in{" "}
            <span className="text-black/60 font-medium">{resendTimer}</span>{" "}
            seconds
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="text-black font-bold text-sm"
          >
            Try a different method
          </button>
        </div>
      </div>

      <div className="pb-8">
        <Link to="/profile" className="block">
          <button
            className={`w-full py-4 px-6 rounded-full font-medium transition-colors ${
              isComplete
                ? "bg-black text-white hover:bg-gray-800"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!isComplete}
          >
            Continue
          </button>
        </Link>
      </div>

      {showModal && (
        <>
          <Modal
            setShowModal={setShowModal}
            handleRequestCallBack={handleRequestCallBack}
            handleEditPhoneNumber={handleEditPhoneNumber}
          />
        </>
      )}
    </div>
  );
};

export default Verification;

import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const ConfirmPin = () => {
  const [pin, setPin] = useState(["", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();

  const handlePinChange = (index: number, value: string) => {
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const newPin = [...pin];
      newPin[index] = value;
      setPin(newPin);

      if (value && index < 3) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !pin[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const isPinComplete = pin.every((digit) => digit !== "");

  return (
    <div>
      <div className="mb-6 text-center">
        <h3 className="font-extrabold text-xl">Driver is at your Location</h3>
        <p className="text-xs font-semibold text-[#4D4D4D]">
          Lawrence Peter . Red Toyota Camry
        </p>
      </div>

      <div className="mb-8">
        <p className="text-[#4D4D4D] text-center text-sm leading-relaxed mb-2.5">
          Confirm the pin from the driver, before you proceed...
        </p>
        <div className="grid grid-cols-4 gap-4">
          {pin.map((digit, index) => (
            <input
              key={index}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handlePinChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="h-16 text-center text-xl font-medium bg-gray-100 rounded-2xl focus:bg-gray-200 focus:outline-none transition-colors"
              placeholder=""
            />
          ))}
        </div>
      </div>

      <button
        className={`w-full py-4 px-6 rounded-full font-medium text-white transition-colors ${
          isPinComplete
            ? "bg-[#BD2915] hover:bg-[#BD2915]/90"
            : "bg-gray-300 cursor-not-allowed"
        }`}
        disabled={!isPinComplete}
        onClick={
          isPinComplete ? () => navigate("/heading-to-destination") : undefined
        }
      >
        Confirm pin
      </button>
    </div>
  );
};

export default ConfirmPin;

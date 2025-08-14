import { useState } from "react";
import { Link } from "react-router-dom";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { ArrowLeft } from "lucide-react";

const SignupForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [errors, setErrors] = useState({
    phone: "",
    terms: "",
  });

  const validatePhone = (phone: string) => {
    if (!phone || phone.length < 10) {
      return "Please enter a valid phone number";
    }
    return "";
  };

  const validateTerms = (agreed: boolean) => {
    if (!agreed) {
      return "You must agree to the Terms & Conditions";
    }
    return "";
  };

  const handlePhoneChange = (phone: string) => {
    setPhoneNumber(phone);
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: validatePhone(phone) }));
    }
  };

  const handleTermsChange = (agreed: boolean) => {
    setAgreedToTerms(agreed);
    if (errors.terms) {
      setErrors((prev) => ({ ...prev, terms: validateTerms(agreed) }));
    }
  };

  const handleSubmit = () => {
    const phoneError = validatePhone(phoneNumber);
    const termsError = validateTerms(agreedToTerms);

    setErrors({
      phone: phoneError,
      terms: termsError,
    });

    if (!phoneError && !termsError) {
      window.location.href = "/verify";
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col max-w-[768px] mx-auto px-4 py-6">
      <div className="pb-6">
        <Link to="/" className="inline-block">
          <ArrowLeft />
        </Link>
      </div>

      <div className="flex-1">
        <div className="mb-10">
          <h1 className="text-[28px] font-extrabold text-black">
            Join Secura Today
          </h1>
          <p className="text-black/30 text-sm leading-relaxed">
            Let's Get started! Enter your phone number to create your Secura
            account.
          </p>
        </div>

        <div className="mb-8">
          <label className="block text-black font-semibold text-base mb-3">
            Phone number
          </label>
          <div
            className={`phone-input-container ${errors.phone ? "error" : ""}`}
          >
            <PhoneInput
              defaultCountry="ng"
              value={phoneNumber}
              onChange={handlePhoneChange}
              inputClassName="custom-phone-input"
              className="w-full"
            />
          </div>
          {errors.phone && (
            <p className="text-red-500 text-[10px] mt-1">{errors.phone}</p>
          )}
        </div>

        <div className="mb-8">
          <label className="flex items-start space-x-3">
            <input
              type="checkbox"
              checked={agreedToTerms}
              onChange={(e) => handleTermsChange(e.target.checked)}
              className="mt-1 w-4 h-4 rounded border-gray-300 text-black checked:bg-black checked:border-black"
            />
            <span className="text-black/30 text-sm">
              I agree to Secura's{" "}
              <span className="text-black font-semibold">
                Terms & Conditions
              </span>
            </span>
          </label>
          {errors.terms && (
            <p className="text-red-500 text-[10px] mt-1 ml-7">{errors.terms}</p>
          )}
        </div>

        <div className="mb-8 text-center">
          <span className="text-black/30 text-sm">
            Already have an account?{" "}
            <span className="text-black font-semibold">Sign in</span>
          </span>
        </div>

        <div className="mb-8 flex items-center">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-4 text-gray-500 text-sm">or</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        <div className="mb-5">
          <button className="w-full h-fit py-4 px-6 border border-black/20 rounded-full flex items-center justify-center space-x-1 text-sm font-semibold">
            <img src="/icons/devicon_google.svg" alt="google icon" />
            <span className="">Continue with Google</span>
          </button>
        </div>
      </div>

      <div className="pb-8">
        <button
          onClick={handleSubmit}
          className="w-full py-4 px-6 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default SignupForm;

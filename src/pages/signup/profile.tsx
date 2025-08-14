import { useState } from "react";
import { Link } from "react-router-dom";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { ArrowLeft, ChevronDown } from "lucide-react";

const Profile = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    gender: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    gender: "",
  });

  const validateFullName = (name: string) => {
    if (!name.trim()) {
      return "Full name is required";
    }
    if (name.trim().length < 2) {
      return "Full name must be at least 2 characters";
    }
    return "";
  };

  const validateEmail = (email: string) => {
    if (!email.trim()) {
      return "Email address is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const validatePhoneNumber = (phone: string) => {
    if (!phone.trim()) {
      return "Phone number is required";
    }
    if (phone.length < 10) {
      return "Please enter a valid phone number";
    }
    return "";
  };

  const validateGender = (gender: string) => {
    if (!gender) {
      return "Please select your gender";
    }
    return "";
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error when user starts typing
    if (errors[field as keyof typeof errors]) {
      let error = "";
      switch (field) {
        case "fullName":
          error = validateFullName(value);
          break;
        case "email":
          error = validateEmail(value);
          break;
        case "phoneNumber":
          error = validatePhoneNumber(value);
          break;
        case "gender":
          error = validateGender(value);
          break;
      }
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const handleCompleteSignup = () => {
    const fullNameError = validateFullName(formData.fullName);
    const emailError = validateEmail(formData.email);
    const phoneError = validatePhoneNumber(formData.phoneNumber);
    const genderError = validateGender(formData.gender);

    setErrors({
      fullName: fullNameError,
      email: emailError,
      phoneNumber: phoneError,
      gender: genderError,
    });

    if (!fullNameError && !emailError && !phoneError && !genderError) {
      // Handle signup completion logic here
      console.log("Signup completed:", formData);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col max-w-[768px] mx-auto px-4 py-8">
      <div className=" pb-8">
        <div className="flex items-center justify-between">
          <Link to="/verify" className="inline-block">
            <ArrowLeft />
          </Link>
          <h1 className="text-xl font-bold text-black">Fill personal info</h1>
          <div className="w-6"></div>
        </div>
      </div>

      <div className="flex-1">
        <div className="mb-8 flex justify-center">
          <img src="/icons/iconamoon_profile-fill.svg" />
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-black font-bold text-base mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              placeholder="Full Name"
              className={`w-full px-5 py-4 h-fit bg-black/10 rounded-xl text-black placeholder-gray-500 outline-none focus:bg-gray-200 transition-colors ${
                errors.fullName ? "border-2 border-red-500" : ""
              }`}
            />
            {errors.fullName && (
              <p className="text-red-500 text-[10px] mt-1">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label className="block text-black font-bold text-base mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="Email Address"
              className={`w-full px-5 py-4 h-fit bg-black/10 rounded-xl text-black placeholder-gray-500 outline-none focus:bg-gray-200 transition-colors ${
                errors.email ? "border-2 border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-[10px] mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-black font-bold text-base mb-1">
              Phone Number
            </label>
            <div
              className={`phone-input-container ${
                errors.phoneNumber ? "error" : ""
              }`}
            >
              <PhoneInput
                defaultCountry="ng"
                value={formData.phoneNumber}
                onChange={(phone) => handleInputChange("phoneNumber", phone)}
                inputClassName="custom-phone-input"
                className="w-full"
              />
            </div>
            {errors.phoneNumber && (
              <p className="text-red-500 text-[10px] mt-1">
                {errors.phoneNumber}
              </p>
            )}
          </div>

          <div>
            <label className="block text-black font-bold text-base mb-1">
              Gender
            </label>
            <div className="relative">
              <select
                value={formData.gender}
                onChange={(e) => handleInputChange("gender", e.target.value)}
                className={`w-full px-5 py-4 h-fit bg-black/10 rounded-xl text-black outline-none appearance-none cursor-pointer ${
                  errors.gender ? "border-2 border-red-500" : ""
                }`}
              >
                <option value="" className="text-gray-500">
                  Select
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
            </div>
            {errors.gender && (
              <p className="text-red-500 text-[10px] mt-1">{errors.gender}</p>
            )}
          </div>
        </div>
      </div>

      <div className="py-8">
        <button
          onClick={handleCompleteSignup}
          className={`w-full py-4 px-6 rounded-full font-medium transition-colors bg-black text-white hover:bg-gray-800 `}
        >
          Complete sign up
        </button>
      </div>
    </div>
  );
};

export default Profile;

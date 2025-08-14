import { ArrowLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Account = () => {
  const menuItems = [
    {
      icon: "/icons/tdesign_location.svg",
      title: "Saved Addresses",
      hasChevron: true,
    },
    {
      icon: "/icons/tdesign_notification.svg",
      title: "Notification",
      hasChevron: true,
    },
    {
      icon: "/icons/fluent_payment-24-regular.svg",
      title: "Payment Methods",
      hasChevron: true,
    },
    {
      icon: "/icons/hugeicons_security-check.svg",
      title: "Account & Security",
      hasChevron: true,
    },
    {
      icon: "/icons/cuida_help-outline.svg",
      title: "Help & Support",
      hasChevron: true,
    },
    {
      icon: "/icons/solar_star-line-duotone.svg",
      title: "Rate us",
      hasChevron: true,
    },
    {
      icon: "/icons/material-symbols_logout-sharp.svg",
      title: "Log Out",
      hasChevron: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col max-w-[768px] mx-auto px-4 py-6">
      <div className="flex items-center mb-8">
        <Link to="/" className="mr-4">
          <ArrowLeft className="text-black" />
        </Link>
      </div>

      <div className="flex flex-col items-center mb-12">
        <div className="mb-1 flex justify-center">
          <img src="/icons/iconamoon_profile-fill.svg" />
        </div>
        <h1 className="text-xl font-bold text-black">Micheal Eton</h1>
        <p className="text-black text-sm">+2349012345685</p>
      </div>

      <div className="flex-1">
        <div className="">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="w-full flex items-center justify-between py-2.5 pt-7 h-fit px-0 border-b border-[#D9D9D9] hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <img src={item.icon} className="h-[17px] w-[17px]" />
                <span className="text-black font-medium text-sm">
                  {item.title}
                </span>
              </div>
              {item.hasChevron && (
                <ChevronRight className="w-[17px] h-[17px] text-black" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Account;

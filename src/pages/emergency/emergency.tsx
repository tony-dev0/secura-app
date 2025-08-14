import { Phone, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Emergency = () => {
  const emergencyContacts = [
    {
      name: "Mom",
      phone: "+234 (0) 8055 12 3467",
      category: "Family",
    },
    {
      name: "Dad",
      phone: "+234 (0) 8055 12 3467",
      category: "Family",
    },
    {
      name: "Bestie",
      phone: "+234 (0) 8055 12 3467",
      category: "Family",
    },
  ];

  const safetyFeatures = [
    {
      icon: "/icons/mdi_location.svg",
      title: "Real-Time Tracking",
      subtitle: "Share your live location",
    },
    {
      icon: "/icons/nav bar03.svg",
      title: "Emergency Button",
      subtitle: "Instant help when needed",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col max-w-[768px] mx-auto px-4 py-6">
      <div className="flex items-center mb-8">
        <Link to="/" className="mr-4">
          <ArrowLeft className="text-black" />
        </Link>
      </div>

      <div className="mb-8">
        <button className="w-full bg-[#83E0C4] rounded-[28px] py-4.5 h-fit flex flex-col items-center justify-center">
          <img src="/icons/nav bar03.svg" />
          <span className="text-black font-extrabold text-xl">
            Emergency Button
          </span>
        </button>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-extrabold text-black mb-4">
          Emergency Contacts
        </h2>
        <div className="space-y-4.5">
          {emergencyContacts.map((contact, index) => (
            <div
              key={index}
              className="bg-black/10 rounded-xl p-5.5 flex items-center justify-between"
            >
              <div className="flex-1">
                <h3 className="font-bold text-black text-base">
                  {contact.name}
                </h3>
                <p className="text-black text-base">{contact.phone}</p>
                <p className="text-black font-bold text-sm">
                  {contact.category}
                </p>
              </div>
              <button className="p-3 bg-[#83E0C4] rounded-xl flex items-center justify-center">
                <Phone className="w-6 h-6 text-black" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-extrabold text-black mb-4">
          Safety Features
        </h2>
        <div className="space-y-4.5">
          {safetyFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-black/10 rounded-xl p-5.5 flex items-center justify-between"
            >
              <div className="flex items-center flex-1">
                <div className="p-3 bg-[#83E0C4] rounded-xl flex items-center justify-center mr-4">
                  <img src={feature.icon} className="w-6 h-6 " />
                </div>
                <div>
                  <h3 className="font-bold text-black text-lg leading-4">
                    {feature.title}
                  </h3>
                  <p className="text-black">{feature.subtitle}</p>
                </div>
              </div>
              <div className="">
                <img src="/icons/teenyicons_tick-circle-outline.svg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Emergency;

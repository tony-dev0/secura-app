import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", icon: "/homeicon.png", path: "/home" },
    { name: "Emergency", icon: "/emergency.png", path: "/emergency" },
    { name: "Ride History", icon: "/ride-history.png", path: "/ride-history" },
    { name: "Account", icon: "/person.png", path: "/account" },
  ];
  const arr = [
    "searching-ride",
    "driver-found",
    "driver-approaching",
    "driver-location",
    "heading-destination",
    "arrival",
    "payment-method",
    "pay-with-card",
  ];
  if (arr.some((route) => location.pathname.includes(route))) {
    return null;
  }

  return (
    <div className="icon footer flex justify-around p-3 bg-[#eeeeee]">
      {navItems.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          className={`flex flex-col items-center ${
            location.pathname.includes(item.path) ? "active" : ""
          }`}
        >
          <img src={item.icon} alt={item.name} />
          <span className="text-xs text-center font-semibold">{item.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Footer;
